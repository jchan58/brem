import { getFiles, postImageData, postPDFData, postQuizData, postUnit, postVideoData, test } from "../api/api";
import { createDriveFolder, fetchDriveFolders, uploadFileToFolder, uploadLargeFileToFolder, uploadLargerFileToFolder } from "../googleDriveService";


//AWS imports
import { uploadData } from "aws-amplify/storage";
import { Amplify } from "aws-amplify";
import { upload } from "@testing-library/user-event/dist/cjs/utility/index.js";

const IDENTITY_POOL_ID = process.env.REACT_APP_IDENTITY_POOL_ID;
const USER_POOL_ID = process.env.REACT_APP_USER_POOL_ID;
const USER_POOL_CLIENT_ID = process.env.REACT_APP_USER_POOL_CLIENT_ID;
const BUCKET = "delta-bucket-alpha";
const REGION = "us-east-2";

//configure AWS amplify storage
Amplify.configure({
    Auth: {
        Cognito: {
            identityPoolId: IDENTITY_POOL_ID,
            userPoolId: USER_POOL_ID,
            userPoolClientId: USER_POOL_CLIENT_ID,
            allowGuestAccess: true,  // Enable unauthenticated access
            
        },
      },
    Storage:{
        S3: {
          bucket: BUCKET,
          region: REGION, 
        }
    }
})

//console.log(Amplify.getConfig())


//functions to hide the preview and save buttons on the page
function hidePreviewAndSave() {
    const prevBtn = document.getElementById("preview-module-page-btn");
    const saveBtn = document.getElementById("save-module-page-btn");
    prevBtn.classList.add("hidden");
    saveBtn.classList.add("hidden");
}

//function to make the preview and save buttons visible
function revertPreviewAndSave() {
    const prevBtn = document.getElementById("preview-module-page-btn");
    const saveBtn = document.getElementById("save-module-page-btn");
    prevBtn.classList.remove("hidden");
    saveBtn.classList.remove("hidden");
}


