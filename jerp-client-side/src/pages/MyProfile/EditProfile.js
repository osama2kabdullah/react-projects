import { Avatar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import auth from "../../firebase.init";
import HelemetMe from "../shared/HelemetMe";

const EditProfile = () => {
  const [currentUser] = useAuthState(auth);
  const [updating, setUpdating] = useState(false);
  //user already name
  const { data } = useContext(AppContext);
  const userAlredyName = data?.doc?.UserName;
  //navigate
  const navigate = useNavigate();
  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //submit data
  const onSubmit = (data) => {
    setUpdating(true);
    const IMGBB_POST_API_KEY = "9d41b12eb2ac9f38fce3206217aa2abf";
    const {
      about,
      city,
      countryName,
      firstName,
      lastName,
      postalCode,
      state,
      street,
    } = data;
    const formData = new FormData();
    formData.append("image", data?.file?.[0]);
    const url = `https://api.imgbb.com/1/upload?key=${IMGBB_POST_API_KEY}`;
    //save img in imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        //assign essential data
        const imgbbUrl = data?.data?.url;
        const doc = {
          about,
          city,
          countryName,
          UserName:
            firstName + " " + lastName ||
            currentUser?.displayName ||
            userAlredyName,
          postalCode,
          state,
          street,
          photoURL: imgbbUrl || currentUser.photoURL,
        };

        //save in our mongodb total data
        fetch("http://localhost:5000/updateprofile", {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(doc),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setUpdating(false);
              navigate("/myprofile");
            }
          });
      });
  };

  return (
    <div>
      <HelemetMe>Edit profile</HelemetMe>
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                      {/* <Avatar img={data?.doc?.photoURL} size="xl" rounded /> */}
                      <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img alt="" src={data?.doc?.photoURL} />
                      </div>
                    </div>
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
                      About
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
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-6 bg-white px-4 py-3 sm:px-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      autocomplete="family-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      {...register("countryName")}
                      autocomplete="country-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      {...register("street")}
                      autocomplete="street-address"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      {...register("city")}
                      autocomplete="address-level2"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      {...register("state")}
                      autocomplete="address-level1"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code <small>(optional)</small>
                    </label>
                    <input
                      type="text"
                      {...register("postalCode")}
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

export default EditProfile;
