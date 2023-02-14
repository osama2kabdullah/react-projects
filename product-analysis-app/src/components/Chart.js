import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { ChartdataContext } from "./Dashboard";

const Chart = () => {
  const datas = useContext(ChartdataContext);

  return (
    <div>
      <h1 className="text-3xl m-4 text-center font-bold">Investment VS Revenue</h1>
      <BarChart width={550} height={340} data={datas}>
        <Tooltip></Tooltip>
        <XAxis dataKey='month'></XAxis>
        <YAxis></YAxis>
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey='revenue' fill="#82ca9d"/>
      </BarChart>
    </div>
  );
};

export default Chart;
