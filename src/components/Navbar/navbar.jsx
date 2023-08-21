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
          <i className="fa-solid fa-magnifying-glass" title="search"></i>
        </div>
        <div className="right-nav">
          <i className="fa-solid fa-chart-simple" title="metrics" onClick={() => navigate("/metrics")}></i>
          {darkMode ? (
            <i
              class="fa-solid fa-sun"
              onClick={() => setDarkMode(false)}
              title="light mode"
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon"
              onClick={() => setDarkMode(true)}
              title="dark mode"
            ></i>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
