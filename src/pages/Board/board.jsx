import React, { useContext } from "react";
import "./board.css";
import { TaskContext } from "../../context/taskContext";
import ClipLoader from "react-spinners/ClipLoader";
import Columns from "./components/Columns/columns";
import { DragDropContext } from "react-beautiful-dnd";

const Board = () => {
  const {
    loading,
    taskStatus,
    darkMode,
    readyTasks,
    inProgressTasks,
    testingTasks,
    doneTasks,
  } = useContext(TaskContext);

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`board ${darkMode && "bgDarkmode"}`}>
        {loading ? (
          <ClipLoader color="var(--primary-color)" size={60} />
        ) : (
          <div className="board-columns-container">
            {taskStatus.map((status) => (
              <Columns key={status} status={status} />
            ))}
          </div>
        )}
      </div>
    </DragDropContext>
  );
};

export default Board;
