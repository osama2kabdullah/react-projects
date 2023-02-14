import React from 'react';
import '../App.css'

const Card = (props) => {
    const {strMeal, strMealThumb} = props.data;
    return (
        <div className='card'>
            <img onClick={props.btn} src={strMealThumb} alt="" />
            <p>{strMeal}</p>
        </div>
    );
};

export default Card;