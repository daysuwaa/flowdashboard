'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Sat', deposit: 250, withdraw: 480 },
  { name: 'Sun', deposit: 130, withdraw: 350 },
  { name: 'Mon', deposit: 240, withdraw: 330 },
  { name: 'Tue', deposit: 350, withdraw: 460 },
  { name: 'Wed', deposit: 230, withdraw: 120 },
  { name: 'Thu', deposit: 220, withdraw: 360 },
  { name: 'Fri', deposit: 310, withdraw: 370 },
];

const Graph = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full h-[300px]">
      <h2 className="text-[#343C6A] text-lg font-semibold mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#718EBF", fontSize: 12 }} />
          <YAxis tick={{ fill: "#718EBF", fontSize: 12 }} />
          <Tooltip />
          <Legend
            wrapperStyle={{ top: -10 }}
            iconType="circle"
            formatter={(value) => (
              <span style={{ color: '#718EBF', fontSize: '14px' }}>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
            )}
          />
          <Bar dataKey="deposit" fill="#2D60FF" radius={[10, 10, 0, 0]} barSize={20} />
          <Bar dataKey="withdraw" fill="#000000" radius={[10, 10, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;