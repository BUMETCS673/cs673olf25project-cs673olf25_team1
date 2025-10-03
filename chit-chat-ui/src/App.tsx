import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Community from "./pages/Community";
import Ai from "./pages/Ai";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import ResponsiveSidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState<any>(null);

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
              <ResponsiveSidebar>
                <main className="content">
                  <Routes>
                    <Route path="community" element={<Community />} />
                    <Route path="ai" element={<Ai />} />
                    <Route path="*" element={<Navigate to="/community" replace />} />
                  </Routes>
                </main>
              </ResponsiveSidebar>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
