import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FullPageLoading from "../../shared/FullPageLoading";
import HeadTitle from "../../shared/HeadTitle";
import HelemetMe from "../../shared/HelemetMe";

const AddProducts = () => {
    const [uploaing, setUploaing] = useState(false);
  const navigate = useNavigate();
  //form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //form submit
  const onSubmit = (inputFormData) => {
    setUploaing(true)
    const IMGBB_POST_API_KEY = "9d41b12eb2ac9f38fce3206217aa2abf";
    const formData = new FormData();
    formData.append("image", inputFormData?.file?.[0]);
    const url = `https://api.imgbb.com/1/upload?key=${IMGBB_POST_API_KEY}`;
    //save img in imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        inputFormData.picture = data?.data?.url
        fetch('http://localhost:5000/addnewproduct', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(inputFormData)
        })
        .then(res=>res.json())
        .then(data=>{
            setUploaing(false);
            navigate('/dashboard')
        })
        
      });
  };
  return (
    <div>
      <HelemetMe>Add product</HelemetMe>
      {uploaing && <FullPageLoading></FullPageLoading>}
      <HeadTitle>Add new Products</HeadTitle>
      <div>
        <div class="md:grid md:grid-cols-2 md:gap-6">
          <div class="mt-5 md:col-span-2 mx-auto md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                      <Avatar img="" size="xl" rounded />
                      <input
                        {...register("file")}
                        type="file"
                        class="ml-5 rounded-md border w-32 border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Product Description
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="about"
                        {...register("about")}
                        name="about"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                      ></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your product.
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-6 bg-white px-4 py-3 sm:px-6 gap-6">
                  <div class="col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      autocomplete="street-address"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Qty
                    </label>
                    <input
                      type="number"
                      {...register("availableQty")}
                      autocomplete="address-level2"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      {...register("price")}
                      autocomplete="address-level1"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Minimum order qty
                    </label>
                    <input
                      type="number"
                      {...register("minimumOrder")}
                      autocomplete="postal-code"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
