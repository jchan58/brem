import { useEffect, useState } from "react";
import { pullUnit } from "../api/api"; 
import { equipQuizzes, equipVideos } from "../ModuleEditFunctions/UserSideFunctions.js";
//import { ref, getStorage, getBlob } from "firebase/storage";
//import app from "../firebaseConfig";
//note this will break if there are no units! fix or enforce...
/*
const htmlByteArray = await pullUnit(); //oof this is happening no matter the page...

const htmlBlob = new Blob([new Uint8Array(htmlByteArray)], { type: 'text/html' });
//console.log(htmlBlob);

const html = await htmlBlob.text();

document.write(html);


if (htmlString) {
    document.write(htmlString); // Write the HTML content to the page
} else {
    console.error("Failed to load unit");
}*/

//testing without backend, skipping to document write to page step:


//FIREBASE
/*does not work
const storage = getStorage();
const testRef = ref(storage, "units/unit_file_test.html");*/


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
async function processAndWriteHTML(file) {
  console.log("called");
    try {
      let htmlContent = await readHTMLFile(file);
      document.write(htmlContent); 

    } catch (error) {
      console.error(error);
    }
}



const UnitPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const unitName = queryParams.get("unit_name"); //get the unit name from the url query param (http://localhost:3000/unitpage?unit_name=[unitName])
  //make sure the input field exists, and then look for when the file is uploaded and processAndWrite
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { 
    
    if(!loaded){
      const completeHTMLProcessing = async (file) => {
        setLoaded(true);
        await processAndWriteHTML(file);
        console.log("called");
        document.getElementById("undefined").remove(); //not quite...
        await equipVideos(unitName); 
        await equipQuizzes(unitName);
      }

      const fileInput = document.getElementById("fileInput");
      fileInput.addEventListener("change", function(event) {

        const file = event.target.files[0];
        if (file) {
          completeHTMLProcessing(file); //note StrictMode caused problems so turned it off
        //this name for now, but use name of unit file in future
        } else {
            console.log("No file selected")
        }
      });
    }
    
  }, []);
  

    return (
        <div className="relative bg-white pt-5">
          <div className="relative z-10">
            <div id = "non-footer">
                <input type="file" id="fileInput" />
            </div>
          </div>
        </div>
    );
};

//it works just how I thought, test_delta being in public lets it get the file from ./

export default UnitPage;