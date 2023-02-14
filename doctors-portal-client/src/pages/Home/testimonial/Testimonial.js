import React from "react";
import TestimonialBox from "./TestimonialBox";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="mt-16 relative mx-[2em]">
        <img src={quote} className='lg:h-[156px] h-[106px] lg:w-[192px] absolute right-0' alt="" />
        
      <div className="mt-3">
        <h4 className="text-md  font-bold text-primary">
        Testimonial
        </h4>
        <h2 className="text-2xl ">What Our Patients Says</h2>
      </div>
      <div className="grid mt-[7em] lg:grid-cols-3 mx-4 gap-5">
        <TestimonialBox
        img={people1}
        ></TestimonialBox>
        <TestimonialBox
        img={people2}
        ></TestimonialBox>
        <TestimonialBox
        img={people3}
        ></TestimonialBox>
      </div>
    </div>
  );
};

export default Testimonial;
