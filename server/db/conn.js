import { MongoClient, ServerApiVersion } from 'mongodb';
import API_URI from "../.env"; //define this in .env for security (it will have your username and password in it)


// Create a MongoClient with a MongoClientOptions object to set the Stable API version; only use one!!
export const client = new MongoClient(API_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let conn;
let db; 

try {
    // Connect the client to the server	(optional starting in v4.7)
    conn = await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    db = conn.db("unit_pages");
} catch(e) {
    console.error(e);
}


export default db;


