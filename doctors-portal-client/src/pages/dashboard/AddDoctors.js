import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDoctors = () => {
  // submiut form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //get services name form db 
  const [serviceNames, setServiceNames] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/serviceName')
    .then(res=>res.json())
    .then(data=>setServiceNames(data));
  },[]);
  
  const storageImageKey = '9d41b12eb2ac9f38fce3206217aa2abf';
  
  const onSubmit = async (inputData) => {
    const image = inputData.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${storageImageKey}`;
    console.log(inputData);
    fetch(url, {
        method: 'POST',
        body:formData
    })
    .then(res=>res.json())
    .then(imagebb=>{
        if(imagebb.success){
            const imgUrl = imagebb.data.url;
            const doc = {name:inputData.name, email: inputData.email, speciality: inputData.Speciality, imgUrl};
            console.log(doc);
            fetch('http://localhost:5000/adddoctor', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(doc)
            })
            .then(res=>res.json())
            .then(storedDoctor=>{
                if(storedDoctor.acknowledged){
                    toast.success('successfully added this doctor')
                }else {
                    toast.error('failed to add this doctor')
                }
            })
        }
    });
  };
  
  return (
    <div className="h-auto my-12 flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Add new Dector</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full grid gap-5 max-w-xs"
          >
            <div>
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors?.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Name is required
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors?.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Email is required
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Speciality</span>
              </label>
              <select
                {...register("Speciality")}
                className="select select-bordered w-full max-w-xs"
              >
                {
                    serviceNames.map(serviceName=><option key={serviceName._id}>{serviceName.name}</option>)
                }
              </select>
            </div>
            
            <div>
              <label className="label">
                <span className="label-text text-lg">Photo</span>
              </label>
              <input
              type='file'
                {...register("image")}
                className=" w-full max-w-xs"
              />
            </div>
            <div className="card-actions">
              <button className="btn w-full">Sign Up</button>
              {/* {loading ? (
                <button className="btn loading w-full">Sign Up</button>
              ) : (
                <button className="btn w-full">Sign Up</button>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
