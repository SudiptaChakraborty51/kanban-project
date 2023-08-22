import React, { useContext } from "react";
import "./filterModal.css";
import { TaskContext } from "../../../context/taskContext";

const FilterModal = ({ showFilters, setShowFilters }) => {
  const { taskState, darkMode } = useContext(TaskContext);

  const assigneeArray = taskState?.tasks?.reduce(
    (acc, curr) =>
      acc.includes(curr.assignee) ? acc : [...acc, curr.assignee],
    []
  );

  const priorityArray = taskState?.tasks?.reduce(
    (acc, curr) =>
      acc.includes(curr.priority) ? acc : [...acc, curr.priority],
    []
  );

  return (
    <div className={`filter-modal ${darkMode && "bgSecondaryDarkMode"}`}>
      <div className="modal-header">
        <h3>Filters</h3>
        <span className="clear-btn">Clear</span>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setShowFilters((prev) => !prev)}
        ></i>
      </div>
      <hr />
      <div className="filter-content">
        <p>Filter By Date</p>
        <div>
          <label>
            <input type="radio" />
            <span>Ascending based on start date</span>
          </label>
          <label>
            <input type="radio" />
            <span>Descending based on start date</span>
          </label>
          <label>
            <input type="radio" />
            <span>Ascending based on end date</span>
          </label>
          <label>
            <input type="radio" />
            <span>Descending based on end date</span>
          </label>
        </div>
      </div>
      <hr />
      <div className="filter-content">
        <p>Filter By Assignee</p>
        <div>
          {assigneeArray?.map((assignee) => (
            <label>
              <input type="checkbox" />
              <span>{assignee}</span>
            </label>
          ))}
        </div>
      </div>
      <hr />
      <div className="filter-content">
        <p>Filter By Priority</p>
        <div>
          {priorityArray?.map((priority) => (
            <label>
              <input type="radio" />
              <span>{priority}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
