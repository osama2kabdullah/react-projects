import React from 'react';

const DeatilForm = () => {
    return (
        <form className="pt-12 grid gap-6">
          <h3 className="text-2xl border-b-2 border-gray-300 pb-2 pl-0">
            Edit Delivary Details
          </h3>
          <input
            className="p-2 w-full rounded-md bg-gray-100"
            placeholder="text"
            name="home"
            type="home"
            required
          />
          <input
            className="p-2 w-full rounded-md bg-gray-100"
            placeholder="text"
            name="home"
            type="home"
            required
          />
          <input
            className="p-2 w-full rounded-md bg-gray-100"
            placeholder="text"
            name="home"
            type="home"
            required
          />
          <input
            className="p-2 w-full rounded-md bg-gray-100"
            placeholder="text"
            name="home"
            type="home"
            required
          />
          <input
            className="p-2 w-full rounded-md bg-gray-100"
            placeholder="text"
            name="home"
            type="home"
            required
          />
          <input
            className="p-2 font-bold bg-red-500 rounded-md w-full hover:bg-red-600 active:bg-red-500 text-white"
            type="submit"
            value="Save and Continue"
          />
        </form>
    );
};

export default DeatilForm;