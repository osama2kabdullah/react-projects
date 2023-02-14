import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../images/logo2.png";
import AltLogin from "../shared/AltLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [errormsg, setErrormsg] = useState("");
  const loginBtn = async (e) => {
    e.preventDefault();
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setErrormsg(error.message);
      });
  };

  // reset pass
  const [succesMsg, setSuccesMsg] = useState("");
  const [notreset, setNotreset] = useState("");
  console.log(notreset);
  const [email, setEmail] = useState("");
  const resetPass = async () => {
    setNotreset('');
    setSuccesMsg('');
    email &&
      await sendPasswordResetEmail(auth, email)
        .then(() => setSuccesMsg("Password reset email sent!"))
        .catch((error) => {console.log(error); setNotreset(error)});
  };

  return (
    <section className="h-screen">
      <form onSubmit={loginBtn} className="w-2/6 m-auto pt-12 grid gap-6">
        <img src={logo2} className="h-16 mx-auto mb-4" alt="" />
        <AltLogin></AltLogin>
        {succesMsg && (
          <span className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 inline h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>{" "}
            {succesMsg}
          </span>
        )}
        {notreset ? (
          <>
            <span className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 inline h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>{" "}
              User Not Found
            </span>
          </>
        ) : (
          ""
        )}
        {errormsg === "Firebase: Error (auth/user-not-found)." ? (
          <>
            <span className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 inline h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>{" "}
              User Not Found
            </span>
          </>
        ) : (
          ""
        )}
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <span
          onClick={resetPass}
          className="text-red-600 cursor-pointer hover:underline"
        >
          Forgot password
        </span>
        <input
          className="p-2 font-bold bg-red-500 rounded-md w-full hover:bg-red-600 active:bg-red-500 text-white"
          type="submit"
          value="Login"
        />
        <p
          onClick={() => navigate("/signup")}
          className="text-center text-red-600 cursor-pointer hover:underline"
        >
          Don't have an Account
        </p>
      </form>
    </section>
  );
};

export default Login;
