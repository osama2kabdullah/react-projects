import React from 'react';
import auth from '../../firebase.init';
import ButtonMe from './ButtonMe';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const AltLogin = () => {
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={ async ()=>{ await signInWithGoogle(); error || await navigate('/')}} className='mb-8 text-center'>
                <ButtonMe>Continue with Google</ButtonMe>
            </div>
            <div className='grid grid-cols-3 items-center' style={{gridTemplateColumns: '45% 10% 45%'}}>
                <div className='bg-gray-300 h-[1px]'></div>
                <p className='mx-auto'>or</p>
                <div className='bg-gray-300 h-[1px]'></div>
            </div>
        </div>
    );
};

export default AltLogin;