import mongoose from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb';
import API_URI from "./.env"; //define this in .env for security (it will have your username and password in it)
//import API_URI  from "./.env"; 
/*
mongoose.connect("mongodb+srv://gbemisoladosu:Zleyz1Xh4EYGb1kD@cluster0.hdz2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"));

//const conn = mongoose.connection;*/



// Create a MongoClient with a MongoClientOptions object to set the Stable API version; only use one!!
export const client = new MongoClient(API_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); //test


