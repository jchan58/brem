
const functionsForUserSide = ["gradeSubmission()", "timeStampWatch()"]; //I will call timestamp triggering stuff timeStampWatch()

//helper function to give user side functions to the html code
function makeFunctionalHTML(){
    
    //for quiz submission buttons
    const submitQuizBtns = document.getElementsByClassName("submit-quiz");
    Array.from(submitQuizBtns).forEach(item => { 
        item.setAttribute("onclick", functionsForUserSide[0]);
    });
}

//helper function to remove user side functions to the html code
function reverseFunctionalHTML(){
    //for quiz submission buttons
    const submitQuizBtns = document.getElementsByClassName("submit-quiz");
    Array.from(submitQuizBtns).forEach(item => { 
        item.removeAttribute("onclick");
    });
}

//helper function to add script element to body so that user side functions can be accessed by the html from another file
function addScript() { //only works if the js file is in the same place as the html folder!!
    // Create a script element
    const scriptElement = document.createElement("script");
    scriptElement.id = "user-side-function-script";
    scriptElement.type = "text/javascript";
    scriptElement.setAttribute("src", "./test_delta.js");

    document.head.appendChild(scriptElement);
}

//helper function to remove the added script element to the body
function removeScript() {
    const scriptElement = document.getElementById("user-side-function-script");
    scriptElement.remove();
}


//cannot save files to local computer, will send it to server, just want to see what the file looks like...I think it will work?
export function save(){

    //make it so necessary functions can be used by the html code
    makeFunctionalHTML();
    addScript();
    
    const website = document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });

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
    
    console.log('saved');

    //revert the page to normal so the admin can keep editing if they want
    reverseFunctionalHTML();
    removeScript();
}