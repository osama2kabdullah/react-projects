import { Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const DropdownLinks = () => {
  return (
    <>
      <Link to="/myprofile">
        <Dropdown.Item>My Profile</Dropdown.Item>
      </Link>
      <Link to="/dashboard">
        <Dropdown.Item>Dashboard</Dropdown.Item>
      </Link>
      <Link to='/settings'>
        <Dropdown.Item>Settings</Dropdown.Item>
      </Link>
      <Link>
        <Dropdown.Item>Earnings</Dropdown.Item>
      </Link>
    </>
  );
};

export default DropdownLinks;
