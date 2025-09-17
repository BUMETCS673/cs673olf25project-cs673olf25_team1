import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Community from "./pages/Community";


function App() {
 

  
  return (
    <Router>
      <Routes>
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Navigate to="/community" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
