import { Avatar, Button, Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const UsersRowMe = ({ user, setModal }) => {
    const  {doc, email, _id} = user;
    const {photoURL, UserName, role} = doc;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Avatar img={photoURL} rounded={true} />
      </Table.Cell>
      <Table.Cell>{UserName || email}</Table.Cell>
      <Table.Cell>{"orderQuantity"}</Table.Cell>
      <Table.Cell>${"totalPrice"}</Table.Cell>
      <Table.Cell>
        <Link
            // to={`updateproduct/${_id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          See profile
        </Link>
      </Table.Cell>
      <Table.Cell>
        {
            role === 'admin' || <Button
            //   onClick={() => setModal(_id)}
              color="failure"
              size="xs"
            >
              Block
            </Button>
        }
        
      </Table.Cell>
      <Table.Cell>
        {
            role === 'admin' ? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 mx-auto text-success h-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg></>
          :
          <Button
          onClick={() => setModal(_id)}
          color="purple"
          size="xs"
        >
          Make Admin
        </Button>
        }
      </Table.Cell>
    </Table.Row>
  );
};

export default UsersRowMe;
