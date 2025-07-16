'use client';
import Headings from '@/app/dashboard/Headings';
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Entertainment', value: 30 },
  { name: 'Bill Expense', value: 15 },
  { name: 'Investment', value: 20 },
  { name: 'Others', value: 35 },
];

const COLORS = ['#2D60FF', '#FF8700', '#1B2A4E', '#000000'];

const ExpenseStatistics = () => {
  return (
    <div>
        <Headings headingText='Expense Statistics' headingTextPosition='text-start' headingTextSize='text-[22px]'/>
    <div className=" bg-white rounded-2xl p-6 shadow-sm w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
            label={({ name, percent }) => `${Math.round(percent * 100)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#fff" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ExpenseStatistics;