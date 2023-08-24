import React, { useContext } from "react";
import "./columns.css";
import { TaskContext } from "../../../../context/taskContext";
import TaskCard from "../../../../components/TaskCard/taskCard";
import { Droppable } from "react-beautiful-dnd";

const Columns = ({ status }) => {
  const { readyTasks, inProgressTasks, testingTasks, doneTasks, darkMode } =
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
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            className={`columns-item-container ${snapshot.isDraggingOver && !darkMode ? "dragactive" : ""} ${snapshot.isDraggingOver && darkMode ? "dragactive-dark" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskToRender?.length === 0 ? (
              <p>No task is present</p>
            ) : (
              taskToRender?.map((task, index) => (
                <TaskCard task={task} key={task.id} index={index}/>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Columns;
