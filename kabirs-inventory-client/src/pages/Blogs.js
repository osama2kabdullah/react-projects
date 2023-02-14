import React from "react";
import HelmetMe from "./shared/HelmetMe";

const Blogs = () => {
  return (
    <div className="m-12 grid gap-5">
      <HelmetMe>Blogs</HelmetMe>
      <div>
        <h3 className="text-2xl">Difference between javascript and node.js</h3>
        <p>
          1. Javascript is a high level programming language <br /> 1. Node.js is a
          runtime that help us to run javascript programming language out of the
          browser <br /> <br />
          2. Javscript use for front-end-development <br /> 2. Node.js use for
          back-end-development and it help use to write javascript code in
          back-end <br /> <br />
          3. Javascript follow the standard of ECMA script when
          writting programs <br /> 3. node.js written by C++ and it based on chrome V8
          engine <br /><br /> 4. Javascript run can any running environment syuch as
          firefox-spider-monky, google-chrome-V8 engine <br /> 4. Node.js can run only
          one google chorome V8 engne
        </p>
      </div>
      <div>
        <h3 className="text-2xl">
          When should you use nodejs and when should you use mongodb
        </h3>
        <p>
          <p className="font-bold">When should you use nodejs:</p> <p>Node.js is build for scalable network like online games, chat room wheres many users connected at a time. It works as asynckronously. so, that when I build a applicatiuion wheres many users connected at a time and want to change without refreshing I use node.js becouse Its a scalable network runtime environment</p>
        </p>
        <p>
            <p className="font-bold">When should you use mongod:</p> <p>Mongodb is a NoSQL database. and it is a document base database. document is aligned like object. that I write on application. It easy to store data and read data from database.</p>
        </p>
      </div>
      <div>
        <h2 className="text-2xl">Differences between sql and nosql databases</h2>
        <p>
            1. sql is realtional databse system. <br />
            1. NoSql is non realtional databse system.
            <br /><br />
            2. sql databse have structured query languse and have  predifined schema <br />
            2. for unstructed data and dybamic schema database system.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">What is the purpose of jwt and how does it work</h2>
        <p>
            
        </p>
      </div>
    </div>
  );
};

export default Blogs;
