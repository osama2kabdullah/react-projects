import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import HelmetTitle from "../Common/HelmetTitle";
import AltLogin from "./AltLogin";

const Login = () => {
  const [position, setPosition] = useState(true);

  //reset email
  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const forgotBtn = () => {
    sendPasswordResetEmail(email);
  }
  
  const [user] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (user) {
    navigate(from, { replace: true });
  }
  
  //   register
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  // update profile
  const [updateProfile] = useUpdateProfile(auth);
  // email varification
  const [sendEmailVerification] = useSendEmailVerification(auth);
  //   sign in
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const submitBtn = async (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const name = e.target.name?.value;
    const password = e.target.password?.value;
    const confPassword = e.target.confPassword?.value;

    if (password === confPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification(email);
    }
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <section class="h-screen">
      <HelmetTitle>{position ? 'Login':'Register'}</HelmetTitle>
      <div class="container py-12 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class=" lg:w-5/12 w-10/12 lg:ml-20">
            <form onSubmit={submitBtn}>
              {/* <!-- Email input --> */}

              {position || (
                <>
                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Full name"
                      name="name"
                    />
                  </div>
                </>
              )}

              <div class="mb-6">
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              {position || (
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Confirm Password"
                    name="confPassword"
                  />
                </div>
              )}

              <div class="flex justify-end items-center mb-6">
                <span
                  onClick={forgotBtn}
                  class="text-blue-600 cursor-pointer hover:underline hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  {position && "Forgot password?"}
                </span>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-sky-300 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                {position ? "Login" : "Register"}
              </button>
              <p className="p-2 text-center cursor-pointer">
                {position
                  ? "Don't Have an account?"
                  : "Already have an account?"}{" "}
                <span
                  onClick={() => setPosition(!position)}
                  className="text-sky-500 hover:underline"
                >
                  {position ? "Register" : "Login"}
                </span>{" "}
              </p>
              <AltLogin></AltLogin>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
