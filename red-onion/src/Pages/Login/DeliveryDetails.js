import React from "react";
import Cart from "../shared/Cart";
import DeatilForm from "../shared/DeatilForm";

const DeliveryDetails = () => {
  return (
    <section className="h-screen">
      <div className="grid gap-32 mx-32 grid-cols-2 justify-between items-center">
        <div><DeatilForm></DeatilForm></div>
        <div className=" flex justify-end"><Cart></Cart></div>
        
      </div>
    </section>
  );
};

export default DeliveryDetails;
