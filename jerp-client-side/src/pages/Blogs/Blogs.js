import { Card } from "flowbite-react";
import React from "react";
import HelemetMe from "../shared/HelemetMe";

const Blogs = () => {
  return (
    <div className="grid gap-6 lg:mx-32 mx-4 my-12">
      <HelemetMe>Blogs</HelemetMe>
        <h1>Answering some qoustions</h1>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        How will you improve the performance of a React Application?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          1. Using windowing technique: if my site hase thosends of data I use react-window or react-virtualized windowing libraries. that helps me to render samll subset of my data;
          <br />
          2. use build folder for production (npm run build) if I use this command for build project (npm create react app)
          <br />
        </p>
      </Card>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What are the different ways to manage a state in a React application?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          declear a varibale with 'let' keyword after loading assyncronous data redeclear the variable with loaded data. 
        </p>
      </Card>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        How does prototypical inheritance work?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          ...
        </p>
      </Card>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          setProducts mainluy a function and product depends on setProduct paramiter. when application loading the setProduct function initial value is emty that means product variable is emty. but after loading asyncronous function give some value as a paramiter of setProduct. so, product will be stored value. after loading. its awsome becose we can't set a value in variable that decleared alredy.
        </p>
      </Card>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          at first loop in that array then set condition that if a element name match the search keyword then push that element another array. I can match by if an word or some word inclueds in element name and avoid uppercase or lower case.
        </p>
      </Card>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What is a unit test? Why should write unit tests?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          ...
        </p>
      </Card>
    </div>
  );
};

export default Blogs;
