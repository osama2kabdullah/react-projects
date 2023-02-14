import React, { useEffect, useState } from 'react';

const useCheckAdmin = (data) => {
    const [admin, setAdmin] = useState(false);
    useEffect(()=>{
        const admin = data?.doc?.role === "admin";
        if(admin){
            setAdmin(true);
        }
    }, [data]);
    return [admin, setAdmin];
};

export default useCheckAdmin;