import express from "express";
import db from "../db/conn.mjs";

const videoElementsRoutes = express.Router();
//send video element data to the database
videoElementsRoutes.post("/video-elements", async (req, res) => {
    console.log("here. video")
    let collection = await db.collection("video_element_data");

    const { video_element_data } = req.body; 
          
    if (!video_element_data) {
      /*
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate unit name error
        return res.status(400).send("Unit with this name already exists"); //test this out and make it catchable and display to user...; trying too make unitName and index so this happens...fails
      }*/
      return res.status(400).send("No data provided.");
    }


    const existCount = await collection.countDocuments({unitName: video_element_data.unitName}, { limit: 1 })
  
    if(existCount === 0) {
      const result = await collection.insertOne({unitName: video_element_data.unitName, data: [video_element_data]});
      console.log(`Successfully inserted document: ${result.insertedId}`);
      res.status(201).send(result);
    } else { //add subdoc to existing unit
      const result = await collection.updateOne( { unitName : video_element_data.unitName }, { $push : { data : { ...video_element_data } } }, { upsert: true } );
      console.log(`Successfully inserted video data`);
      res.status(201).send(result);
    }
});

//get video element data for a certain unit name
videoElementsRoutes.get("/video-elements", async (req, res) => {
  console.log("here. video get")
  let collection = await db.collection("video_element_data");

  const { unit_name } = req.query; 
        
  if (!unit_name) {
    return res.status(400).send("Invalid unit name.");
  }



  const result = await collection.findOne({unitName: unit_name}); //there will only be one document per unit
  const data = result.data;
  console.log(`Successfully got unit video data`);
  res.status(200).send(data);
});

export default videoElementsRoutes;