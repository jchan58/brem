import express from "express";
import fs from 'fs';


const fileContentsRoutes = express.Router();
fileContentsRoutes.get("/file-contents", async (req, res) => {
    const { file_path } = req.query; 
    console.log("path in endpoint: ", file_path);
    try {
        const content = fs.readFileSync(file_path, 'utf-8');
        return res.status(200).send({html: content});
    } catch {
        return res.status(500).send("Failed to read file");
    }
})

export default fileContentsRoutes;