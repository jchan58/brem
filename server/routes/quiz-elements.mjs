import express from "express";
import db from "../db/conn.mjs";

const quizElementsRoutes = express.Router();
//send video element data to the database
quizElementsRoutes.post("/quiz-elements", async (req, res) => {
    let collection = await db.collection("quiz_element_data");

    const { quiz_element_data } = req.body; 
  
    if (!quiz_element_data) {
      return res.status(400).send("No data provided.");
    }
  
  
    //add new document or sub document to existing unit
    const result = await collection.updateOne( { unitName : quiz_element_data.unitName }, { $push : { data : { ...quiz_element_data } } }, { upsert: true } );
    console.log(`Successfully inserted quiz data`);
    res.status(201).send(result);
    
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