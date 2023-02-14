import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import OpenButton from "./OpenButton";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12 bg-gray-100">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>

        {/* open button */}
        <OpenButton></OpenButton>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          {admin && (
            <>
            <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor">Add a Doctors</Link>
            </li>
            <li>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
