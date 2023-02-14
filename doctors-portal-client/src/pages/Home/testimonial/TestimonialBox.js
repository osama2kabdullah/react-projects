import React from "react";

const TestimonialBox = ({img}) => {
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat
          adipisci.
        </p>
        <div className="flex justify-start items-end mt-4 gap-8">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""/>
            </div>
          </div>
          <div>
          <h2 className="text-xl">Winson Herry</h2>
          <h3>California</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
