import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import DropdownLinks from "./DropdownLinks";
import { AppContext } from "../../../App";

const UserAvatar = ({ user }) => {
  const { data } = useContext(AppContext);
  return (
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img
                src={data?.doc?.photoURL}
                alt=''
              />
            </div>
          </div>
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{data?.doc?.UserName}</span>
          <span className="block truncate text-sm font-medium">
            {data?.email}
          </span>
        </Dropdown.Header>
        <DropdownLinks></DropdownLinks>
        <Dropdown.Divider />
        <button
          className="w-full"
          onClick={() =>
            signOut(auth).then(() => localStorage.removeItem("access_token"))
          }
        >
          <Dropdown.Item>Sign out</Dropdown.Item>
        </button>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
};

export default UserAvatar;
