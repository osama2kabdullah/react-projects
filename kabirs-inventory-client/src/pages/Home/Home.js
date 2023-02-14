import React from 'react';
import HelmetMe from '../shared/HelmetMe';
import Bannar from './Bannar';
import InstockProducts from './InstockProducts/InstockProducts';



const Home = () => {
    return (
        <div>
            <HelmetMe>Home</HelmetMe>
            <Bannar></Bannar>
            <InstockProducts></InstockProducts>
        </div>
    );
};

export default Home;