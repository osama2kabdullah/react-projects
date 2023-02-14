import { Table } from "flowbite-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import HelemetMe from "../../shared/HelemetMe";
import TableRowMe from "../MyOrders/TableRowMe";
import MakeAdminModal from "./MakeAdminModal";
import UsersRowMe from "./UsersRowMe";

const ManageUssers = () => {
  const [modal, setModal] = useState(false);
  const { data: users, isLoading, refetch } = useQuery("allusers", () =>
    fetch("http://localhost:5000/allusers", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }).then((res) => res.json())
  );
  
  const handleMakeAdmin = (id) => {
    fetch('http://localhost:5000/takeactionforuser/'+id, {
        method: 'PUT',
        headers: {
            'content-type':'application/json',
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        body:  JSON.stringify({role:'admin'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        refetch();
    })
  }
  
  if (isLoading) {
    return <FullPageLoading></FullPageLoading>;
  };
  return (
    <div>
      <HelemetMe>Manage users</HelemetMe>
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>Pending orders</Table.HeadCell>
          <Table.HeadCell>
            <span>Total Orders</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Pay</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Block</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Make Admin</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <>
              <UsersRowMe
                setModal={setModal}
                user={user}
              ></UsersRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      <MakeAdminModal handleDelete={handleMakeAdmin} modal={modal} setModal={setModal}></MakeAdminModal>
    </div>
  );
};

export default ManageUssers;
