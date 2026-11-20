import React from "react";
import "./BarChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 500 },
  { month: "May", sales: 900 },
];

function MyBarChart() {
  return (
    <div className="chart-container">
      <h2>Monthly Sales</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="sales"
            fill="#6366f1"
            barSize={40}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;
