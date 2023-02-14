import React from "react";
import Appoinment from "./appoinment/Appoinment";
import Contactform from "./Contact/Contactform";
import Bannar from "./first-part/Bannar/Bannar";
import QuickBox from "./first-part/QuickBox/QuickBox";
import Footer from "./Footer";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* first part  */}
      <div>
        <Bannar></Bannar>
        <QuickBox></QuickBox>
      </div>
      {/* second part */}
      <Services></Services>
      {/* thrid part */}
      <Appoinment></Appoinment>
      {/* fourth paart  */}
      <Testimonial></Testimonial>
      {/* fifth section */}
      <Contactform></Contactform>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
