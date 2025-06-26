import express from "express";
import fs from 'fs';


const filesRoutes = express.Router();
filesRoutes.get("/files", async (req, res) => {
    const { file_path } = req.query; 

    console.log(file_path);
    try {
        const unitNames = fs.readdirSync(file_path);
    return res.status(200).send(unitNames);
    } catch {
        return res.status(500).send("Failed to read directory");
    }
})

export default filesRoutes;