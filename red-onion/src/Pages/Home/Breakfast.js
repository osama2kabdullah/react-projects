import React from "react";
import MenuCard from "./MenuCard";
import breakfast1 from "../../images/breakfast/breakfast1.png";
import breakfast2 from "../../images/breakfast/breakfast2.png";
import breakfast3 from "../../images/breakfast/breakfast3.png";
import breakfast4 from "../../images/breakfast/breakfast4.png";
import breakfast5 from "../../images/breakfast/breakfast5.png";
import breakfast6 from "../../images/breakfast/breakfast6.png";

const Breakfast = () => {
  
  
  return (
    <div className="grid my-32 mb-12 grid-cols-3 gap-16">
      <MenuCard
        title="Beagl and cream cheese"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Fried chicken bento"
        price="9.99"
        img={breakfast2}
      ></MenuCard>
      <MenuCard
        title="Taragon Rubbed Salmon"
        price="6.99"
        img={breakfast3}
      ></MenuCard>
      <MenuCard
        title="Indian Lunch"
        price="8.99"
        img={breakfast4}
      ></MenuCard>
      <MenuCard
        title="Beaf steak"
        price="15.99"
        img={breakfast5}
      ></MenuCard>
      <MenuCard
        title="Honey soy glazed salmon with pappers"
        price="7.99"
        img={breakfast6}
      ></MenuCard>
    </div>
  );
};

export default Breakfast;
