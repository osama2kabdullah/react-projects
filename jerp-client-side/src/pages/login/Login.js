import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AltLogin from "./AltLogin";
import auth from "../../firebase.init";
import log from "../../assests/images/log.png";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import FullPageLoading from "../shared/FullPageLoading";
import useGetToken from "../../hooks/useGetToken";
import HelemetMe from "../shared/HelemetMe";

const Login = () => {
  const [token, setToken] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    

    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      //get authorization token
      fetch("http://localhost:5000/gettoken/" + user?.user?.email)
        .then((res) => res.json())
        .then((data) => {
          //save to loacal storage
          localStorage.setItem("access_token", data.token);
          setToken(data.token);
        });
    }
  }, [user]);

  const [CurrentUser, CurrentUserLoading] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (CurrentUserLoading) {
    return <FullPageLoading></FullPageLoading>;
  }
  return (
    <section class="bg-gray-50 py-12 dark:bg-gray-900">
      {loading && <FullPageLoading></FullPageLoading>}
      <HelemetMe>Login</HelemetMe>
      <div className="p-8 rounded-xl bg-yellow-100 w-fit">
      <b>Admin email</b>: admin@jerp.com <br />
      <b>Admin password</b>: 6uzZ90MwfXU$
      <br /><br />
      <b>User email</b>: user@jerp.com<br />
      <b>User password</b>: N3N5062A2Id@
      </div>
      
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Link
          to="/"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src={log}
            alt="logo"
          />
          Jerp
        </Link>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {/* divider */}
            <AltLogin></AltLogin>
            <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p class="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <form
              class="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email?.type === "required" && (
                  <small className="text-red-500">Email is required</small>
                )}
                {error?.message ===
                  "Firebase: Error (auth/user-not-found)." && (
                  <small className="text-red-500">User not found</small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="text-red-500">
                    Please type valid a email
                  </small>
                )}
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.password?.type === "required" && (
                  <small className="text-red-500">password is required</small>
                )}
                {error?.message ===
                  "Firebase: Error (auth/wrong-password)." && (
                  <small className="text-red-500">Wrong Password</small>
                )}
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgotpassword"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
