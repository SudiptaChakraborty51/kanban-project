import React, { useContext } from "react";
import "./board.css";
import { TaskContext } from "../../context/taskContext";
import ClipLoader from "react-spinners/ClipLoader";
import Columns from "./components/Columns/columns";
import { DragDropContext } from "react-beautiful-dnd";
import Filters from "../../components/Filters/filters";

const Board = () => {
  const { loading, taskStatus, darkMode, taskDispatch } =
    useContext(TaskContext);

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    taskDispatch({
      type: "UPDATE_TASKS",
      payload: { id: result.draggableId, status: destination.droppableId },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`board ${darkMode && "bgDarkmode"}`}>
        {loading ? (
          <ClipLoader color="var(--primary-color)" size={60} />
        ) : (
          <div className="board-main">
            <div className="filter-container">
              <Filters />
            </div>
            <div className="board-columns-container">
              {taskStatus.map((status) => (
                <Columns key={status} status={status} />
              ))}
            </div>
          </div>
        )}
      </div>
    </DragDropContext>
  );
};

export default Board;
