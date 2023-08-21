import React, { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import { initialTaskState, taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, initialTaskState);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://gcp-mock.apiwiz.io/v1/tasks";
      const headers = {
        "x-tenant": "b4349714-47c7-4605-a81c-df509fc7e653",
      };

      setLoading(true);
      try {
        const response = await axios.get(url, { headers });

        if (response.status === 200) {
          taskDispatch({ type: "GET_TASKS", payload: response.data });
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", `${darkMode ? "dark" : "light"}`);
  }, [darkMode]);

  console.log(taskState);

  return (
    <TaskContext.Provider
      value={{ loading, taskState, taskDispatch, darkMode, setDarkMode }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
