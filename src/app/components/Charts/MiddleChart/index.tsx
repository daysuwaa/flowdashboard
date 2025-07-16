'use client';
import React from 'react';
import Graph from './WeeklyActivityChart';
import ExpenseStatistics from './ExpenseStatisticsChart';

const MiddleCharts = () => {
  return (
    <div className="mt-6 grid lg:grid-cols-3 gap-10">
      <Graph />
      <ExpenseStatistics />
    </div>
  );
};

export default MiddleCharts;