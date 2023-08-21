import React, { useContext } from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/taskContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <div className={`navbar ${darkMode && "bgDarkmode"}`}>
      <nav>
        <div className="left-nav" onClick={() => navigate("/")}>
          <NavLink to="/" className="navlink">
            <h2>Kanban</h2>
          </NavLink>
        </div>
        <div className={`middle-nav ${darkMode && "bgSecondaryDarkMode"}`}>
          <input
            type="text"
            placeholder="Search tasks by name..."
            className={`${darkMode && "bgSecondaryDarkMode"}`}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="right-nav">
          {darkMode ? (
            <i class="fa-solid fa-sun" onClick={() => setDarkMode(false)}></i>
          ) : (
            <i
              className="fa-solid fa-moon"
              onClick={() => setDarkMode(true)}
            ></i>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
