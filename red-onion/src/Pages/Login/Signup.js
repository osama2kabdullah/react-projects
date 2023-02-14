import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../images/logo2.png";
import AltLogin from "../shared/AltLogin";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const signUp = async (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPassword?.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification(auth.currentUser).then(() => {});
      await navigate("/");
    }
  };

  return (
    <section className="h-[120vh]">
      <form onSubmit={signUp} className="w-2/6 m-auto pt-12 grid gap-6">
        <img src={logo2} className="h-16 mx-auto mb-4" alt="" />
        <AltLogin></AltLogin>
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          required
        />
        <input
          className="p-2 font-bold bg-red-500 rounded-md w-full hover:bg-red-600 active:bg-red-500 text-white"
          type="submit"
          value="Sign Up"
        />
        <p
          onClick={() => navigate("/login")}
          className="text-center text-red-600 cursor-pointer hover:underline"
        >
          Already have an account
        </p>
      </form>
    </section>
  );
};

export default Signup;
