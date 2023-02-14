import React from 'react';
import images_5 from "../images/images_5.jpg";
import HelmetTitle from './Common/HelmetTitle';

const About = () => {
    return (
        <div className='sm:px-16 px-5 about-page h-screen grid gap-2 sm:gap-12 py-12'>
            <HelmetTitle>About</HelmetTitle>
            <div className='p-3 rounded-2xl bg-gray-200'>
                <img className='rounded-full' src={images_5} alt="" />
                <h2 className='sm:text-4xl font-bold'>Osama Abdullah</h2>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>What I achive in next 6 month</h1>
                <p className='p-3 text-xl bg-gray-200 my-5 rounded-2xl'>
                    In first month I finish my basic web development learning goal. Then I build some projects. And stay learn more about React. I want to comfortable with Js most. Every single day I invest 4-5 hour for building projects and 3-4 hour for others in Js world.
                </p>
            </div>
        </div>
    );
};

export default About;