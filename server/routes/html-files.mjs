import express from "express";
import db from "../db/conn.mjs";

const HTMLFilesRoutes = express.Router();
//send html file data to the database
HTMLFilesRoutes.post("/html-files", async (req, res) => {
    console.log("here. html")
    let collection = await db.collection("html_files");

    const { html_data } = req.body; 
          
    if (!html_data) {
      return res.status(400).send("No data provided.");
    }

  
    //add new document or sub document to existing unit
    const result = await collection.updateOne( { unitName : html_data.unitName }, { $push : { data : { ...html_data } } }, { upsert: true } );
    console.log(`Successfully inserted html data`);
    res.status(201).send(result);  
});

//get html element data for a certain unit name
HTMLFilesRoutes.get("/html-files", async (req, res) => {
  console.log("here. html get")
  let collection = await db.collection("html_files");

  const { unit_name } = req.query; 
        
  if (!unit_name) {
    return res.status(400).send("Invalid unit name.");
  }



  const result = await collection.findOne({unitName: unit_name}); //there will only be one document per unit
  const data = result.data;
  console.log(`Successfully got html file data`);
  res.status(200).send(data);
});

export default HTMLFilesRoutes;