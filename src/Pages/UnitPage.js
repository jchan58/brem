import { pullUnit } from "../api/api"; 
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
    try {
      const htmlContent = await readHTMLFile(file);
      document.write(htmlContent); // Write the file content to the paget
    } catch (error) {
      console.error(error);
    }
}

//make sure the input field exists, and then look for when the file is uploaded and processAndWrite
window.onload = function() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
          processAndWriteHTML(file);
        } else {
            console.log("No file selected")
        }
      });
    }
  };


const UnitPage = () => {
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