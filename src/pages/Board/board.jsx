import React, { useContext } from "react";
import "./board.css";
import { TaskContext } from "../../context/taskContext";
import ClipLoader from "react-spinners/ClipLoader";
import Columns from "./components/Columns/columns";

const Board = () => {
  const { loading, taskStatus } = useContext(TaskContext);

  return (
    <div className="board">
      {loading ? (
        <ClipLoader />
      ) : (
        <div className="board-columns-container">
          {taskStatus.map((status) => (
            <Columns key={status} status={status} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;