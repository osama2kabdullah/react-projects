import { Table } from "flowbite-react";
import React, { useState } from "react";
import DeleteModal from "../../shared/DeleteModal";
import FullPageLoading from "../../shared/FullPageLoading";
import useLoadTools from "../../../hooks/useLoadTools";
import TableRowMe from "../MyOrders/TableRowMe";
import ManageRowMe from "./ManageRowMe";
import HelemetMe from "../../shared/HelemetMe";

const ManageProducts = () => {
  const { tools, isLoading, refetch } = useLoadTools();
  const [modal, setModal] = useState(false);

  const handleDelete = (id) => {
    fetch("http://localhost:5000/delete/" + id, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  if (isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }
  return (
    <div>
      <HelemetMe>Manage product</HelemetMe>
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Product Quantity</Table.HeadCell>
          <Table.HeadCell>Per Product Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Update</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Stock out</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tools.map((tool) => (
            <>
              <ManageRowMe setModal={setModal} tool={tool}></ManageRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      <DeleteModal
        handleDelete={handleDelete}
        modal={modal}
        setModal={setModal}
      ></DeleteModal>
    </div>
  );
};

export default ManageProducts;
