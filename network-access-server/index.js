const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.status(401).send({message: 'unauthorize access'})
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded)=> {
    if(err){
        return res.status(403).send({message: 'Forbidden access'})
    }
    console.log('decoded', decoded);
    next();
  })
}

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.blfheza.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    client.connect();
    const topicCollection = client
      .db("voleenter")
      .collection("volenteer-activities");
    const selectedTopicCollection = client
      .db("voleenter")
      .collection("selected-activities");

    //AUTHIRIZATION
    app.post("/login", (req, res) => {
      const user = req.body;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1d",
      });
      res.send({ accessToken });
    });

    //load all voleenr=teer topics
    app.get("/volenteerTopics", async (req, res) => {
      const result = topicCollection.find({});
      const topics = await result
        .skip(req.query.page * 8)
        .limit(8)
        .toArray();
      res.send(topics);
    });

    // collection qauntity
    app.get("/dataQuantity", async (req, res) => {
      const result = await topicCollection.countDocuments();
      res.send({ result });
    });

    //single topic load
    app.get("/topicdetail/:topicId", async (req, res) => {
      const id = req.params.topicId;
      const query = { _id: ObjectId(id) };
      const result = await topicCollection.findOne(query);
      res.send(result);
    });

    //single topic add
    app.post("/addTopic", async (req, res) => {
      const body = req.body;
      const result = await selectedTopicCollection.insertOne(body);
      res.send(result);
    });

    //delete a data from selected topics
    app.delete('/delete/:topicId', async (req, res)=>{
      const id = req.params.topicId;
      const query = { _id: ObjectId(id) };
      const result = await selectedTopicCollection.deleteOne(query);
      res.send(result);
    })
    
    //load selected topics
    app.get("/selectedtopics", verifyJWT, async (req, res) => {
      const email = req.query.email;
      const query = { email };
      const result = selectedTopicCollection.find(query);
      const selectedTopics = await result.toArray();
      res.send(selectedTopics);
    });
  } finally {
    // client.close();
  }
}
run().catch(console.dir);
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log("listening to port", port));
