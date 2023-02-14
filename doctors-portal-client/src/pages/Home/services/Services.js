import React from "react";
import ServiceBox from "./ServiceBox";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import ServiceHero from "./ServiceHero";

const Services = () => {
  return (
    <div className="mt-32">
      <div>
        <h4 className="text-md text-center font-bold text-primary">
          OUR SERVICES
        </h4>
        <h2 className="text-2xl text-center">Services We Provide</h2>
      </div>
      <div className="grid mt-[5em] lg:grid-cols-3 mx-4 gap-5">
        <ServiceBox img={cavity} title="Fluoride Treatment"></ServiceBox>
        <ServiceBox img={whitening} title="Fluoride Treatment"></ServiceBox>
        <ServiceBox img={fluoride} title="Fluoride Treatment"></ServiceBox>
      </div>
      <div>
        <ServiceHero></ServiceHero>
      </div>
    </div>
  );
};

export default Services;
