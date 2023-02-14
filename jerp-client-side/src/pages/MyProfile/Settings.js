import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HelemetMe from '../shared/HelemetMe';

const Settings = () => {
    return (
        <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-8 bg-gray-100">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn text-black hover:text-white bg-transparent fixed h-12 w-12 bottom-12 border rounded-full drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <li>
            <Link to="/settings">Edit Profile</Link>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Settings;