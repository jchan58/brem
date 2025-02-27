///import { google } from "googleapis";
import GOOGLE_SERVICE_KEY from "../.env";
//attempt with mongo db

export async function test() {
    try {
        await fetch(`http://localhost:5173/units`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }
        })
        
    } catch (err) {
        console.error("Error:", err);
    }
}
export async function postUnit(htmlFile) {
    console.log("Payload being sent:", JSON.stringify({ htmlFile: htmlFile }));
    try {
        await fetch(`http://localhost:5173/units`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ htmlFile: htmlFile}) //still get json error from byte method...
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function pullUnit() { //will need to have unit identifier as a param in the future
    try {
        let results = await fetch(`http://localhost:5173/units`).then(resp => resp.json()); //testing out mongodb stuff, will change to more like smth above; issue
        return results
    } catch (err) {
        console.error("Error:", err);
    }
}

//video data
export async function postVideoData(video_element_data) {
    console.log(video_element_data);
    try {
        await fetch(`http://localhost:5173/video-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ video_element_data }) 
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function getVideoData(unit_name) {
    console.log(`api getting video data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/video-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}

//quiz data
export async function postQuizData(quiz_element_data) {
    console.log(quiz_element_data);   
    try {
        await fetch(`http://localhost:5173/quiz-elements`, {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify({ quiz_element_data }) 
        }).then(resp => resp.json());
        
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function getQuizData(unit_name) {
    console.log(`api getting quiz data for unit ${unit_name}`);
    try {
        const response = await fetch(`http://localhost:5173/quiz-elements?unit_name=${unit_name}`, {
            method: "GET",
            headers: {
            "content-type": "application/json"
            }, 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
        
    } catch (err) {
        console.error("Error:", err);
    }
}

/*no...
//google API

//no? gapi?
// Load service account key
const serviceAccountCredentials = JSON.parse(GOOGLE_SERVICE_KEY);
const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountCredentials,
    scopes: ["https://www.googleapis.com/auth/drive.file"]
});


async function getFolderIdByName(folderName) {
    const drive = google.drive({ version: "v3", auth });
    try {
      const res = await drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`,
        fields: 'files(id, name)',
      });
  
      const files = res.data.files;
      if (files && files.length > 0) {
        // If multiple folders have the same name, pick the first one.
        console.log(`Found folder: ${files[0].name} (${files[0].id})`);
        return files[0].id;
      } else {
        console.log(`Folder "${folderName}" not found.`);
        return null;
      }
    } catch (error) {
      console.error("Error retrieving folder ID:", error);
      throw error;
    }
}

export async function postUnit(htmlFile, filename, folderName, mimeType) {
    try {
        const drive = google.drive({ version: "v3", auth });

        const folderId = await getFolderIdByName(folderName);

        if (!folderId) {
            console.error("Folder not found. Cannot upload file.");
            return;
        }

        const response = await drive.files.create({
            requestBody: {
                name: filename, // Change filename
                mimeType: mimeType,    // Change MIME type
                parents: [folderId]
            },
            media: {
                mimeType: mimeType,
                body: htmlFile,
            },
            fields: 'files(id, name)'
        });

        console.log("File uploaded:", response.data);
    } catch(error) {
        console.error("Error uploading file:", error);
        throw error;
  
    }
}
*/

