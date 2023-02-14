import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firbase.init";
import ButtonMe from "../shared/ButtonMe";
import AltLogin from "./AltLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import HelmetMe from "../shared/HelmetMe";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, varificationError] =
    useSendEmailVerification(auth);

  const [wrongpass, setWrongpass] = useState(false);

  const registersubmitBtn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const displayName = e.target.name.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setWrongpass(true);
    }
    if (password === confirmPassword) {
      setWrongpass(false);
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      await sendEmailVerification();
    }
  };

  const [loggedUser] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loggedUser) {
    // navigate(from, { replace: true });
  }
  
  useEffect(() => {
    fetch("https://safe-garden-23742.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('accees_token', data?.token);
      });
  }, [user?.user]);

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center h-[90vh]">
        <svg
          class="inline mr-2 w-10 h-10 text-gray-800 animate-spin dark:text-gray-600 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="h-auto py-8 flex justify-center items-center">
      <HelmetMe>Register</HelmetMe>
      <div className="p-6 border w-2/6">
        <h2 className="text-2xl text-center">Register</h2>
        <form onSubmit={registersubmitBtn} className="grid gap-8 my-5">
          <input
            className="text-lg p-1 border w-full"
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            style={
              createUserError
                ? { border: "1px solid red" }
                : { border: "1px solid #ddd" }
            }
            className="text-lg p-1 border w-full"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="text-lg p-1 border w-full"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            style={
              wrongpass
                ? { border: "1px solid red" }
                : { border: "1px solid #ddd" }
            }
            className="text-lg p-1 border w-full"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          {createUserError && (
            <small className="text-red-500">{createUserError.message}</small>
          )}
          {updateError && (
            <small className="text-red-500">{updateError.message}</small>
          )}
          {varificationError && (
            <small className="text-red-500">{varificationError.message}</small>
          )}
          <ButtonMe>Register</ButtonMe>
        </form>
        <p>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
        <AltLogin></AltLogin>
      </div>
    </div>
  );
};

export default Register;
