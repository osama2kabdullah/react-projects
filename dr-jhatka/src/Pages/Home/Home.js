import React from 'react';
import HelmetTitle from '../Common/HelmetTitle';
import Bannar from './Bannar';
import Service from './Services/Service';

const Home = () => {
    return (
        <section>
            <HelmetTitle>Home</HelmetTitle>
            <Bannar></Bannar>
            <Service></Service>
        </section>
    );
};

export default Home;