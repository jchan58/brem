import express from "express";
import db from "../db/conn.mjs";

const pdfElementsRoutes = express.Router();
//send image element data to the database
pdfElementsRoutes.post("/pdf-elements", async (req, res) => {
    let collection = await db.collection("pdf_element_data");

    const { pdf_element_data } = req.body; 
  
    if (!pdf_element_data) {

      return res.status(400).send("No data provided.");
    }
  
    //add new document or sub document to existing unit
    const result = await collection.updateOne( { unitName : pdf_element_data.unitName }, { $push : { data : { ...pdf_element_data } } }, { upsert: true } );
    console.log(`Successfully inserted pdf data`);
    res.status(201).send(result);
});

//get image element data for a certain unit name
pdfElementsRoutes.get("/pdf-elements", async (req, res) => {
  console.log("here. video get")
  let collection = await db.collection("pdf_element_data");

  const { unit_name } = req.query; 
        
  if (!unit_name) {
    return res.status(400).send("Invalid unit name.");
  }


  const result = await collection.findOne({unitName: unit_name}); //there will only be one document per unit
  const data = result.data;

  console.log(`Successfully got unit image data`);
  res.status(200).send(data);
});

export default pdfElementsRoutes;