import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [currentUser] = useAuthState(auth);
  const [apoinments, setApoinments] = useState([]);
  useEffect(() => {
    fetch("https://boiling-wildwood-09844.herokuapp.com/apoinments?email=" + currentUser?.email, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setApoinments(data));
  }, [currentUser]);
  return (
    <div>
      <h1 className="text-[24px]">My appoinment</h1>

      <table className="w-full mt-3 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th></th>
            <th className="p-2">NAME</th>
            <th>SERVICE</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {apoinments.map((appoinment, index) => (
            <tr className="border text-center">
              <td>{index + 1}</td>
              <td className="py-2">{appoinment.clientName}</td>
              <td>{appoinment.appoinmentName}</td>
              <td>{appoinment.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
