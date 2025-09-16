// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AI from "./pages/AI";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/ai" element={<AI />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Navigate to="/ai" replace />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
