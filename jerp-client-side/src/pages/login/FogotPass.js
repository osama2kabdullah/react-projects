import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import FullPageLoading from '../shared/FullPageLoading';
import log from "../../assests/images/log.png";
import { Link } from 'react-router-dom';
import HelemetMe from '../shared/HelemetMe';

const FogotPass = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const [sendSuccess, setSendSuccess] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      
      const onSubmit = async (data) => {
         await sendPasswordResetEmail(data.email);
         if(!error){
          await setSendSuccess('');
         }else {
          await setSendSuccess('Reset email sent');
         }
         
      };
      
    return (
        <section class="bg-gray-50 py-12 dark:bg-gray-900">
          <HelemetMe>Fogotten Password</HelemetMe>
      {
        sending && <FullPageLoading></FullPageLoading>
      }
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
                Reset your Password
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Type your account email
                  </label>
                  <input
                  {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {error?.message === 'Firebase: Error (auth/user-not-found).' && <small className="text-red-500">User not found</small> }
                  {sendSuccess && <small className="text-green-500">{sendSuccess}</small> }
                  {errors.email?.type === 'required' && <small className="text-red-500">Email is required</small>}
                {errors.email?.type === 'pattern' && <small className="text-red-500">Please type valid a email</small>}
                </div>
                
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FogotPass;