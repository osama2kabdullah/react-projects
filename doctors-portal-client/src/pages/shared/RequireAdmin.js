import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";
import LoadingFullPage from "./LoadingFullPage";

const RequireAdmin = ({children}) => {
    const [user, loaading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if(loaading || adminLoading){
        return <LoadingFullPage></LoadingFullPage>
    }
    if(!admin){
        return <p>You are not admin</p>
    }
    return children;
};

export default RequireAdmin;