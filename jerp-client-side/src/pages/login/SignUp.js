import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AltLogin from "./AltLogin";
import auth from "../../firebase.init";
import FullPageLoading from "../shared/FullPageLoading";
import log from "../../assests/images/log.png";
import HelemetMe from "../shared/HelemetMe";

const SignUp = () => {
  const [passMatch, setPassMatch] = useState("");
  const [token, setToken] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.ConfirmPassword === data.password) {
      createUserWithEmailAndPassword(data.email, data.password);
      const doc = { UserName: data.name };
      //save to db this user
      fetch(
        "http://localhost:5000/updateoradduser/" + data.email,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(doc),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      setPassMatch("");
    } else {
      setPassMatch("Dont match");
    }
  };
  const [CurrentUser, CurrentUserLoading] = useAuthState(auth);
  useEffect(() => {
    //get authorization token
    if (user) {
      fetch("http://localhost:5000/gettoken/" + user?.user?.email)
        .then((res) => res.json())
        .then((data) => {
          //save to loacal storage
          localStorage.setItem("access_token", data.token);
          setToken(data.token);
        });
    }
  }, [user]);

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
      <HelemetMe>Sign up</HelemetMe>
      {loading && <FullPageLoading></FullPageLoading>}
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
              Create an account
            </h1>
            {/* divider */}
            <AltLogin></AltLogin>
            <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p class="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              class="space-y-4 md:space-y-6"
            >
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.name && (
                  <small className="text-red-500">Name is required</small>
                )}
              </div>

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
                {error?.message ===
                  "Firebase: Error (auth/email-already-in-use)." && (
                  <small className="text-red-500">Email already in use</small>
                )}
                {errors.email?.type === "required" && (
                  <small className="text-red-500">Email is required</small>
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.password?.type === "required" && (
                  <small className="text-red-500">password is required</small>
                )}
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  {...register("ConfirmPassword", { required: true })}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {passMatch && (
                  <small className="text-red-500">{passMatch}. </small>
                )}
                {errors.ConfirmPassword?.type === "required" && (
                  <small className="text-red-500">
                    Please re enter password
                  </small>
                )}
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
