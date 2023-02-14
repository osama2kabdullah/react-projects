import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import Group1329 from "../logos/Group1329.png";
import CustomLink from "./CustomLink";

const Header = () => {
    const [user] = useAuthState(auth);
    const signoutBtn = () =>{
        signOut(auth).then(() =>{
            console.log("sign out successfully");
        })
    }
  return (
    <div className="header">
      <Link to='/'><img width={200} src={Group1329} alt="logo" /></Link>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/donation">Donation</CustomLink>
        <CustomLink to="/events">Events</CustomLink>
        <CustomLink to="blogs">Blog</CustomLink>
        {user && (
          <CustomLink to="/selectedTopic"><span style={{fontWeight: 'bolder'}}>{user?.displayName}</span></CustomLink>
        )}
        {user ? (
          <button onClick={signoutBtn} class="btn btn-secondary">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button type="button" class="btn btn-secondary">
              Login / Register
            </button>
          </Link>
        )}
        <button type="button" class="btn btn-dark">
          Admin
        </button>
      </nav>
    </div>
  );
};

export default Header;
