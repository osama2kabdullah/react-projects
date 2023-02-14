import { useEffect, useState } from "react";

const useLoadData = (params = 'https://restcountries.com/v3.1/all') => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch(params)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[params]);
    return [datas, setDatas];
};

export default useLoadData;