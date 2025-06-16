import express from "express";
import db from "../db/conn.mjs";

const quizElementsRoutes = express.Router();
//send video element data to the database
quizElementsRoutes.post("/quiz-elements", async (req, res) => {
    let collection = await db.collection("quiz_element_data");

    const { quiz_element_data } = req.body; 
  
    if (!quiz_element_data) {
      /*
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate unit name error
        return res.status(400).send("Unit with this name already exists"); //test this out and make it catchable and display to user...; trying too make unitName and index so this happens...fails
      }*/
      return res.status(400).send("No data provided.");
    }
  
  
    /*
    let result = await collection.insertOne(quiz_element_data);
    console.log(`Successfully inserted document: ${result.insertedId}`);
    res.status(201).send(result);*/
    const existCount = await collection.countDocuments({unitName: quiz_element_data.unitName}, { limit: 1 })
  
    if(existCount === 0) {
      const result = await collection.insertOne({unitName: quiz_element_data.unitName, data: [quiz_element_data]});
      console.log(`Successfully inserted document: ${result.insertedId}`);
      res.status(201).send(result);
    } else { //add subdoc to existing unit
      const result = await collection.updateOne( { unitName : quiz_element_data.unitName }, { $push : { data : { ...quiz_element_data } } }, { upsert: true } );
      console.log(`Successfully inserted quiz data`);
      res.status(201).send(result);
    }
});

//get quiz element data for a certain unit name
quizElementsRoutes.get("/quiz-elements", async (req, res) => {
  console.log("here. video get")
  let collection = await db.collection("quiz_element_data");

  const { unit_name } = req.query; 
        
  if (!unit_name) {
    return res.status(400).send("Invalid unit name.");
  }


  /*
  let result = await collection.find({unitName: unit_name}).toArray();
  console.log(`Successfully got quiz data`);
  res.status(200).send(result); //note: switch status and send order*/
  const result = await collection.findOne({unitName: unit_name}); //there will only be one document pre unit
  const data = result.data;

  console.log(`Successfully got unit quiz data`);
  res.status(200).send(data);
});

export default quizElementsRoutes;