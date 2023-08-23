import React, { useContext } from "react";
import "./filterModal.css";
import { TaskContext } from "../../../context/taskContext";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const FilterModal = ({ setShowFilters }) => {
  const { taskState, darkMode, taskDispatch } = useContext(TaskContext);

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

  const filterModalNode = useOutsideClick(() => setShowFilters(false));

  return (
    <div
      className={`filter-modal ${darkMode && "bgSecondaryDarkMode"}`}
      ref={filterModalNode}
    >
      <div className="modal-header">
        <h3>Filters</h3>
        <span
          className="clear-btn"
          onClick={() => {
            taskDispatch({ type: "CLEAR_FILTERS", payload: taskState.tasks });
            setShowFilters((prev) => !prev);
          }}
        >
          Clear
        </span>
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
            <input
              type="radio"
              value="startDate_asc"
              checked={taskState.dateOption === "startDate_asc"}
              onChange={(e) =>
                taskDispatch({
                  type: "SET_DATE_OPTION",
                  payload: e.target.value,
                })
              }
            />
            <span>Ascending based on start date</span>
          </label>
          <label>
            <input
              type="radio"
              value="startDate_desc"
              checked={taskState.dateOption === "startDate_desc"}
              onChange={(e) =>
                taskDispatch({
                  type: "SET_DATE_OPTION",
                  payload: e.target.value,
                })
              }
            />
            <span>Descending based on start date</span>
          </label>
          <label>
            <input
              type="radio"
              value="endDate_asc"
              checked={taskState.dateOption === "endDate_asc"}
              onChange={(e) =>
                taskDispatch({
                  type: "SET_DATE_OPTION",
                  payload: e.target.value,
                })
              }
            />
            <span>Ascending based on end date</span>
          </label>
          <label>
            <input
              type="radio"
              value="endDate_desc"
              checked={taskState.dateOption === "endDate_desc"}
              onChange={(e) =>
                taskDispatch({
                  type: "SET_DATE_OPTION",
                  payload: e.target.value,
                })
              }
            />
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
              <input
                type="checkbox"
                value={assignee}
                checked={taskState?.assigneeOption?.includes(assignee)}
                onChange={(e) =>
                  taskDispatch({
                    type: "SET_ASSIGNEE_OPTION",
                    payload: e.target.value,
                  })
                }
              />
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
              <input
                type="radio"
                value={priority}
                checked={taskState.priorityOption === priority}
                onChange={(e) =>
                  taskDispatch({
                    type: "SET_PRIORITY_OPTION",
                    payload: e.target.value,
                  })
                }
              />
              <span>{priority}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
