import React, { useContext } from 'react';
import "./metrics.css";
import BarCharts from '../../components/Charts/barCharts/barCharts';
import PieCharts from '../../components/Charts/doughnutCharts/doughnutCharts';
import { TaskContext } from '../../context/taskContext';

const Metrics = () => {
  const {darkMode} = useContext(TaskContext);

  return (
    <div className={`metrics ${darkMode && "bgDarkmode"}`}>
      <h1>Task Metrics</h1>
      <BarCharts />
      <PieCharts />
    </div>
  )
}

export default Metrics
