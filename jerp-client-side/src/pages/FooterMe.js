import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import log from "../assests/images/log.png";

const FooterMe = () => {
  const year = new Date().getFullYear();
  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src={log}
              alt="Flowbite Logo"
              name="Jerp"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Link to='/aboutme'><Footer.Link href="#">About me</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col={true}>
                <a target="_blank" rel="noreferrer" href="https://github.com/osama2kabdullah"><Footer.Link>Github</Footer.Link></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/osama2kabdullah"><Footer.Link>Linkedin</Footer.Link></a>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Jerp™" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon
              href="#"
              //   icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              //   icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              //   icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              //   icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              //   icon={BsDribbble}
            /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMe;
