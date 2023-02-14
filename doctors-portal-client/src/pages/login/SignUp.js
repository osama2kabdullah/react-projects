import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../hooks/useToken";
import AltLogin from "./AltLogin";

const SignUp = () => {
  // signup
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [currentUser] = useAuthState(auth);
  //get jot token
  const [token] = useToken(user?.user || currentUser);
  //set name
  const [updateProfile, updating, UpadteError] = useUpdateProfile(auth);
  // email varification
  const [sendEmailVerification, sending, varificationError] =
    useSendEmailVerification(auth);

  // submiut form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
  };

  //ridirect user to other page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <div className="h-auto my-12 flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign Up</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full grid gap-5 max-w-xs"
          >
            <div>
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors?.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Email is required
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors?.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Email is required
                </span>
              )}

              {error?.message ===
                "Firebase: Error (auth/email-already-in-use)." && (
                <span className="label-text-alt text-red-500">
                  Email already in use
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  pattern: /^.{6,}$/,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Password required
                </span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  Password length minimum 6 characters
                </span>
              )}
            </div>
            <div className="card-actions">
              {loading ? (
                <button className="btn loading w-full">Sign Up</button>
              ) : (
                <button className="btn w-full">Sign Up</button>
              )}
              <p className=" text-md text-center">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-primary cursor-pointer hover:underline"
                >
                  Login now
                </span>
              </p>
            </div>
          </form>
          <div className="divider">OR</div>
          <AltLogin></AltLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
