import { getFiles, postQuizData, postUnit, postVideoData, test } from "../api/api";
import { createDriveFolder, fetchDriveFolders, uploadFileToFolder, uploadLargeFileToFolder, uploadLargerFileToFolder } from "../googleDriveService";


//AWS storage imports
import { Storage } from 'aws-amplify';


const functionsForUserSide = ["gradeSubmission()", "timeStampWatch()"]; //I will call timestamp triggering stuff timeStampWatch()

//helper function to insert student user side functions into the html code
function makeFunctionalHTML(){
    
    //for quiz submission buttons
    const submitQuizBtns = document.getElementsByClassName("submit-quiz");
    Array.from(submitQuizBtns).forEach(item => { 
        item.setAttribute("onclick", functionsForUserSide[0]);
    });
}

//helper function to remove user side functions from the html code
function reverseFunctionalHTML(){
    //for quiz submission buttons
    const submitQuizBtns = document.getElementsByClassName("submit-quiz");
    Array.from(submitQuizBtns).forEach(item => { 
        item.removeAttribute("onclick");
    });
}

//helper function to add script element to body so that user side functions can be accessed by the html from another file
function addScript() { //only works if the js file is in the same place as the html folder!! don't think I need since unitpage is in the same place as everything now...
    // Create a script element
    const scriptElement = document.createElement("script");
    scriptElement.id = "user-side-function-script";
    scriptElement.type = "text/javascript";
    scriptElement.setAttribute("src", "./UserSideFunctions.js"); //give the html page access to the user side functions, maybe not necessary bc unit page is written to here?

    document.head.appendChild(scriptElement);
}

//helper function to remove the added script element from the body
function removeScript() {
    const scriptElement = document.getElementById("user-side-function-script");
    scriptElement.remove();
}


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
                //vidLocation: videoLocation
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

//upload files, so far: images and PDFs
function uploadFiles() {
    const imageAndPDFEmbeds = document.getElementsByClassName("file-embed");
    Array.from(imageAndPDFEmbeds).forEach(doc => {
        const filename = doc.file_name;
        const file = document.getElementById(doc.id).files[0];
        Storage.put(filename, file).then(resp => {
            console.log(resp);
        }).catch(err => { 
            console.log(err);
        });
    })
}

//note for MongoDB to connect, must add IP address to Network Access in Mongo
export async function save(){ //require preview mode to save or auto do?
    //test();
    //make it so necessary functions can be used by the html code
    //makeFunctionalHTML();
    //addScript(); not necessary actually

    uploadFiles(); 

    /*testing file upload
    hidePreviewAndSave();
    
    
    //FOR STUDENT DEMO
    //convertURLS();

    
    const website = `<!DOCTYPE html>\n` + document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });
   

    //save unit data
    const unitName = document.getElementById("saved-unit-name-input").value; 

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
    await postUnit(htmlFile, moduleName);
    await saveVideoQuizzes(unitName);
    await saveQuizzes(unitName); //test, makes sure it saves with max sub change and edit on question!


    //save for demo
    // Create a download link for the blob
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${unitName}.html`; // File name for download

    // Simulate a click on the link to trigger the download
    document.body.appendChild(a);
    a.click(); 



    console.log("saved")

    

    //revert the page to normal so the admin can keep editing if they want
    //reverseFunctionalHTML();
    //removeScript();
    //unconvertURLS(); FOR STUDENT DEMO
    revertPreviewAndSave();*/



}