"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  { name: "Jul", uv: 120 },
  { name: "Aug", uv: 300 },
  { name: "Sep", uv: 450 },
  { name: "Oct", uv: 780 },
  { name: "Nov", uv: 220 },
  { name: "Dec", uv: 520 },
  { name: "Jan", uv: 660 },
];

const cardinal = curveCardinal.tension(0.2);

const BalanceGraph = () => {
  return (
       
    <div className="bg-white p-2 h-[210px]  rounded-2xl shadow-sm">
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#718EBF", fontSize: 12 }} />
            <YAxis tick={{ fill: "#718EBF", fontSize: 12 }} />
            <Tooltip />
            <Area
              type={cardinal}
              dataKey="uv"
              stroke="#1814F3"
              strokeWidth={3}
              fill="url(#colorUv)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceGraph;