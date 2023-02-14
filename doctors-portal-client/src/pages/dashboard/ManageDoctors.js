import React, { useEffect, useState } from "react";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alldoctors", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  //   remove btn
  const removeBtn = (email) => {
    const procced = window.confirm("are sure you want delete this doctor?");
    if (procced) {
      fetch("http://localhost:5000/deleteDoctor/" + email, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  return (
    <div>
      <h1 className="text-[24px]">Manage Doctors</h1>

      <table className="w-full mt-3 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th></th>
            <th className="p-2"></th>
            <th className="p-2">NAME</th>
            <th>SPECIALITY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {doctors.map((user, index) => (
            <tr key={index} className="border text-center">
              <td className="py-2">{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-12 my-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.imgUrl} alt="avatar" />
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.speciality}</td>
              <td>
                {user?.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => removeBtn(user.email)}
                    className="btn btn-error text-white btn-xs"
                  >
                    Remove Doctor
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
