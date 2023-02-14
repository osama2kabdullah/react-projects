import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import AltLogin from "./AltLogin";
import LoadingFullPage from "../shared/LoadingFullPage";
import useToken from "../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [currentUser] = useAuthState(auth);
  console.log(currentUser);
  //login
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  // get tiken
  const [token] = useToken(user?.user || currentUser);

  const onSubmit = (data) => {
    setNoEmail("");
    setresetSeccess("");
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [email, setEmail] = useState("");
  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const [noEmail, setNoEmail] = useState("");
  const [resetSeccess, setresetSeccess] = useState("");

  const restePassReq = async () => {
    if (email) {
      setNoEmail("");
      await sendPasswordResetEmail(email);
    } else {
      setNoEmail("Please type email");
    }
    if (!resetError) {
      setresetSeccess("Reset password link sent");
    }
  };

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
          <h2 className="card-title mx-auto">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full grid gap-5 max-w-xs"
          >
            <div>
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
                onChange={emailInput}
                className="input input-bordered w-full max-w-xs"
              />
              {sending && <LoadingFullPage></LoadingFullPage>}

              {resetSeccess && (
                <span className="label-text-alt text-green-500">
                  {resetSeccess}
                </span>
              )}
              {errors?.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  Please type valid email
                </span>
              )}
              {errors?.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  Email is required
                </span>
              )}

              {(error?.message === "Firebase: Error (auth/user-not-found)." ||
                resetError?.message ===
                  "Firebase: Error (auth/user-not-found).") && (
                <span className="label-text-alt text-red-500">
                  User not found
                </span>
              )}
              {resetError?.message ===
                "Firebase: Error (auth/too-many-requests)." && (
                <span className="label-text-alt text-red-500">
                  Too many requests, try leter.
                </span>
              )}
              {error?.message ===
                "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)." && (
                <span className="label-text-alt text-red-500">
                  Access to this account has been temporarily disabled due to
                  many failed login attempts. You can immediately restore it by
                  resetting your password or you can try again later.
                </span>
              )}
              {resetError?.message ===
                "Firebase: Error (auth/invalid-email)." && (
                <span className="label-text-alt text-red-500">
                  Invalid email
                </span>
              )}
              {noEmail && (
                <span className="label-text-alt text-red-500"> {noEmail}</span>
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
              {error?.message === "Firebase: Error (auth/wrong-password)." && (
                <span className="label-text-alt text-red-500">
                  Wrong password
                </span>
              )}{" "}
              <span
                onClick={restePassReq}
                className="label-text-alt cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
            </div>
            <div className="card-actions">
              {loading ? (
                <button className="btn loading w-full">Login</button>
              ) : (
                <button className="btn w-full">Login</button>
              )}

              <p className=" text-md text-center">
                New to Doctors Portal?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-primary cursor-pointer hover:underline"
                >
                  Create new account
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

export default Login;
