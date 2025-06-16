import { createDriveFolder, fetchDriveFolders, signInWithGoogle, uploadFileToFolder } from "../googleDriveService";

//test mongo db
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

//unit
export async function postUnit(htmlFile, moduleName) {
    try {
        const folders = await fetchDriveFolders();
        let folderId = "";
        for(let i = 0; i < folders.length; i++) {
            if(folders[i].name === moduleName) {
                folderId = folders[i].id;
                break;
            }
        }

        console.log("id: ", folderId);
        if(folderId === "") {
            folderId = createDriveFolder(moduleName);
        }

        uploadFileToFolder(htmlFile, folderId);
    } catch (err) {
        console.log("Problem posting the unit");
        console.error("Error:", err);
    }
}

export async function pullUnit(unitName, moduleName) { //from ChatGPT but looks ok?
    try {
        //get the access token
        const accessToken = await signInWithGoogle();
        if (!accessToken) {
            console.error("No access token available.");
            return;
        }

        const folders = await fetchDriveFolders();
        let folderId = "";

        // Find the module's folder ID
        for(let i = 0; i < folders.length; i++) {
            if(folders[i].name === moduleName) {
                folderId = folders[i].id;
                break;
            }
        }

        console.log(folderId);

        if (!folderId) {
            console.error(`Module "${moduleName}" not found.`);
        }

        // Fetch files in the folder
        const filesResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents and mimeType contains 'text/html'&fields=files(id,name)`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const filesData = await filesResponse.json();
        const units = filesData.files;

        let desiredUnit = null;
        for(let i = 0; i < units.length; i++) {
            console.log(units[i]);
            if(unitName === units[i].name) {
                desiredUnit = units[i];
                break;
            }
        }

        console.log(desiredUnit)
        if (!desiredUnit) {
            console.error(`Unit "${unitName}" not found in module "${moduleName}".`);
        }

        // Fetch the actual file content
        const fileResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${desiredUnit.id}?alt=media`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (!fileResponse.ok) {
            console.error(`Failed to fetch content for unit "${unitName}".`);
        }

        
        const htmlText = await fileResponse.text();
        const cleanedHtml = htmlText.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "");

        return cleanedHtml; 
    } catch (error) {
        console.error("Error retrieving unit file:", error);
        return null;
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


