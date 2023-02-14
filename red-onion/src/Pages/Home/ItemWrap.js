import { useParams } from "react-router-dom";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";

const ItemWrap = () => {
    
    const {lunch} = useParams();
    if(lunch === 'lunch'){
        return <Lunch></Lunch>
    }
    if(lunch === 'breakfast'){
        return <Breakfast></Breakfast>
    }
    if(lunch === 'dinner'){
        return <Dinner></Dinner>
    }
};

export default ItemWrap;