import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Ai from "./pages/Ai";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="*" element={<Navigate to="/community" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
