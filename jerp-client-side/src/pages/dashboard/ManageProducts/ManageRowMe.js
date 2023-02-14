import { Avatar, Button, Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ManageRowMe = ({ tool, setModal }) => {
  const { name, price, availableQty, picture, _id } = tool;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Avatar img={picture} rounded={true} />
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{availableQty}</Table.Cell>
      <Table.Cell>${price}</Table.Cell>
      <Table.Cell>
        <Link
          to={`updateproduct/${_id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Update
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => setModal(_id)} color="purple" size="xs">
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageRowMe;
