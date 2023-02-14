import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const ServiceModal = ({ selectService, pickedDate }) => {
  const { name: appoinmentName, slots, available } = selectService;
  const [reqOk, setReqOk] = useState();

  const [currentUser] = useAuthState(auth);
  
  const submitAppoinment = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phoneNumber?.value;
    const pickedDate = e.target.pickedDate?.value;
    const slot = e.target.slots?.value;
    const doc = { phoneNumber, appoinmentName, pickedDate, slot, clientName: currentUser?.displayName, email:currentUser?.email };
    
    fetch("https://boiling-wildwood-09844.herokuapp.com/reqAppoinment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.success){
          toast.error(`${data?.filter.appoinmentName} is alreday booked today at ${data?.filter.slot}`);
          return;
        }
        toast(`${appoinmentName} is booked in ${pickedDate} at ${slot} for you`);
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">{appoinmentName}</h3>
          <form onSubmit={submitAppoinment} className="py-4 grid mt-5 gap-5">
            <input
              type="text"
              name="pickedDate"
              value={pickedDate || ""}
              readOnly
              disabled
              className="input input-bordered w-full"
            />
            <select required defaultValue={available?.[0]} name="slots" className="select select-bordered w-full">
              <option disabled value={available?.[0]}>
                Select time slot
              </option>
              {available?.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={currentUser?.displayName || ""}
              placeholder="Full Name"
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              value={currentUser?.email || ""}
              placeholder="Email"
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <button className="btn">submit</button>
          </form>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
