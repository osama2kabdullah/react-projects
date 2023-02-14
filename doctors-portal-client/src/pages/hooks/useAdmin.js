import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        fetch("https://boiling-wildwood-09844.herokuapp.com/user/" + user.email, {
          method: 'GET',
          headers: {
            'authorization':  `Bearer ${localStorage.getItem('access_token')}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if(data){
                setAdmin(true);
                setAdminLoading(false)
            }})
      }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;