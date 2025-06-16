import { useEffect, useState } from "react";
import { equipImages, equipQuizzes, equipVideos } from "../ModuleEditFunctions/UserSideFunctions.js";
<<<<<<< HEAD
import { pullUnit } from "../api/api.js";
=======
import { pullUnit, readFile } from "../api/api.js";
import { Button } from "@radix-ui/themes/dist/cjs/index.js";
>>>>>>> ec704d8798c6f831a07049abcb3c51c86cdd3417


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
<<<<<<< HEAD
    const unitFile = await pullUnit(unitName, moduleName);
=======
    //THIS IS FOR FROM CLOUD STORAGE const unitFile = await pullUnit(unitName, moduleName);

    //THIS IS FOR FROM DEMO FILES
    const realUnitName = unitName.replace("%20", " ");
    const unitFile = await readFile(`../public/demo_units/${realUnitName}.html`);
>>>>>>> ec704d8798c6f831a07049abcb3c51c86cdd3417
      
    if(unitFile){
      await processAndWriteHTML(unitFile);
          //console.log("called");

<<<<<<< HEAD
      await equipVideos(unitName); 
      await equipQuizzes(unitName);
      equipImages();
=======
      await equipVideos(realUnitName); 
      await equipQuizzes(realUnitName);
      equipImages();

      //BACK NAV ONLY FOR DEMO
      const nonFooter = document.getElementById("non-footer");
      nonFooter.classList.add("flex", "flex-col");
      const backNavBtn = document.createElement("button");
      backNavBtn.classList.add("text-lg", "border", "border-solid", "border-black", "rounded-sm", "px-4", "py-2", "ml-2", "absolute", "bottom-4");
      backNavBtn.textContent = "Back to Module Page"; 
      backNavBtn.onclick = () => {
        window.location.href = "http://localhost:3000/demo-module-page";
      };
      nonFooter.appendChild(backNavBtn);
>>>>>>> ec704d8798c6f831a07049abcb3c51c86cdd3417
   
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