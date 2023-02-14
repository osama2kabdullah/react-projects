import React from "react";

const Contact = () => {
  return (
    <div className="m-16 bg-slate-100 flex gap-4 justify-center items-center w-fit mx-auto overflow-hidden rounded-3xl">
        <img className="w-64" src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png' alt="" />
        <div className="p-4">
        <span className="text-2xl text-sky-500 font-bold ">Osama Abdullah</span>
        <br /><br />
        <span className="text-2xl font-bold">Email: </span><span className="text-2xl">osama2kabdullah@gmail.com</span>
        <br /><br />
        <span className="text-2xl font-bold">Home Address: </span><span className="text-2xl">Shiromoni, Khulna, Bangladesh</span>
        </div>
    </div>
  );
};

export default Contact;
