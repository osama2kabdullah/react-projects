import React, { useContext } from 'react';
import { AppContext } from '../../App';
import HelemetMe from '../shared/HelemetMe';
import Bannar from './Bannar';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Header from './header/Header';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    const {data} = useContext(AppContext);
    return (
        <div>
            <HelemetMe>Home</HelemetMe>
            <Bannar></Bannar>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;