import express from "express";
import fs from 'fs';


const fileContentsRoutes = express.Router();
fileContentsRoutes.get("/file-contents", async (req, res) => {
    const { file_path } = req.query; 
    try {
        const content = fs.readFileSync(file_path);
    return res.status(200).send(content);
    } catch {
        return res.status(500).send("Failed to read file");
    }
})

export default fileContentsRoutes;