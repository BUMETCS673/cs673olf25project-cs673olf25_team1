import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Community from "./pages/Community";
import Ai from "./pages/Ai";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import ResponsiveSidebar from "./components/Sidebar";
import "./index.css"
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';

function App() {
  const [user, setUser] = useState<any>(null);

  const theme = createTheme({
    typography: {
      fontFamily:
        '"Inter", sans-serif',
    },
  });

  return (
    <Router>
      <Routes>
        {/* Public route: Login */}
        <Route path="/login" element={<Login onLogin={setUser} />} />

        {/* Protected routes: Wrap with sidebar */}
        <Route
          path="/*"
          element={
            <ProtectedRoute user={user}>
              <ThemeProvider theme={theme}>
                <ResponsiveSidebar>
                  <main className="content">
                    <Routes>
                      <Route path="community" element={<Community />} />
                      <Route path="ai" element={<Ai />} />
                      <Route path="*" element={<Navigate to="/community" replace />} />
                    </Routes>
                  </main>
                </ResponsiveSidebar>
              </ThemeProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
