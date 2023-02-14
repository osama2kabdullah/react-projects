import React, { useEffect, useState } from 'react';

const useLoadData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return [datas, setDatas];
};

export default useLoadData;