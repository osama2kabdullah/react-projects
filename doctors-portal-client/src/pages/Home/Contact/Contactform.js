import React from "react";

const Contactform = () => {
  return (
    <div className="py-12 appoinment-image-bg mt-32">
      <div>
        <div>
          <h4 className="text-md text-center font-bold text-primary">
          Contact Us
          </h4>
          <h2 className="text-2xl text-center text-white" >Stay connected with us</h2>
        </div>
        <form className="grid gap-5 mt-8">
        <input type="text" placeholder="Type here" className="input input-bordered w-full block mx-auto max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full block mx-auto max-w-xs" />
        <textarea className="textarea max-w-xs w-full block mx-auto textarea-bordered" placeholder="Bio"></textarea>
        <button className="btn max-w-xs  block mx-auto btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
