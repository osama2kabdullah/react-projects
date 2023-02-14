const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//format of token
// authorization: Bearer <access_token>

function verifyToken(req, res, next) {
  //get aauth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undifined
  if (typeof bearerHeader !== "undefined") {
    // get  token
    const bearerToken = bearerHeader.split(" ")[1];
    //set the token
    req.token = bearerToken;
    //call next middlewere
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASS}@cluster0.qf4bw47.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const Instockcollection = client
      .db("kabirs-inventory")
      .collection("in-stocs-products");
    const usersInstockcollection = client
      .db("kabirs-inventory")
      .collection("users-in-stocs-products");

    //load al in stocs
    app.get("/inStocProducts", async (req, res) => {
      const query = {};
      const result = Instockcollection.find(query);
      const allData = await result.toArray(result);
      res.send(allData);
    });

    //load user based all data
    app.get("/userData", verifyToken, async (req, res) => {
      jwt.verify(req.token, process.env.ACCESS_TOKEN, async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const email = req.query.email;
          const query = { email };
          const result = usersInstockcollection.find(query);
          const allData = await result.toArray();
          res.send(allData);
        }
      });
    });

    //delete a data
    app.delete("/deleteProduct/:productId", async (req, res) => {
      const id = req.params.productId;
      const query = { _id: ObjectId(id) };
      const result = await usersInstockcollection.deleteOne(query);
      res.send(result);
    });

    // /load a data in stoc
    app.get("/manageproducts/:productId", async (req, res) => {
      const id = req.params.productId;
      const query = { _id: ObjectId(id) };
      const result = await usersInstockcollection.findOne(query);
      res.send(result);
    });

    //inser ad document
    app.post("/addNewProduct", async (req, res) => {
      const doc = req.body;
      const result = await usersInstockcollection.insertOne(doc);
      res.send(result);
    });

    //login api
    app.post("/login", (req, res) => {
      const user = req.body.email;
      jwt.sign({ user }, process.env.ACCESS_TOKEN, (err, token) => {
        res.json({ token });
      });
    });

    //update a document
    app.post("/updateProduct", async (req, res) => {
      const id = req.body.id;
      const age = req.body.age;
      const filter = { _id: ObjectId(id) };
      const updateDocument = {
        $set: { age },
      };
      const result = await usersInstockcollection.updateOne(
        filter,
        updateDocument
      );
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("kabirs server running");
});

app.listen(port, () => {
  console.log("kabirs server running on port", port);
});
