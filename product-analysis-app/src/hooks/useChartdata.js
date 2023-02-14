import { useEffect, useState } from 'react';

const useChartdata = () => {
   const [datas, setDatas] = useState([]);
   useEffect(()=> {
    fetch('chartData.json')
    .then(res=>res.json())
    .then(data=>setDatas(data))
   },[]);
   return [datas, setDatas];
};

export default useChartdata;