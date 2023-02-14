import React, { useState } from "react";
import Bannar from "../Home/first-part/Bannar/Bannar";
import Footer from "../Home/Footer";
import AppoinServices from "./AppoinServices";
import { format } from "date-fns";

const AppoinmentPage = () => {
  const [date, setDate] = useState(new Date());
  const pickedDate = format(date, "PPP");
  return (
    <section>
      <Bannar date={date} setDate={setDate} state="appointmentPage"></Bannar>
      <AppoinServices pickedDate={pickedDate}></AppoinServices>
      <Footer></Footer>
    </section>
  );
};

export default AppoinmentPage;
