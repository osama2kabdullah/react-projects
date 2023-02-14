import React from "react";
import doctorSmall from "../../../assets/images/doctorSmall.png";

const Appoinment = () => {
  return (
    <div className="appoinment-image-bg lg:mt-64 mt-12 relative">
        <img src={doctorSmall} alt="doctor" className="absolute lg:block hidden h-[606px] w-[636px] bottom-0" />
      <div className="hero min-h-[70vh] text-white">
        <div className="hero-content flex-col justify-end lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <h1 className="text-3xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
