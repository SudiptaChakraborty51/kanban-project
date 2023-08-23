import React, { useContext } from "react";
import "./doughnutCharts.css";
import { Doughnut } from "react-chartjs-2";
import { TaskContext } from "../../../context/taskContext";
import Chart from "chart.js/auto";

const DoughnutCharts = () => {
  const { taskState } = useContext(TaskContext);

  const assigneeTaskCount = taskState?.tasks?.reduce((accumulator, task) => {
    const assignee = task.assignee;
    accumulator[assignee] = (accumulator[assignee] || 0) + 1;
    return accumulator;
  }, {});

  return (
    <div className="doughnut-chart">
      <div className="doughnut-chart-main">
        <div className="assignee-doughnut">
          <h2>Task Count based on Assignee</h2>
          <Doughnut
            style={{ width: "100%", height: "100%" }}
            data={{
              labels: taskState?.tasks?.reduce(
                (acc, curr) =>
                  acc.includes(curr.assignee) ? acc : [...acc, curr.assignee],
                []
              ),
              datasets: [
                {
                  label: "Number of tasks",
                  data: Object.values(assigneeTaskCount),
                  backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                  ],
                  borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1.5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutCharts;
