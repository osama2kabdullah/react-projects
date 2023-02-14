import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from "../../firebase.init";
import FullPageLoading from './FullPageLoading';
import { signOut } from "firebase/auth";

const RequirAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const token = localStorage.getItem('access_token');
    if(loading){
        return <FullPageLoading></FullPageLoading>
    }
    
    if(user && token){
        return children;
    }
    signOut(auth).then(()=>localStorage.removeItem('access_token'))
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default RequirAuth;