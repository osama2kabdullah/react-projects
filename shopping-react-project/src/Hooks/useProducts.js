import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setDatas] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[]);
    return [products, setDatas]
}
export default useProducts;