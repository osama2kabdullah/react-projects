import React from 'react';
import { Outlet } from 'react-router-dom';
import SideLinks from './SideLinks';

const DataChart = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '20% 80%'}} className='m-5'>
            <div className='flex flex-col'>
                <SideLinks to='/chart/population'>Population</SideLinks>
                <SideLinks to='/chart/area'>Area</SideLinks>
            </div>
            <div className='ml-10 bg-gray-100 p-8 h-screen' style={{position: 'sticky', top:0, }}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DataChart;