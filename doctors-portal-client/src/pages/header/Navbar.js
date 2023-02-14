import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [dropdown, setdropdown] = useState(true);
  const [currentUser] = useAuthState(auth);
  const signoutBtn = () => {
    const procced = window.confirm("are you sure you want to logout?");
    if (procced) {
      signOut(auth).then(() => {
        console.log("user loged out");
      });
    }
  };
  return (
    <div className="flex justify-between p-3 lg:mx-8 mx-0">
      <div className="flex w-full justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
        <div className="dropdown text-end">
          <label
            onClick={() => setdropdown(!dropdown)}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            style={dropdown ? { display: "none" } : {}}
            className="menu menu-compact mt-3 p-2 lg:hidden shadow bg-base-100 rounded-box w-52"
          >
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <Navlinks></Navlinks>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
