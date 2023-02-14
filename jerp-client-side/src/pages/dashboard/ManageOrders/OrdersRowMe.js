import { Avatar, Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const OrdersRowMe = ({product}) => {
    const {Useremail, order} = product;
    const [user, setUser] = useState({});
    //find user
    useEffect(()=>{
        fetch('http://localhost:5000/finduser/'+Useremail, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
    .then(res=>res.json())
    .then(data=>{
        setUser(data.doc)
    });
    },[Useremail])
    
    const {UserName, photoURL} = user;
    
    const {productName, productQuantity: orderQuantity, totalPrice} = order;
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      <Avatar img={photoURL} rounded={true} />
        {UserName || Useremail}
      </Table.Cell>
      <Table.Cell>{productName}</Table.Cell>
      <Table.Cell>{orderQuantity}</Table.Cell>
      <Table.Cell>${totalPrice}</Table.Cell>
      <Table.Cell>
        <Link
        //   to={`updateproduct/${_id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Update
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Button 
        // onClick={() => setModal(_id)}
        color="purple" size="xs">
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
    );
};

export default OrdersRowMe;