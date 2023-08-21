import React, { useContext } from "react";
import "./columns.css";
import { TaskContext } from "../../../../context/taskContext";
import TaskCard from "../../../../components/TaskCard/taskCard";

const Columns = ({ status }) => {
  const { readyTasks, inProgressTasks, testingTasks, doneTasks } =
    useContext(TaskContext);

  let taskToRender;
  let borderColor;

  if (status === "Ready") {
    taskToRender = readyTasks;
    borderColor = "ready-border";
  }
  if (status === "In Progress") {
    taskToRender = inProgressTasks;
    borderColor = "in-progress-border";
  }
  if (status === "Testing") {
    taskToRender = testingTasks;
    borderColor = "testing-border";
  }
  if (status === "Done") {
    taskToRender = doneTasks;
    borderColor = "done-border";
  }

  return (
    <div className="columns">
      <div className={`columns-heading ${borderColor}`}>
        <span>{status.toUpperCase()}</span>{" "}
        <span>({taskToRender?.length})</span>
      </div>
      <div className="columns-item-container">
      {taskToRender?.length === 0 ? (
        <p>No task is present</p>
      ) : (
        taskToRender?.map((task) => <TaskCard task={task} key={task.id} />)
      )}
      </div>
    </div>
  );
};

export default Columns;
