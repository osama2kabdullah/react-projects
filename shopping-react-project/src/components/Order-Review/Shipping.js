import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-4/6 mx-auto p-8 m-4">
      <div
        className="border rounded p-8"
        style={{ boxShadow: "-6px 6px 1px 1px #FF9900" }}
      >
        <h1 className="text-3xl font-bold text-center">Shipping Information</h1>
        <form className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xl p-2" htmlFor="firstname">
                First Name
              </label>
              <br />
              <input
                required
                className="text-xl border focus:outline-red-300 p-2 w-full rounded"
                type="text"
                name="firstname"
              />
            </div>
            <div>
              <label className="text-xl p-2" htmlFor="lastname">
                Last Name
              </label>
              <br />
              <input
                required
                className="text-xl border focus:outline-red-300 p-2 w-full rounded"
                type="text"
                name="lastname"
              />
            </div>
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xl p-2" htmlFor="email">
              Email
            </label>
            <br />
            <input
              required
              className="text-xl border focus:outline-red-300 p-2 w-full rounded"
              type="email"
              name="email"
              value={user?.email}
            />
          </div>
          <div>
            <label className="text-xl p-2" htmlFor="phone">
              Phone Number
            </label>
            <br />
            <input
              required
              className="text-xl border focus:outline-red-300 p-2 w-full rounded"
              type="text"
              name="phone"
              value={user?.email}
            />
          </div>
          </div>
          
          <br />
          <div>
            <label className="text-xl p-2" htmlFor="select">
              Country
            </label>
            <br />
            <select
              required
              className="text-xl border focus:outline-red-300 p-2 w-full rounded"
              name="select"
            >
              <option>Bangladesh</option>
              <option>India</option>
              <option>Nepal</option>
            </select>
          </div>
          <br />
          <div>
            <label className="text-xl p-2" htmlFor="street">
              Street address
            </label>
            <br />
            <input
              required
              className="text-xl border focus:outline-red-300 p-2 w-full rounded"
              type="text"
              name="street"
            />
          </div>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xl p-2" htmlFor="city">
                City
              </label>
              <br />
              <input
                required
                className="text-xl border focus:outline-red-300 p-2 w-full rounded"
                type="text"
                name="city"
              />
            </div>
            <div>
              <label className="text-xl p-2" htmlFor="state">
                State / Province
              </label>
              <br />
              <input
                required
                className="text-xl border focus:outline-red-300 p-2 w-full rounded"
                type="text"
                name="state"
              />
            </div>
            <div>
              <label className="text-xl p-2" htmlFor="zip">
                ZIP / Postal code
              </label>
              <br />
              <input
                required
                className="text-xl border focus:outline-red-300 p-2 w-full rounded"
                type="text"
                name="zip"
              />
            </div>
          </div>
          <button
            className="text-xl mt-8 p-2 bg-orange-300 w-full  rounded hover:bg-orange-400 font-bold"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
