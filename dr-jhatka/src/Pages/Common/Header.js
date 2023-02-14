import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "./Button";
import CustomLink from "./CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="flex justify-between sm:mx-32 mx-3 py-2">
      <img src="" alt="logo" />
      <nav className="">
        <span className="px-2">
        <CustomLink to="/">Home</CustomLink>
        </span>
        <span className="px-2">
        <CustomLink to="/blogs">Blogs</CustomLink>
        </span>
        <span className="px-2">
        <CustomLink to="/aboutme">About me</CustomLink>
        </span>
        {user ? (
          <span
            onClick={() => {
              signOut(auth)
                .then(() => {})
                .then((error) => {});
            }}
          >
            <Button>Logout</Button>
          </span>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
