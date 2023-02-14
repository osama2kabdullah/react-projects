import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AltLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <button onClick={()=>signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
    );
};

export default AltLogin;