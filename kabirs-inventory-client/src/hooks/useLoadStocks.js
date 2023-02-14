import { useEffect, useState } from "react";

const useLoadStocks = (link, headers) => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch(link, {
            headers
        })
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[link, headers]);
    return [products, setProducts];
};

export default useLoadStocks;