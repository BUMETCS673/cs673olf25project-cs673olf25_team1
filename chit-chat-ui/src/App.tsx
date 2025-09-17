import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Ai from "./pages/Ai";
import "./App.css";
import ResponsiveSidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <ResponsiveSidebar>
        <main className="content">
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="*" element={<Navigate to="/community" replace />} />
          </Routes>
        </main>
      </ResponsiveSidebar>
    </Router>
  );
}

export default App;
