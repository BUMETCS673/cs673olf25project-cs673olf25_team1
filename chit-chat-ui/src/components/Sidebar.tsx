import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Burger Button (mobile only) */}
      <button className="burger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Dark overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink 
            to="/community" 
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={closeSidebar}
          >
            Community
          </NavLink>
          <NavLink 
            to="/ai" 
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={closeSidebar}
          >
            AI
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
