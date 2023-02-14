import { Navbar } from "flowbite-react";
import React from "react";
import CustomLink from "../../shared/CustomLink";

const Navlinks = () => {
  return (
    <Navbar.Collapse>
      <Navbar><CustomLink to='/'>Home</CustomLink></Navbar>
      <Navbar><CustomLink to='/aboutme'>About me</CustomLink></Navbar>
      <Navbar><CustomLink to='/blogs'>Blogs</CustomLink></Navbar>
      <Navbar><CustomLink to='/useageexpamle'>Usage example</CustomLink></Navbar>
    </Navbar.Collapse>
  );
};

export default Navlinks;
