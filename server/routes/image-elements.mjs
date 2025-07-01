import express from "express";
import db from "../db/conn.mjs";

const imageElementsRoutes = express.Router();
//send image element data to the database
imageElementsRoutes.post("/image-elements", async (req, res) => {
    let collection = await db.collection("image_element_data");

    const { image_element_data } = req.body; 
  
    if (!image_element_data) {

      return res.status(400).send("No data provided.");
    }
  
    //add new document or sub document to existing unit
    const result = await collection.updateOne( { unitName : image_element_data.unitName }, { $push : { data : { ...image_element_data } } }, { upsert: true } );
    console.log(`Successfully inserted image data`);
    res.status(201).send(result);  
});

//get image element data for a certain unit name
imageElementsRoutes.get("/image-elements", async (req, res) => {
  console.log("here. video get")
  let collection = await db.collection("image_element_data");

  const { unit_name } = req.query; 
        
  if (!unit_name) {
    return res.status(400).send("Invalid unit name.");
  }


  const result = await collection.findOne({unitName: unit_name}); //there will only be one document per unit
  const data = result.data;

  console.log(`Successfully got unit image data`);
  res.status(200).send(data);
});

export default imageElementsRoutes;