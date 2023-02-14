const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASS_KEY}@cluster0.qf4bw47.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//verifyToken
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send({ message: "unauthorize access", success: false });
  }
  const tokenCode = token.split(" ")[1];
  jwt.verify(tokenCode, process.env.JOT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ message: "forbidden access", success: false });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    client.connect();
    const productsCollection = client.db("jerp").collection("products");
    const usersCollection = client.db("jerp").collection("users");
    const ordersCollection = client.db("jerp").collection("orders");
    const reviewCollection = client.db("jerp").collection("reviews");

    //find a user
    const findUser = async (email) => {
      const user = await usersCollection.findOne({email});
      return user;
    }
    
    //verify admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded;
      const user = await findUser(email);
      if(user?.doc?.role === 'admin' ){
        return next();
      }
      return res
      .status(401)
      .send({ message: "unauthorize access from admin verifaction", success: false });
    };

    //load all products
    app.get("/products", async (req, res) => {
      const result = await productsCollection.find({}).toArray();
      res.send(result);
    });

    //load a perticular product
    app.get("/product/:id", async (req, res) => {
      const result = await productsCollection.findOne({
        _id: ObjectId(req.params.id),
      });
      res.send(result);
    });

    //update perticular product
    app.put("/updateproduct/:id", verifyToken, verifyAdmin, async (req, res) => {
      const doc = req.body;
      const filter = { _id: ObjectId(req.params.id) };
      const update = { $set: doc };
      const options = { upsert: true };
      const result = await productsCollection.updateOne(
        filter,
        update,
        options
      );
      res.send(result);
    });
    
    //decrease product quantity
    app.put('/decreaseproductquantity/:id', verifyToken, async (req, res)=> {
      const filter = {_id: ObjectId(req.params.id)};
      const options = {upsert: true};
      const update = {$set : {availableQty: req.body.newProductAvailable}};
      const result = await productsCollection.updateOne(filter, update, options);
      res.send(result);
    })

    //insert a product
    app.post("/addnewproduct", verifyToken, verifyAdmin, async (req, res) => {
      const doc = req.body;
      const result = await productsCollection.insertOne(doc);
      res.send(result);
    });

    //delete perticular product
    app.delete("/delete/:id", verifyToken, verifyAdmin, async (req, res) => {
      const filter = { _id: ObjectId(req.params.id) };
      const result = await productsCollection.deleteOne(filter);
      res.send(result);
    });

    //load a single prodct
    app.get("/productdetail/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await productsCollection.findOne(filter);
      res.send(result);
    });

    //add new user and uodate user
    app.put("/updateoradduser/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email };
      const doc = req.body;
      const options = { upsert: true };
      const update = { $set: { doc } };
      const result = await usersCollection.updateOne(filter, update, options);
      res.send({ result });
    });

    //get all users
    app.get("/allusers", verifyToken, verifyAdmin, async (req, res) => {
      const result = await usersCollection.find({}).toArray();
      res.send(result);
    });
    
    //get all quantity
    app.get("/usersquantity", verifyToken, async (req, res) => {
      const usersCount = await usersCollection.countDocuments();
      res.send({usersCount});
    });

    //make admin role an user
    app.put("/takeactionforuser/:id", verifyToken, verifyAdmin, async (req, res) => {
      const filter = { _id: ObjectId(req.params.id) };
      const user = await usersCollection.findOne(filter);
      const key = Object.keys(req.body);
      // const value = Object.value(req.body);
      user.doc[key] = req.body.role;
      const update = { $set: { doc: user.doc } };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(filter, update, options);
      res.send(result);
    });

    //find user by token
    app.get("/finduser", verifyToken, async (req, res) => {
      const user = await findUser(req.decoded);
      res.send(user);
    });

    //find user by email
    app.get("/finduser/:email", async (req, res) => {
      const user = await findUser(req.params.email);
      res.send(user);
    });

    //user profile update
    app.put("/updateprofile", verifyToken, async (req, res) => {
      const email = req.decoded;
      const filter = { email };
      const doc = req.body;
      const update = { $set: { doc } };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(filter, update, options);
      res.send(result);
    });

    //issue a authirization token
    app.get("/gettoken/:email", (req, res) => {
      const email = req.params.email;
      const token = jwt.sign(email, process.env.JOT_SECRET_KEY);
      res.send({ token });
    });

    //get user base orders
    app.get("/myorders", verifyToken, async (req, res) => {
      const email = req.decoded;
      const filter = { Useremail: email };
      const result = await ordersCollection.findOne(filter);
      res.send({ result });
    });

    //add a review
    app.post("/addreview", verifyToken, async (req, res) => {
      const user = await findUser(req.decoded);
      const doc = {
        rating: req.body.rating,
        reviwMessage: req.body.reviwMessage,
        user,
      };
      const result = await reviewCollection.insertOne(doc);
      res.send(result);
    });

    //get all reviews
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find({}).toArray();
      res.send({ result });
    });

    //update users order
    app.patch("/cancelOrder", verifyToken, async (req, res) => {
      const email = req.decoded;
      const orderlist = req.body.rest;
      const filter = { Useremail: email };
      const update = { $set: { orderlist } };
      const option = {};
      const updateResult = await ordersCollection.updateOne(
        filter,
        update,
        option
      );
      res.send({ updateResult, success: true });
    });

    //get all orders
    app.get("/allorders", verifyToken, verifyAdmin, async (req, res) => {
      const result = await ordersCollection.find({}).toArray();
      res.send(result);
    });

    // store orders in db
    app.post("/makeOrder", verifyToken, async (req, res) => {
      const email = req.decoded;
      const doc = req.body;
      const filter = { Useremail: email };
      const userData = { Useremail: email, orderlist: [doc] };

      const isPresent = await ordersCollection.findOne(filter);
      if (isPresent) {
        const match = isPresent.orderlist.some(
          (element) => element.productName === doc.productName
        );
        if (match) {
          res.send({ message: "already added in cart", success: false });
        } else {
          isPresent.orderlist.push(doc);
          const update = { $set: { orderlist: isPresent.orderlist } };
          const option = {};
          const updateResult = await ordersCollection.updateOne(
            filter,
            update,
            option
          );
          res.send({ updateResult, success: true });
        }
      } else {
        const insertResult = await ordersCollection.insertOne(userData);
        res.send({ insertResult, success: true });
      }
    });
  } finally {
    // client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => console.log("listening to port", port));
