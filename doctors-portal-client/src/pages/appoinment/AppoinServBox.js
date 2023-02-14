import React from "react";

const AppoinServBox = ({ data, setSelectService }) => {
  const { name, slots, available } = data;
  return (
    <div className="card mt-[3em] shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl text-primary">{name}</h2>
        <p>{available?.[0]}</p>
        <p>{available?.length} slots available now</p>
        <label
          onClick={setSelectService}
          htmlFor="my-modal-6"
          className="btn btn btn-primary text-white w-3/6 mx-auto mt-3 modal-button"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppoinServBox;
