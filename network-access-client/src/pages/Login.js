import React from "react";
import auth from "../firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user && localStorage.getItem("accessToken")) {
    navigate(from, { replace: true });
  }
  const hendlGoogleLogin = async () => {
    await signInWithGoogle();
    const { data } = await axios.post(
      "https://sleepy-brushlands-75204.herokuapp.com/login",
      { email: user?.email }
    );
    localStorage.setItem("accessToken", data?.accessToken);
  };

  return (
    <div
      style={{
        padding: "2em",
        border: "1px solid #ddd",
        margin: "auto",
        marginTop: "5vh",
        width: "40%",
      }}
    >
      <h3 className="text-center">Login</h3>
      <form className="form">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <span>Forgot Password?</span>
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
      <p className="text-end mt-3">
        Not Register? <span>Register now</span>
      </p>

      <div class="or-container">
        <div class="line-separator"></div> <div class="or-label">or</div>
        <div class="line-separator"></div>
      </div>
          <div className="text-center">
          <button
          onClick={hendlGoogleLogin}
            class="btn btn-google btn-block btn-outline"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="logo" />{" "}
            Continue with Google
          </button>
          </div>
    </div>
  );
};

export default Login;
