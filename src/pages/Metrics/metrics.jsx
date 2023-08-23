import React from 'react';
import "./metrics.css";
import BarCharts from '../../components/Charts/barCharts/barCharts';
import PieCharts from '../../components/Charts/doughnutCharts/doughnutCharts';

const Metrics = () => {
  return (
    <div className='metrics'>
      <h1>Task Metrics</h1>
      <BarCharts />
      <PieCharts />
    </div>
  )
}

export default Metrics
