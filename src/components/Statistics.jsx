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

const data = [
  {
    name: "Assignment 1",
    marks: 57,
  },
  {
    name: "Assignment 2",
    marks: 50,
  },
  {
    name: "Assignment 3",
    marks: 60,
  },
  {
    name: "Assignment 4",
    marks: 60,
  },
  {
    name: "Assignment 5",
    marks: 57,
  },
  {
    name: "Assignment 6",
    marks: 60,
  },
  {
    name: "Assignment 7",
    marks: 60,
  },
];

const Statistics = () => {
  return (
    <div className="my-container h-[80vh] py-20">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
