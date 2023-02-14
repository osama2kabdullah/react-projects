import React from "react";
import MenuCard from "./MenuCard";
import dinner1 from "../../images/dinner/dinner1.png";
import dinner2 from "../../images/dinner/dinner2.png";
import dinner3 from "../../images/dinner/dinner3.png";
import dinner4 from "../../images/dinner/dinner4.png";
import dinner5 from "../../images/dinner/dinner5.png";
import dinner6 from "../../images/dinner/dinner6.png";

const Dinner = () => {
  return (
    <div className="grid my-32 mb-12 grid-cols-3 gap-16">
      <MenuCard
        title="Salmon with grapfruite"
        price="9.99"
        img={dinner1}
      ></MenuCard>
      <MenuCard
        title="Lemony salmon piccata"
        price="10.99"
        img={dinner2}
      ></MenuCard>
      <MenuCard
        title="Pork tenderlion"
        price="12.99"
        img={dinner3}
      ></MenuCard>
      <MenuCard
        title="Freinc frise with cheese"
        price="8.99"
        img={dinner4}
      ></MenuCard>
      <MenuCard
        title="Garlic butter backed"
        price="6.99"
        img={dinner5}
      ></MenuCard>
      <MenuCard
        title="Backed chicken"
        price="9.99"
        img={dinner6}
      ></MenuCard>
    </div>
  );
};

export default Dinner;
