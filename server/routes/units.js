import express from "express";
import db from "../db/conn.js";

const router = express.Router();

/*
// Get a list of 50 accounts; test only
router.get("/", async (req, res) => {
    console.log("getting accounts...");
    let collection = await db.collection("test_coll");
    console.log("Connected to collection:", collection.collectionName); 
    let numDocs = await collection.countDocuments();
    console.log(`It has ${numDocs} documents`);
    let results = await collection.find({})
      .limit(50)
      .toArray();
    res.send(results).status(200);
});*/

//upload a new unit to the database
router.post("/", async (req, res) => {
  let collection = await db.collection("units");

  const { byteArray } = req.body;

    if (!byteArray || !Array.isArray(byteArray)) {
        return res.status(400).send("Invalid byte array.");
    }

  /*
  let newUnit = req.body;*/

  let result = await collection.insertOne(byteArray);
  console.log(`Successfully inserted document: ${result.insertedId}`);
  res.send(result).status(201);
});

//pull an existing unit from the database
router.get("/", async (req, res) => {
  let collection = await db.collection("units");
  let results = await collection.findOne(); //just find one for now to see
  res.send(results).status(200);
});

export default router;