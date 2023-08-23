import React, { useContext } from "react";
import "./barCharts.css";
import { Bar } from "react-chartjs-2";
import { TaskContext } from "../../../context/taskContext";

const BarCharts = () => {
  const { taskState } = useContext(TaskContext);

  const statusTaskCount = taskState?.tasks?.reduce((accumulator, task) => {
    const status = task.status;
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {});

  const priorityTaskCount = taskState?.tasks?.reduce((accumulator, task) => {
    const priority = task.priority;
    accumulator[priority] = (accumulator[priority] || 0) + 1;
    return accumulator;
  }, {});

  return (
    <div className="bar-chart">
      <div className="bar-chart-main">
        <div className="status-bar">
          <h2>Task Count based on Status</h2>
          <Bar
            data={{
              labels: taskState?.tasks?.reduce(
                (acc, curr) =>
                  acc.includes(curr.status) ? acc : [...acc, curr.status],
                []
              ),
              datasets: [
                {
                  label: "Number of tasks",
                  data: Object.values(statusTaskCount),
                  backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                  ],
                  borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1.5,
                },
              ],
            }}
          />
        </div>
        <div className="priority-bar">
          <h2>Task Count based on Priority</h2>
          <Bar
            data={{
              labels: taskState?.tasks?.reduce(
                (acc, curr) =>
                  acc.includes(curr.priority) ? acc : [...acc, curr.priority],
                []
              ),
              datasets: [
                {
                  label: "Number of tasks",
                  data: Object.values(priorityTaskCount),
                  backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                  ],
                  borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1.5,
                },
              ],
            }}
            options={{
              indexAxis: "y",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BarCharts;
