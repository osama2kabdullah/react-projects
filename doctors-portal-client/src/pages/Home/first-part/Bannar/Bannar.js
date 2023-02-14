import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Bannar = ({ state, date, setDate }) => {
  return (
    <div className="hero bg-bannar min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="bannar" src={chair} className="h-[355px] w-[594]" />
        {state ? (
          <div className="lg:mr-32">
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bannar;
