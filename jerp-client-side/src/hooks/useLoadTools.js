import React from 'react';
import { useQuery } from 'react-query';

const useLoadTools = () => {
    const {data:tools, isLoading, error, refetch} = useQuery(['alldata'], ()=>fetch('http://localhost:5000/products').then(res=>res.json()));
    return {tools, isLoading, refetch};
};

export default useLoadTools;