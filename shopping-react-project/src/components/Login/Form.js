import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Form = ({ position }) => {
  // change path for login / register
  const navigate = useNavigate();
  const changePath = () => {
    position ? navigate("/login") : navigate("/register");
  };

  
  // get input values
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const passInput = (e) => {
    setPassword(e.target.value);
  };
  const confPassInput = (e) => {
    setConfirmPass(e.target.value);
  };

  // sign up method 
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  // sign in method 
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  // update user
  const [user] = useAuthState(auth);
  // navigate
  const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, {replace: true});
  }
  // google sign in
  const signInGoogle = () => {
    signInWithGoogle();
  };
  //facebook sign in
  const signInFb = () => {
    signInWithFacebook();
  }
  // email and pass
  const submitBtn = (e) => {
    e.preventDefault();
    // register
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
    }
    // login
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div
      className="border rounded w-2/6 mx-auto p-8 m-4"
      style={{ boxShadow: "-6px 6px 1px 1px #FF9900" }}
    >
      <form onSubmit={submitBtn}>
        <h2 className="text-3xl font-bold text-center ">
          {position ? "Register" : "Login"}
        </h2>
        <div>
          <label className="text-xl p-2" htmlFor="email">
            Email
          </label>
          <br />
          <input
            onChange={emailInput}
            required
            className="text-xl border focus:outline-red-300 p-2 w-full rounded"
            type="email"
            name="email"
          />
        </div>
        <div className="mt-4">
          <label className="text-xl p-2" htmlFor="password">
            Password
          </label>
          <br />
          <input
            onChange={passInput}
            required
            className="text-xl border focus:outline-red-300 p-2 w-full rounded"
            type="password"
            name="password"
          />
        </div>
        {position ? (
          <div className="mt-4">
            <label className="text-xl p-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <br />
            <input
              onChange={confPassInput}
              required
              className="text-xl border focus:outline-red-300 p-2 w-full rounded"
              type="password"
              name="confirmPassword"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="mt-8">
          {/* {
            <p className="text-red-500 text-center p-1 pt-0">error</p>
          } */}
        <input
          className="text-xl p-2 bg-orange-300 w-full  rounded hover:bg-orange-400 font-bold"
          type="submit"
          value={position ? "Register" : "Login"}
        />
        </div>
      </form>
      <p className="pt-2 text-center">
        {position ? "Already have an account?" : "New to Ema-john?"}
        <span
          onClick={changePath}
          className="text-orange-500 cursor-pointer hover:underline"
        >
          {" "}
          {position ? "Login" : "Create New Account"}
        </span>
      </p>
      <div className="pt-3 grid grid-cols-3 items-center">
        <div className="bg-black p-[0.05px] h-[0.05px]"></div>
        <div className=" text-center">or</div>
        <div className="bg-black p-[0.05px] h-[0.05px]"></div>
      </div>
      <div className="mt-4 flex gap-2 justify-around">
        <button
          onClick={signInGoogle}
          type="button"
          className="text-black hover:bg-gray-100 border font-medium rounded-lg text-sm p-2 "
        >
          <img
            className="w-6 inline"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          Continue with Google
        </button>
        <button
        onClick={signInFb}
          type="button"
          className="text-white font-medium  bg-[#3b5998] hover:bg-[#3b5998]/90 rounded-lg text-sm p-2"
        >
          <svg
            className=" w-4 inline h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
            ></path>
          </svg>
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Form;
