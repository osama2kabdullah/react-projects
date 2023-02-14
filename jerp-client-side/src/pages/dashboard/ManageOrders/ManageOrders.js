import { Table } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import DeleteModal from "../../shared/DeleteModal";
import FullPageLoading from "../../shared/FullPageLoading";
import HelemetMe from "../../shared/HelemetMe";
import OrdersRowMe from "./OrdersRowMe";

const ManageOrders = () => {
    const {data, isLoading} = useQuery('allorders', ()=>fetch('http://localhost:5000/allorders', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }).then(res=>res.json()));
    
    if(isLoading){
        return <FullPageLoading></FullPageLoading>
    }
    const products = [];
    data?.forEach(element => {
        element.orderlist.forEach(order=>{
            products.push({Useremail: element.Useremail ,order});
        })
    });
  return (
    <div>
      <HelemetMe>Manage orders</HelemetMe>
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Client name</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>order quantity</Table.HeadCell>
          <Table.HeadCell>
            <span>Total price</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span>Payment status</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <>
              <OrdersRowMe 
            //   setModal={setModal} 
              product={product}></OrdersRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      <DeleteModal
      // refetch={() => refetch()}
      // handleDelete={handleDelete}
      // modal={modal}
      // setModal={setModal}
      ></DeleteModal>
    </div>
  );
};

export default ManageOrders;
