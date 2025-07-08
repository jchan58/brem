import { postHTMLData, postImageData, postPDFData, postQuizData, postVideoData } from "../api/api";



//AWS imports
import { uploadData } from "aws-amplify/storage";
import { Amplify } from "aws-amplify";


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


// refer to: videoObj.stampList.push(
    //{time: val, question: questionInfo[0], answer: questionInfo[1], allOptions: options, explanations: explainInfo});
async function saveVideoQuizzes(unitName) {
    

    const videoObjs = document.getElementsByClassName("video-obj");
    const promises = Array.from(videoObjs).map(async (video) => {
        
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
            return document.id;
        })
        
    })

    return Promise.all(promises);
}

//refer to questionDataContainer.questionData.push(
   // {question: questionInfo[0], answer: questionInfo[1], allOptions: options, hintInfo: hintInfo, questionId: questionId});
function saveQuizzes(unitName) {
    const quizzes = document.getElementsByClassName("question-data-container"); //quizzes are represented by question data containers

    const promises = Array.from(quizzes).map(quiz => {
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
            return document.id;
        })

    })
    return Promise.all(promises);
}

//AWS functions

//upload images/pdfs
function uploadImagesAndPDFS(unitName) {
    //upload all images and PDFs
    const imageAndPDFEmbeds = document.getElementsByClassName("file-embed");
    const promises = Array.from(imageAndPDFEmbeds).map(async doc => {
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
                return document.id;
            } else if(doc.id.includes("pdf-embed")) {
                const document = {
                    id: doc.id,
                    awsKey: results.path,
                    unitName: unitName
                }

                postPDFData(document); 
                console.log(`saved pdf: ${document.id}`)
                return document.id;
            }

            
		} catch (error) {
			console.error('Error uploading image or pdf', error);
		}
    })
    return Promise.all(promises); 

}

//upload videos to AWS bucket; note: add a saving screen so users will wait until it is done
function uploadVideos(unitName) {
    const videoObjs = document.getElementsByClassName("video-obj");

    const promises = Array.from(videoObjs).map(doc => {
        const filename = doc.file_name;
        const file = document.getElementById(doc.id).file;

        console.log('File name:', filename);

        return uploadData({
            path: `uploads/${filename}`,
            data: file,
        }).result.then((results) => {
            console.log('File uploaded successfully, here is the key in the bucket:', results.path);
            const document = {
                id: doc.id,
                awsKey: results.path,
                unitName: unitName
            };

            postVideoData(document);
            console.log(`saved video: ${document.id}`);

            return document.id; 
        }).catch((error) => {
            console.error("Error uploading video ", error);
            throw error; // optional: let the error propagate
        });
    });

    return Promise.all(promises); 
}

//upload the html file for the unit to AWS
async function uploadHTML(unitName, file, moduleName) { 
	return uploadData({ //return a promise so it will be awaited
		path: `uploads/${unitName}.html`,
		data: file,
	}).result.then((results) => { //only do this once the upload is finished
        console.log('File uploaded successfully, here is the key in the bucket:', results.path);
        const document = {
            awsKey: results.path,
            unitName: unitName,
            moduleName: moduleName
        }

        postHTMLData(document); 
        console.log(`saved html file: ${document.unitName}`);
        return document.unitName;
    }).catch((error) => {
        console.error("Error uploading video ", error);
    }); 
}



export async function save(){ 

    //check if the page is in edit mode, if it is, set it to preview (student view) mode
    const prevEditBtn = document.getElementById("preview-module-page-btn");

        let wasEdit = false;
    if(prevEditBtn.textContent === "Preview") {
        wasEdit = true;
        prevEditBtn.click();
    }

    //hide these buttons from the page so they don't get saved
    hidePreviewAndSave();

        
    //save unit data
    const unitName = document.getElementById("saved-unit-name-input").value; 


    //save the HTML file first, quickly
    const website = `<!DOCTYPE html>\n` + document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });
    

    //create an html file fromt he blob
    const htmlFile = new File([blob], `${unitName}`);

    const queryParams = new URLSearchParams(window.location.search);
    const moduleName = queryParams.get("module_name");
    await uploadHTML(unitName, htmlFile, moduleName); //upload the html file to AWS

    //show saving animation
    const saveOverlay = document.getElementById("saving-overlay");
    saveOverlay.classList.remove("hidden"); 

        
    await saveVideoQuizzes(unitName);
    await saveQuizzes(unitName);


    await uploadImagesAndPDFS(unitName); 
    await uploadVideos(unitName)
    console.log("saved")

    revertPreviewAndSave();

    //if the user was originally in edit mode, put it back for them
    if(wasEdit) {
        prevEditBtn.click();
    }

    saveOverlay.classList.add("hidden");
}