//send the page as a string of html to the server
async function send(content) {
   try {
    let results = await fetch(`http://localhost:5050/posts/`).then(resp => resp.json()); //testing out mongodb stuff, will change to more like smth above; issue
    console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
}

// refer to: videoObj.stampList.push(
    //{time: val, question: questionInfo[0], answer: questionInfo[1], allOptions: options, explanations: explainInfo});
async function saveVideoQuizzes(unitName) {
    /*not functional
    const folders = await fetchDriveFolders();
    let folderId = "";
    
    // Find the videos folder
    for(let i = 0; i < folders.length; i++) {
        console.log("folder name", folders[i].name)
        if(folders[i].name === "UnitVideos") {
            folderId = folders[i].id;
            break;
        }
    }

    if(folderId === "") {
        folderId = createDriveFolder("UnitVideos");
    }*/

    const videoObjs = document.getElementsByClassName("video-obj");
    Array.from(videoObjs).forEach(async (video) => {
        
        /*in progress
        const videoFile = video.file;
        console.log("vid file", videoFile);
        const videoLocation = await uploadFileToFolder(videoFile, folderId); //right now it is not uploading;could be too large, look more into resumable; could be bad file name...
        console.log("vid loc", videoLocation);*/
        const data = video.stampList;
        data.forEach(item => {

            const document = {
                time: item.time,
                question: item.question,
                answer: item.answer,
                allOptions: item.allOptions,
                explanations: item.explanations,
                id: video.id,
                unitName: unitName,
            }
    
            postVideoData(document);

            console.log(`saved video question: ${document.id}`)
        })
        
    })
}

//refer to questionDataContainer.questionData.push(
   // {question: questionInfo[0], answer: questionInfo[1], allOptions: options, hintInfo: hintInfo, questionId: questionId});
function saveQuizzes(unitName) {
    const quizzes = document.getElementsByClassName("question-data-container"); //quizzes are represented by question data containers

    Array.from(quizzes).forEach(quiz => {
        console.log(quiz);
        const data = quiz.questionData;
        data.forEach(item => {
            const document = {
                question: item.question,
                answer: item.answer,
                allOptions: item.allOptions,
                hintInfo: item.hintInfo,
                id: item.questionId,
                quizMaxSubs: quiz.submitBtn.maxSubs,
                unitName: unitName
            }
          
            postQuizData(document); 
            console.log(`saved quiz question: ${document.id}`)
        })

    })
}

//student demo functions

// changes image and video sources to the proper local location (demo_files)
function convertURLS() {
    const imageAndPDFEmbeds = document.getElementsByClassName("file-embed");
    Array.from(imageAndPDFEmbeds).forEach(file => {
        file.src = `/demo_files/${file.file_name}`; //everything must be in public/demo_files
    })

    const videoSources = document.getElementsByClassName("video-source");
    Array.from(videoSources).forEach(source => {
        source.src = `/demo_files/${source.file_name}`; //everything must be in public/demo_files
    })
}

//reverts the image and video sources to their original state
function unconvertURLS() {
    const imageAndPDFEmbeds = document.getElementsByClassName("file-embed");
    Array.from(imageAndPDFEmbeds).forEach(file => {
        file.src = file.backUpSRC; 
    })

    const videoSources = document.getElementsByClassName("video-source");
    Array.from(videoSources).forEach(source => {
        source.src = source.backUpSRC; //everything must be in public/demo_files
    })
}


//AWS functions

//upload images/pdfs
function uploadImagesAndPDFS(unitName) {
    //upload all images and PDFs
    const imageAndPDFEmbeds = document.getElementsByClassName("file-embed");
    Array.from(imageAndPDFEmbeds).forEach(async doc => {
        const filename = doc.file_name;
        console.log(document.getElementById(doc.id));
        const file = document.getElementById(doc.id).file;
        try {
			console.log('File name:', filename);
			const results = await uploadData({
			  path: `uploads/${filename}`,
			  data: file,
			}).result; //get the key (path) of the uploaded file in the bucket for use later..for mongo db


			console.log('File uploaded successfully, here is the key in the bucket:', results.path);

            
            
            if(doc.id.includes("image-embed")) {
                const document = {
                    id: doc.id,
                    awsKey: results.path,
                    unitName: unitName
                }

                postImageData(document); 
                console.log(`saved image: ${document.id}`)
            } else if(doc.id.includes("pdf-embed")) {
                const document = {
                    id: doc.id,
                    awsKey: results.path,
                    unitName: unitName
                }

                postPDFData(document); 
                console.log(`saved pdf: ${document.id}`)
            }

            
		} catch (error) {
			console.error('Error uploading image or pdf', error);
		}
    })

}

//upload videos to AWS bucket; note: add a saving screen so users will wait until it is done
function uploadVideos(unitName) { //still broken, uploading awsSrc to MongoDB 4 times? also need to change everything to upsert/check if that is the problem
    const videoObjs = document.getElementsByClassName("video-obj");
    console.log("video objs", videoObjs);
    Array.from(videoObjs).forEach(async doc => {
        const filename = doc.file_name;
        console.log(document.getElementById(doc.id));
        const file = document.getElementById(doc.id).file;
   
		console.log('File name:', filename);
		await uploadData({
			path: `uploads/${filename}`,
			data: file,
		}).result.then((results) => { //only do this once the upload is finished
            console.log('File uploaded successfully, here is the key in the bucket:', results.path);
            const document = {
                id: doc.id,
                awsKey: results.path,
                unitName: unitName
            }

            postVideoData(document); 
            console.log(`saved video: ${document.id}`);

        }).catch((error) => {
            console.error("Error uploading video ", error);
        }); 

    })
}


//map the image, etc src to the key, and then swap the image src with the src from getURL(key)...

//then, can get file by the file key...upload this to mongoDB, then on reconstruction,
//use the key to get the file url from storage and set it as the src

//note for MongoDB to connect, must add IP address to Network Access in Mongo
export async function save(){ //require preview mode to save or auto do?

    //hide these buttons from the page so they don't get saved
    hidePreviewAndSave();

    
    //save unit data
    const unitName = document.getElementById("saved-unit-name-input").value; 
    
    uploadImagesAndPDFS(unitName); 
    uploadVideos(unitName); 


    
    
    
    //FOR STUDENT DEMO
    //convertURLS();

    
    const website = `<!DOCTYPE html>\n` + document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });
   

    

    const existingUnits = await getFiles("../public/demo_units");

    if(existingUnits.includes(`${unitName}.html`)) {
        alert("Unit not saved. A unit with this name already exists");
        unconvertURLS();
        revertPreviewAndSave();
        return;
    }



    if(unitName === "") {
        alert("Unit not saved. Must enter a unit name.");
        unconvertURLS();
        revertPreviewAndSave();
        return;
    }

    if(unitName.includes("%20")) {
        alert("Unit name must not include '%20' .");
        unconvertURLS();
        revertPreviewAndSave();
        return;
    }

    const htmlFile = new File([blob], `${unitName}`);

    const queryParams = new URLSearchParams(window.location.search);
    const moduleName = queryParams.get("module_name");
    //await postUnit(htmlFile, moduleName);
    await saveVideoQuizzes(unitName);
    await saveQuizzes(unitName); //test, makes sure it saves with max sub change and edit on question!


    //save for demo; next save it for the AWS...
    // Create a download link for the blob
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${unitName}.html`; // File name for download

    // Simulate a click on the link to trigger the download
    document.body.appendChild(a);
    a.click(); 



    console.log("saved")

    

    //revert the page to normal so the admin can keep editing if they want

    //unconvertURLS(); FOR STUDENT DEMO
    revertPreviewAndSave();



}