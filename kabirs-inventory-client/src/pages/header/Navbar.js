import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firbase.init";
import ButtonMe from "../shared/ButtonMe";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const signoutBtn = () => {
    const procced = window.confirm("log out?");
    if (procced) {
      signOut(auth).then(() => {
      });
    }
  };

  return (
    <nav className="flex gap-5 items-center">
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      {user ? (
        <ButtonMe btn={signoutBtn}>Logout</ButtonMe>
      ) : (
        <ButtonMe btn={() => navigate("/login")}>Login</ButtonMe>
      )}
    </nav>
  );
};

export default Navbar;
