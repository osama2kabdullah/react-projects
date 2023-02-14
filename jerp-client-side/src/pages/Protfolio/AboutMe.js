import { Avatar, Card } from "flowbite-react";
import React from "react";
import react from "../../assests/images/react.png";
import node from "../../assests/images/node.png";
import mongodb from "../../assests/images/mongodb.png";
import javascript from "../../assests/images/javascript.png";
import github from "../../assests/images/github.png";
import doctorsPortal from "../../assests/images/doctorsPortal.png";
import drjhatka from "../../assests/images/drjhatka.png";
import emajohn from "../../assests/images/emajohn.png";
import kabirsInventory from "../../assests/images/kabirsInventory.png";
import redOnion from "../../assests/images/redOnion.png";
import HelemetMe from "../shared/HelemetMe";

const AboutMe = () => {
  return (
    <section class="pt-16 bg-blueGray-50">
      <HelemetMe>About me</HelemetMe>
      <div class="w-full lg:w-11/12 px-4 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative">
                  <Avatar
                    img="https://i.ibb.co/PgQ0gSk/109265357.jpg"
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Osama Abdullah
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Khulna, Bangladesh
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Learning Web Application development
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  I have completed three months of learning web development when I created this project. I gave SSC exam in November 2021. Not yet admitted. It is now October 2022. And after some time I will get admission in college. I want to build my career in web development sector.<br />
                  <span className="font-bold">Email:</span> osama2kabdullah@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12 ">
            <h2 className="text-md text-center pb-4 font-bold">
              I can build application with (<small>Not a expert but Jr.</small>){" "}
            </h2>
            <div>
              <div>
                <div className="mx-auto w-fit flex gap-4">
                  <Avatar img={javascript} size="md" />
                  <Avatar img={react} size="md" />
                  <Avatar img={node} size="md" />
                  <Avatar img={mongodb} size="md" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-md text-center pb-4 font-bold">
            Some of my project
          </h2>
          <div className="grid lg:grid-cols-3 pb-12 px-2 gap-8 w-fit mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={doctorsPortal}
              >
                <a
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://doctors-portal-80dc5.firebaseapp.com/"
                >
                  doctors portal{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 inline h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/osama2kabdullah/doctors-portal-client"
                >
                  <Avatar img={github} size="md" />
                </a>
              </Card>
            </div>
            
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={kabirsInventory}
              >
                <a
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://kabirs-inventory.firebaseapp.com/"
                >
                  Kabirs Inventory{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 inline h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/osama2kabdullah/kabirs-inventory-client"
                >
                  <Avatar img={github} size="md" />
                </a>
              </Card>
            </div>
            
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={drjhatka}
              >
                <a
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://dr-jhatka.web.app/"
                >
                  Dr. Jhatka{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 inline h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/osama2kabdullah/dr-jhatka"
                >
                  <Avatar img={github} size="md" />
                </a>
              </Card>
            </div>
            
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={emajohn}
              >
                <a
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-shopping-cart-osama.netlify.app/"
                >
                  Ema John{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 inline h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/osama2kabdullah/shopping-react-project"
                >
                  <Avatar img={github} size="md" />
                </a>
              </Card>
            </div>
            
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={redOnion}
              >
                <a
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://red-onion-5cd41.web.app/"
                >
                  Red Onion{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 inline h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/osama2kabdullah/red-onion"
                >
                  <Avatar img={github} size="md" />
                </a>
              </Card>
            </div>
            
            
          </div>
        </div>
      </div>
      <footer class="relative  pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AboutMe;
