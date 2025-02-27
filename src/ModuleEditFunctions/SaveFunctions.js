import { postQuizData, postUnit, postVideoData, test } from "../api/api";
//import { getStorage, ref } from "firebase/storage";
//import app from "../firebaseConfig";

//const storage = getStorage();

// Create a storage reference from our storage service
//const storageRef = ref(storage);

const functionsForUserSide = ["gradeSubmission()", "timeStampWatch()"]; //I will call timestamp triggering stuff timeStampWatch()

//helper function to give user side functions to the html code
function makeFunctionalHTML(){
    
    //for quiz submission buttons
    const submitQuizBtns = document.getElementsByClassName("submit-quiz");
    Array.from(submitQuizBtns).forEach(item => { 
        item.setAttribute("onclick", functionsForUserSide[0]);
    });
}

//helper function to remove user side functions in the html code
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
function saveVideoQuizzes(unitName) {
    if(unitName.includes(" ") || unitName === "") {
        alert("Unit not saved. Must enter a unit name with no spaces");
        return;
    }
    const videoObjs = document.getElementsByClassName("video-obj");
    Array.from(videoObjs).forEach(video => {

        const data = video.stampList;
        data.forEach(item => {

            const document = {
                time: item.time,
                question: item.question,
                answer: item.answer,
                allOptions: item.allOptions,
                explanations: item.explanations,
                id: video.id,
                unitName: unitName
            }
    
            postVideoData(document);
            console.log(`saved video question: ${document.id}`)
        })
        
    })
}

//refer to questionDataContainer.questionData.push(
   // {question: questionInfo[0], answer: questionInfo[1], allOptions: options, hintInfo: hintInfo, questionId: questionId});
function saveQuizzes(unitName) {
    if(unitName.includes(" ") || unitName === "") {
        alert("Unit not saved. Must enter a unit name with no spaces");
        return;
    }
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
                quizmaxSubs: quiz.submitBtn.maxSubs,
                unitName: unitName
            }
          
            postQuizData(document); 
            console.log(`saved quiz question: ${document.id}`)
        })

    })

}

//right now, saves unit to computer...must preview to save, I think this is fine? maybe want to remove hiddens but idk; oh it also has edit and save buttons, want to hide/remove those
//as well
export async function save(){
    //test();
    //make it so necessary functions can be used by the html code
    //makeFunctionalHTML();
    //addScript(); not necessary actually
    
    const website = `<!DOCTYPE html>\n` + document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });


    //save unit data
    const unitName = document.getElementById("saved-unit-name-input").value; //enforce no empty and no spaces
    saveVideoQuizzes(unitName);
    saveQuizzes(unitName); //test, makes sure it saves with max sub change and edit on question!


    
    // Create a download link for the blob
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "unit.html"; // File name for download

    // Simulate a click on the link to trigger the download
    document.body.appendChild(a);
    a.click(); 

    // Clean up by removing the element and revoking the blob URL
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    

    //revert the page to normal so the admin can keep editing if they want
    //reverseFunctionalHTML();
    //removeScript();
}