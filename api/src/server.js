const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//config env
dotenv.configDotenv();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI not defined");
}

function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  //Routes
  //app.use("/api/v1/auth", authRoutes);

  const { MongoClient, ServerApiVersion } = require("mongodb");
  const uri = MONGO_URI;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  return app;
}
module.exports = { createServer };
