import React from "react";
import MenuCard from "./MenuCard";
import lunch1 from "../../images/lunch/lunch1.png";
import lunch2 from "../../images/lunch/lunch2.png";
import lunch3 from "../../images/lunch/lunch3.png";
import lunch4 from "../../images/lunch/lunch4.png";
import lunch5 from "../../images/lunch/lunch5.png";
import lunch6 from "../../images/lunch/lunch6.png";
import { useState } from "react";
import { useEffect } from "react";

const Lunch = () => {
  
  const [datas, setDatas] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setDatas(data))
  },[])
  
    return (
        <div className="grid my-32 mb-12 grid-cols-3 gap-16">
        <MenuCard
          title="Begal creame chees"
          price="6.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Sandwich"
          price="9.99"
          img={lunch2}
        ></MenuCard>
        <MenuCard
          title="Backed Chicken"
          price="10.99"
          img={lunch3}
        ></MenuCard>
        <MenuCard
          title="Toast crosian fried"
          price="8.99"
          img={lunch4}
        ></MenuCard>
        <MenuCard
          title="Healthy Bendick"
          price="19.99"
          img={lunch5}
        ></MenuCard>
        <MenuCard
          title="Full fried toast brunch"
          price="3.99"
          img={lunch6}
        ></MenuCard>
      </div>
    )
}

export default Lunch;
