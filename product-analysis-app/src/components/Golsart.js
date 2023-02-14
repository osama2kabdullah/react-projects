import React, { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { ChartdataContext } from "./Dashboard";

const Golsart = () => {
  const datas = useContext(ChartdataContext);

  const COLORS = ["#d45087", "#f95d6a", "#ff7c43", "#ffa600", '#a05195', '#665191', '#2f4b7c', '#003f5c'];
  
  const CustomTooltip = ({ payload, active, id }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3">
          <p>{`Sells ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div>
        <h1 className="text-3xl m-4 text-center font-bold">Per Month Sells</h1>
      <PieChart width={400} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="sell"
          data={datas}
          fill="#8884d8"
        >
          {datas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip></CustomTooltip>}/>
        <Legend
        verticalAlign="top" align="top"
          payload={datas.map((item, index) => ({
            id: item.month,
            type: "square",
            value: `${item.month}`,
            color: COLORS[index % COLORS.length],
          }))}
        />
      </PieChart>
    </div>
  );
};

export default Golsart;
