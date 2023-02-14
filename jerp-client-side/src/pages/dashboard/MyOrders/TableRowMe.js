import { Button, Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const TableRowMe = ({ order, setModal }) => {
  const { productName, productQuantity, totalPrice } = order;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {productName}
      </Table.Cell>
      <Table.Cell>{productQuantity}</Table.Cell>
      <Table.Cell>${totalPrice}</Table.Cell>
      <Table.Cell>
        <button
        onClick={()=>setModal(order)}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Cancel
        </button>
      </Table.Cell>
      <Table.Cell>
        <Link to={'/checkout/'+totalPrice}><Button color="purple" size="xs">Pay</Button></Link>
        
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRowMe;
