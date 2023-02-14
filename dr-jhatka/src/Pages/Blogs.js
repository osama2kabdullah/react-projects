import React from 'react';
import HelmetTitle from './Common/HelmetTitle';

const Blogs = () => {
    return (
        <div className='grid gap-6 mx-16 my-4'>
            <HelmetTitle>Blogs</HelmetTitle>
            <h1 className='text-4xl text-center'>Answering 3 qoustion</h1>
            <div className='p-3 rounded-2xl bg-sky-200'>
                <h1 className='sm:text-3xl text-md font-bold'>Difference between authorization and authentication</h1>
                <p className='text-xl'>
                    Authentication means approve you for there require on the other hand authentication means what you can do.
                </p>
            </div>
            <div className='p-3 rounded-2xl bg-sky-200'>
                <h1 className='sm:text-3xl text-md font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-xl'>
                    In this project I use firebase user authentication system. Becouse firebase esy to apply on project and ready-made UI that make me cool. I have more option to set authentication system in this project. such MongoDb, Okta, AuthO JSON Web Token etc. but firebase is more easy to use.
                </p>
            </div>
            <div className='p-3 rounded-2xl bg-sky-200'>
                <h1 className='sm:text-3xl text-md font-bold'> What other services does firebase provide other than authentication</h1>
                <p className='text-xl'>Firebase also provide Realtime Database, Hosting, Cloud messaging, Google Analytics for free, Crashlytics, Performance and Test lab etc</p>
            </div>
        </div>
    );
};

export default Blogs;