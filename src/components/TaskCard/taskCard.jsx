import React from "react";
import "./taskCard.css";
import { formatDate } from "../../utils/formatDate";

const TaskCard = ({ task }) => {
  const {
    id,
    name,
    summary,
    priority,
    effortSpent,
    startDate,
    endDate,
    type,
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
    <div key={id} className="task-card">
      <h3>{name}</h3>
      <span>{summary}</span>
      <div>
        <i className="fa-regular fa-circle-user"></i> <span>{assignee}</span>
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
  );
};

export default TaskCard;
