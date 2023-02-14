import { Button } from "flowbite-react";
import React from "react";
import bannar from "../../assests/images/bannar.jpg";

const Bannar = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="mt-12 lg:ml-12 ml-8">
        <h1 className="lg:text-6xl mb-8 text-3xl font-bold">
          One of the largest Company in Shiromoni
        </h1>
      </div>
      <img className="" src={bannar} alt="" />
    </section>
  );
};

export default Bannar;
