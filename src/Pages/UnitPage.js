import { useEffect, useState } from "react";
import { equipQuizzes, equipVideos } from "../ModuleEditFunctions/UserSideFunctions.js";
import { pullUnit } from "../api/api.js";


function readHTMLFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject("No file provided.");
        return;
      }
  
      const reader = new FileReader();
  
      // When the file is successfully read
      reader.onload = function(event) {
        resolve(event.target.result); // Return the content of the file
      };
  
      // Handle errors
      reader.onerror = function() {
        reject("Error reading file.");
      };
  
      // Read the file as plain text
      reader.readAsText(file);
    });
  }
  
//process the HTML file and write it to the page
async function processAndWriteHTML(htmlContent) {
  console.log("called");
    try {
      //let htmlContent = await readHTMLFile(file);
      document.write(htmlContent); 

    } catch (error) {
      console.error(error);
    }
}


window.onload = async function () {
  const queryParams = new URLSearchParams(window.location.search);
  const unitName = queryParams.get("unit_name"); //get the unit name from the url query param (http://localhost:3000/unitpage?unit_name=[unitName]&module_name=)

  const moduleName = queryParams.get("module_name");

  if(unitName && moduleName)  { //only do this if the parameters are present (on the unit page...)
    const unitFile = await pullUnit(unitName, moduleName);
      
    if(unitFile){
      await processAndWriteHTML(unitFile);
          //console.log("called");

      await equipVideos(unitName); 
      await equipQuizzes(unitName);
   
    } 
  }
}
  //}
    
 
const UnitPage = () => {
    return (
        <div className="relative bg-white pt-5">
          <div className="relative z-10">
            <div id = "non-footer">
              <p>Unit Loading...</p>
            </div>
          </div>
        </div>
    );
};

export default UnitPage;