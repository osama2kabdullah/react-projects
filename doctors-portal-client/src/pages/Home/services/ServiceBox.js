import React from "react";

const ServiceBox = ({img, title}) => {
  return (
    <div className="card text-center shadow-xl">
      <div className="card-body">
        <img className="h-32 w-32 mx-auto" src={img} alt="" />
        <h2 className="text-2xl text-center">{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat adipisci.</p>
      </div>
    </div>
  );
};

export default ServiceBox;
