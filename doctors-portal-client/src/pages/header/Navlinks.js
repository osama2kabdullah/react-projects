import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Navlinks = () => {
  const [currentUser] = useAuthState(auth);

  const signoutBtn = () => {
    const procced = window.confirm("are you sure you want to logout?");
    if (procced) {
      signOut(auth).then(() => {
        console.log("user loged out");
        localStorage.removeItem('access_token');
      });
    }
  };
  return (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      {currentUser && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>
      <li>
        <CustomLink to="/appoinment">Appoinment</CustomLink>
      </li>
      <li>
        <CustomLink to="/reviews">Reviews</CustomLink>
      </li>
      <li>
        <CustomLink to="/contactus">Contact Us</CustomLink>
      </li>
      <li>
        {currentUser ? (
          <button onClick={signoutBtn}>Logout</button>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </li>
    </>
  );
};

export default Navlinks;
