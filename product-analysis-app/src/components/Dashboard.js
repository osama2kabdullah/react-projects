import React from 'react';
import useChartdata from '../hooks/useChartdata';
import Chart from './Chart';
import Golsart from './Golsart';

export const ChartdataContext = React.createContext('hello')

const Dashboard = () => {
    
    const [datas] = useChartdata();
    
    return (
        <ChartdataContext.Provider value={datas}>
        <div className='m-16 grid grid-cols-2 gap-10'>
            <Chart></Chart>
            <Golsart></Golsart>
        </div>
        </ChartdataContext.Provider>
    );
};

export default Dashboard;