import React from "react";
import jhatkaPhoto from "../../images/jhatkaPhoto.jpg";
import Button from "../Common/Button";

const Bannar = () => {
  return (
    <div className="bg-sky-300 py-16 text-center">
      <div className="h-60 border-3 mx-auto rounded-full overflow-hidden w-60">
        <img className="" src={jhatkaPhoto} alt="" />
      </div>
      <h1 className="text-6xl pb-3 font-bold">Dr. Jhatka</h1>
      <p className="text-xl mb-12">A mental supporter for your family</p>
      <Button>Book a appoinment</Button>
    </div>
  );
};

export default Bannar;
