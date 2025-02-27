import express from "express";
import db from "../db/conn.mjs";

const units = express.Router();


// Get a list of 50 accounts; test only
units.get("/units", async (req, res) => {
    console.log("getting accounts...");
    let collection = await db.collection("test_coll");
    console.log("Connected to collection:", collection.collectionName); 
    let numDocs = await collection.countDocuments();
    console.log(`It has ${numDocs} documents`);
    let results = await collection.find({})
      .limit(50)
      .toArray();
    console.log(results);
    res.send(results).status(200);
});

/*
//upload a new unit to the database
router.post("/", async (req, res) => {
  console.log("here")
  let collection = await db.collection("units");

  const { htmlFile } = req.body; // Extract base64 string
        
  if (!htmlFile) {
    return res.status(400).send("No HTML file provided.");
  }



  let result = await collection.insertOne(htmlFile);
  console.log(`Successfully inserted document: ${result.insertedId}`);
  res.send(result).status(201);
});


//pull an existing unit from the database
router.get("/units", async (req, res) => {
  let collection = await db.collection("units");
  let results = await collection.findOne(); //just find one for now to see
  res.send(results).status(200);
});*/

export default units;