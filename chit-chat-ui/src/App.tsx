import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Community from "./pages/Community";
import Ai from "./pages/Ai";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import ResponsiveSidebar from "./components/Sidebar";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import socket from "./hooks/socket";


function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [themeColor, setThemeColor] = useState("#3b82f6");

  const theme = createTheme({
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
  });

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    let parsedUser = null;
    if (savedUser) {
      try {
        parsedUser = JSON.parse(savedUser);
      } catch (err) {
        console.error("Failed to parse saved user:", err);
        sessionStorage.removeItem("user"); // clear invalid value
      }
    }
    setUser(parsedUser);
    async function fetchProfile() {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) return; // Not logged in

        const { data } = await axios.get("/account/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
        //sessionStorage.setItem("user", JSON.stringify(data));
        const user = JSON.parse(sessionStorage.getItem("user") || "{}");
        socket.emit("user-logged-in", { username: user.username });
        socket.emit("recieve-existing-messages");
      } catch (err) {
        console.error("Failed to fetch profile", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleLogin = ({ user, token }: { user: any; token: string }) => {
    console.log("Handling login for user:", user);
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", token);
    setUser(user);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public route: Login */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/community" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/community" /> : <Register />}
        />

        {/* Protected routes: Wrap with sidebar */}
        <Route
          path="/*"
          element={
            <ProtectedRoute user={user}>
              <ThemeProvider theme={theme}>
                <div
                  style={{ backgroundColor: themeColor }}
                  className="min-h-screen"
                >
                  <ResponsiveSidebar onLogout={handleLogout}>
                    <main className="content">
                      <Routes>
                        <Route path="community" element={<Community />} />
                        <Route path="ai" element={<Ai />} />
                        <Route
                          path="profile"
                          element={
                            <Profile
                              user={user} // the current logged-in user
                              onUpdateUser={(updatedUser) =>
                                setUser(updatedUser)
                              } // updates app state
                            />
                          }
                        />
                        <Route
                          path="*"
                          element={<Navigate to="/community" replace />}
                        />
                      </Routes>
                    </main>
                  </ResponsiveSidebar>
                </div>
              </ThemeProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
