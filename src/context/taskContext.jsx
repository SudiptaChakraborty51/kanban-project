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

  const filteredTasks =
    taskState?.search?.trim() !== ""
      ? taskState.tasks.filter((task) =>
          task?.name
            ?.toLowerCase()
            .replace(/\s/g, "")
            .includes(taskState?.search?.toLowerCase().replace(/\s/g, ""))
        )
      : taskState.tasks;

  const taskStatus = ["Ready", "In Progress", "Testing", "Done"];

  const readyTasks = filteredTasks?.filter(({ status }) => status === "Ready");
  const inProgressTasks = filteredTasks?.filter(
    ({ status }) => status === "In Progress"
  );
  const testingTasks = filteredTasks?.filter(
    ({ status }) => status === "Testing"
  );
  const doneTasks = filteredTasks?.filter(({ status }) => status === "Done");

  useEffect(() => {
    localStorage.setItem("theme", `${darkMode ? "dark" : "light"}`);
  }, [darkMode]);

  return (
    <TaskContext.Provider
      value={{
        loading,
        taskState,
        taskDispatch,
        darkMode,
        setDarkMode,
        readyTasks,
        inProgressTasks,
        testingTasks,
        doneTasks,
        taskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
