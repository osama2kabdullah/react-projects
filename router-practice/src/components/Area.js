import React from "react";
import useLoadData from "../hooks/useLoadData";
import AreaTable from "./AreaTable";

const Area = () => {
  const [datas, setDatas] = useLoadData();

  return (
    <AreaTable datas={datas}></AreaTable>
  );
};

export default Area;
