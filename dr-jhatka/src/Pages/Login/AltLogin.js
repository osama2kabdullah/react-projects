import React from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AltLogin = () => {
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p class="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <button
      onClick={()=>signInWithFacebook()}
        class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#3b5998" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {/* <!-- Facebook --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="w-3.5 h-3.5 mr-2"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
        Continue with Facebook
      </button>
      <button
      onClick={()=>signInWithGoogle()}
        class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {/* <!-- google --> */}
        <svg
          class="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default AltLogin;
