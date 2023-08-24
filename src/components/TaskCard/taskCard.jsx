import React, { useContext } from "react";
import "./taskCard.css";
import { formatDate } from "../../utils/formatDate";
import { TaskContext } from "../../context/taskContext";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  const { darkMode } = useContext(TaskContext);

  const {
    id,
    name,
    summary,
    priority,
    effortSpent,
    startDate,
    endDate,
    type,
    status,
    assignee,
  } = task;

  let priorityStyle;

  if (priority === "High") {
    priorityStyle = {
      color: "var(--red-color)",
      border: "1px solid var(--red-color)",
      backgroundColor: "var(--light-red-color)",
    };
  }
  if (priority === "Medium") {
    priorityStyle = {
      color: "var(--yellow-color)",
      border: "1px solid var(--yellow-color)",
      backgroundColor: "var(--light-yellow-color)",
    };
  }
  if (priority === "Low") {
    priorityStyle = {
      color: "var(--green-color)",
      border: "1px solid var(--green-color)",
      backgroundColor: "var(--light-green-color)",
    };
  }

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          key={id}
          className={`task-card ${darkMode && "bgSecondaryDarkMode"} ${
            snapshot.isDragging ? "drag" : ""
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3 style={{ textDecoration: status === "Done" && "line-through" }}>
            {name}
          </h3>
          <span>{summary}</span>
          <div>
            <i className="fa-regular fa-circle-user"></i>{" "}
            <span>{assignee}</span>
          </div>
          <div>
            <i className="fa-solid fa-clock-rotate-left"></i>{" "}
            <span>{effortSpent} hours spent</span>
          </div>
          <div>
            <i className="fa-regular fa-calendar"></i>{" "}
            <span>{formatDate(startDate)}</span>
          </div>
          <div>
            <i className="fa-regular fa-calendar-check"></i>{" "}
            <span>{formatDate(endDate)}</span>
          </div>
          <div className="priority-type-div">
            <span style={priorityStyle}>{priority}</span>
            <span>{type}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
