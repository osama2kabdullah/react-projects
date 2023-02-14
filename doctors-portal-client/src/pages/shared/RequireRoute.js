import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingFullPage from './LoadingFullPage';

const RequireRoute = ({children}) => {
    const [currentUser, loaading] = useAuthState(auth);
    const location = useLocation();
    if(loaading){
        return <LoadingFullPage></LoadingFullPage>
    }
    if(!currentUser){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    if(!currentUser?.emailVerified){
        return <p>We just sent a varification link in your email</p>
    }
    return children
};

export default RequireRoute;