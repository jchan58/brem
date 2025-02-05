import { postUnit } from "../api/api";
import { getStorage, ref } from "firebase/storage";
import app from "../firebaseConfig";

const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);

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
function addScript() { //only works if the js file is in the same place as the html folder!!
    // Create a script element
    const scriptElement = document.createElement("script");
    scriptElement.id = "user-side-function-script";
    scriptElement.type = "text/javascript";
    scriptElement.setAttribute("src", "./test_delta.js");

    document.head.appendChild(scriptElement);
}

//helper function to remove the added script element from the body
function removeScript() {
    const scriptElement = document.getElementById("user-side-function-script");
    scriptElement.remove();
}


//send the page as a string of html to the server
async function send(content) {
    /*
    try {
        await client.connect(); 
        const unit_pages_db = client.db("unit_pages");
        const unitsCollection = unit_pages_db.collection("units");

        const page = {
            content
        }

        let result = await unitsCollection.insertOne(page);
        console.log(`Successfully inserted document: ${result.insertedId}`);
    } catch (err){
        console.log(`Error inserting document: ${err} `);
    } finally {
        await client.close();
    }*/
   try {
    let results = await fetch(`http://localhost:5050/posts/`).then(resp => resp.json()); //testing out mongodb stuff, will change to more like smth above; issue
    console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
}


//cannot save files to local computer, will send it to server, just want to see what the file looks like...I think it will work?
export async function save(){

    //make it so necessary functions can be used by the html code
    makeFunctionalHTML();
    addScript();
    
    const website = document.getElementsByTagName("html")[0].innerHTML;

    console.log('saving...')
    // Create a blob with the inner HTML content
    const blob = new Blob([website], { type: "text/html" });

    const unitFile = new File([blob], "unit_file_test.html", {type: "text/html"}); 
    const fileRef = ref(storage, 'units/unit_file_test.html'); //write this to the database along with the unit name

    //const blobBytes = await blob.bytes();
    //const htmlString = await blob.text();
    //console.log(typeof(htmlString));

    //console.log(blobBytes); may need to save links here and then use file system to pull...

    /*
    let base64String;
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
        base64String = reader.result;
    }
    console.log('Base64 String - ', base64String);
    postUnit(base64String);*/

    //this is bad, need to store files on a file server... but not cheap...will need to do for images, but maybe for html better this way?
    //wait, can use mongo gridfs for blobs... idk do this instead...
    //use ceph?

    /*
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
    */
    console.log(`saved at ${fileRef}`);
    //this works! it was saved at gs://deltaproject-2025.firebasestorage.app/units/unit_file_test.html(personal account and other account)
    //but why can't I look at it in firebase? also...this file arrangement is bad (app with frontend, but I am guessing Joey will set it up)
    //there probably is a function for looking at it

    //revert the page to normal so the admin can keep editing if they want
    reverseFunctionalHTML();
    removeScript();
}