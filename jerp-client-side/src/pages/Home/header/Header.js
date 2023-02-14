import { Button, Navbar } from "flowbite-react";
import React from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import log from "../../../assests/images/log.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar fluid={true} rounded={true}>
      <Link to="/">
        <Navbar.Brand href="https://flowbite.com/">
          <img src={log} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jerp
          </span>
        </Navbar.Brand>
      </Link>
      {user ? (
        <UserAvatar></UserAvatar>
      ) : (
        <div className="flex md:order-2">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Navbar.Toggle />
        </div>
      )}
      <Navlinks></Navlinks>
    </Navbar>
  );
};

export default Header;
