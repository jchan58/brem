import express from "express";


import fs from 'fs';

const filesRoutes = express.Router();
filesRoutes.get("/files", async (req, res) => {
    const { file_path } = req.query; 
    const unitNames = [];
    fs.readdir(file_path, (err, files) => {

        if (err) {
            console.log(err);
        } else {
            //get list of file names
            files.forEach(file => {

                unitNames.push(file);

            });

        }
    })

    return res.status(200).send(unitNames);
})

export default filesRoutes