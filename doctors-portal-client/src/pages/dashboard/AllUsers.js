import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://boiling-wildwood-09844.herokuapp.com/allusers", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const makeAdminBtn = (email) => {
    fetch("https://boiling-wildwood-09844.herokuapp.com/user/admin/" + email, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success('make admin successfully')
        }
        else {
          toast.error('faild to action')
        }
      });
  };
  return (
    <div>
      <h1 className="text-[24px]">All Users</h1>

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
          {users.map((user, index) => (
            <tr className="border text-center">
              <td className="py-2">{index + 1}</td>
              <td>{user.email}</td>
              <td>
                {user?.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => makeAdminBtn(user.email)}
                    className="btn btn-xs"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-xs">Delete User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
