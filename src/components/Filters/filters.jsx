import React, { useContext, useState } from "react";
import "./filters.css";
import FilterModal from "./components/filterModal";
import { TaskContext } from "../../context/taskContext";

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { darkMode } = useContext(TaskContext);

  return (
    <div>
      <p
        className="filter"
        style={{ color: darkMode && "var(--black-color)" }}
        onClick={() => setShowFilters((prev) => !prev)}
      >
        Filters{" "}
        <span>
          <i className="fa-solid fa-filter"></i>
        </span>
      </p>
      {showFilters && (
        <FilterModal
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      )}
    </div>
  );
};

export default Filters;
