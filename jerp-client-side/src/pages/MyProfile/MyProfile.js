import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import HelemetMe from "../shared/HelemetMe";

const MyProfile = () => {
  const { data } = useContext(AppContext);
  const { UserName, about, city, countryName, photoURL, state, street } =
    data?.doc;

  return (
    <section class="pt-16 bg-blueGray-50">
      <HelemetMe>My profile</HelemetMe>
      <div class="w-full lg:w-10/12 px-4 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <button className="absolute top-4 right-4">
            <Link to="/settings">
              <Button>Edit</Button>
            </Link>
          </button>
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              {/* <div class="w-full px-4 flex justify-center">
                <div class="">
                  <img className="rounded-full" src={photoURL} alt="" />
                </div>
              </div> */}
              <div className="avatar">
                <div className="w-64 rounded-full">
                  <img src={photoURL} alt="" />
                </div>
              </div>
              <div class="w-full px-4 text-center mt-5">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span class="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span class="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span class="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {UserName}
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {street}, {state}, {city}, {countryName}
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative  pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default MyProfile;
