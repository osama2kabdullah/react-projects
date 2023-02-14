import React, { useEffect, useState } from "react";
import LoadingFullPage from "../shared/LoadingFullPage";
import AppoinServBox from "./AppoinServBox";
import ServiceModal from "./ServiceModal";


const AppoinServices = ({ pickedDate }) => {
  
  const [selectService, setSelectService] = useState({});
  
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch(`https://boiling-wildwood-09844.herokuapp.com/availble?date=${pickedDate}`)
    .then(res=>res.json())
    .then(data=>setServices(data));
  },[pickedDate])

  return (
    <div className="my-12">
      <div>
        <h4 className="text-xl text-center text-primary">
          Available Services on {pickedDate}
        </h4>
        <h2 className="text-center text-gray-400">Please select a service.</h2>
      </div>
      <div className="grid lg:grid-cols-3 mx-4 gap-5">
        {services?.map((service) => (
          <AppoinServBox setSelectService={()=>setSelectService(service)} key={service._id} data={service}></AppoinServBox>
        ))}
      </div>
      {
        selectService && <ServiceModal
        selectService={selectService}
        pickedDate={pickedDate}
        ></ServiceModal>
      }
    </div>
  );
};

export default AppoinServices;
