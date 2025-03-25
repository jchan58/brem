import { getQuizData, getVideoData } from "../api/api";
import { addQuestion } from "./QuizFunctions";


//helper function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//quiz
//questionData will need to come from the database...
//how to get? data and question will be together, and have ID according to the unit page...; ID needs to have elID bc some units may have many quizzes
export function gradeSubmission(event, questionData){
  console.log(questionData);
  console.log(event.target.id);
  let score = 0;

  const chosenOptions = [];
  const incorrect = [];

  for (let i = 0; i < questionData.length; i++){
    const qId = questionData[i].id;
    const checkedInput = document.querySelector(`input[name=${qId}]:checked`);
    if(!checkedInput){
      alert("Must answer all questions before submitting");
      return;
    }
    const choice = checkedInput.value;
    chosenOptions.push(choice);
  }

  console.log(chosenOptions);
  
  for (let i = 0; i < questionData.length; i++){
    const answer = questionData[i].answer;
 
    if(chosenOptions[i].includes(answer)) { //includes because answer is appended with letter option
      score += 1;
      incorrect.push(0); //0 means not incorrect
    } else {
      incorrect.push(1); //1 means correct
    }
  }

  score = (score/questionData.length) * 100; 

  //go into function to mark the questions as correct/incorrect and give hints
  event.target.subsUsed += 1;
  giveFeedbackAndHints(incorrect, questionData, event.target, score);
}

//need to get elID that matches the questionID from database; will need to get qID from database
//function to give the user feedback and hints for their submission
function giveFeedbackAndHints(incorrect, questionData, submitButton, score) {
    let correct = 0;
  
    //go over every question
    for (let i = 0; i < questionData.length; i++){
      
      const qId = questionData[i].id;
      //console.log(`qId: ${questionData[i].questionId}`);
      const question = document.getElementById(qId);
      question.classList.add("relative");
  
      //remove old correct/incorrect question marking if it exists
      const oldMark = document.getElementById(`${qId}-mark`); 
      if(oldMark) {
        oldMark.remove();
      }
  
  
      //if a question is incorrect
      if(incorrect[i]) {
        //indicate incorrect on the question
        const mark = document.createElement("i");
        mark.id = `${qId}-mark`;
        mark.classList.add("bi", "bi-x-circle", "grade-mark-x", "absolute", "top-0", "right-3");
        question.appendChild(mark);
  
        //remove previous hint pocket if its there
        const oldHintPopUp = document.getElementById(`${qId}-hint-popup`);
        if(oldHintPopUp) {
          oldHintPopUp.remove();
        }
  
        //prepare the hint popup
        const hintsPopUp = document.createElement("div");
        hintsPopUp.id = `${qId}-hint-popup`;
        hintsPopUp.classList.add("hint-popup", "absolute", "top-0", "right-56");
        const header = document.createElement("h2");
        header.textContent = "Hint:";
        header.classList.add("font-bold", "italic")
        const hint = document.createElement("p");
  
        //give hints if there are any left for the question and the user can resubmit
        console.log(submitButton.subsUsed - 1);
        console.log(questionData[i].hintInfo);
        if(questionData[i].hintInfo[submitButton.subsUsed-1] && (submitButton.subsUsed !== submitButton.maxSubs)) {
          console.log("there");
          if(submitButton.subsUsed -1 === questionData[i].hintInfo.length - 1){
            header.textContent = "Final Hint:"
          }
          hint.textContent = questionData[i].hintInfo[submitButton.subsUsed-1];
          hintsPopUp.appendChild(header);
          hintsPopUp.appendChild(hint); 
          question.appendChild(hintsPopUp);
          
        }
      } else {
        correct += 1;
  
        //remove old hints
        const oldHintPopUp = document.getElementById(`${qId}-hint-popup`);
        if(oldHintPopUp) {
          oldHintPopUp.remove();
        }
  
        //indicate correct on the question
        const mark = document.createElement("i");
        mark.id = `${qId}-mark`
        mark.classList.add("bi", "bi-check-circle", "grade-mark-check", "absolute", "top-0", "right-3");
        question.appendChild(mark);
      }
    }
  
    //if all correct, show score and disable submit button
    if(correct === questionData.length) {
  
      //remove old score display
      const oldScoreDisplay = document.getElementById(`score-display-${submitButton.elId}`);
      if(oldScoreDisplay){
        oldScoreDisplay.remove();
      }
  
      submitButton.disabled = "true";
      const questionForm = submitButton.parentElement;
      const scoreDisplay = document.createElement("div");
      scoreDisplay.id = `score-display-${submitButton.elId}`;
      scoreDisplay.classList.add("score-display", "absolute", "top-0", "right-16", "disabled:opacity-50", "disabled:cursor-not-allowed");
      scoreDisplay.textContent = `${Math.ceil(score)}%`;
      questionForm.appendChild(scoreDisplay);
    }
  
    //show score and disable submit button if all possible resubmits were used
    if(submitButton.subsUsed === submitButton.maxSubs && correct !==questionData.length) {
  
      //remove old score display
      const oldScoreDisplay = document.getElementById(`score-display-${submitButton.elId}`);
      if(oldScoreDisplay){
        oldScoreDisplay.remove();
      }
      submitButton.disabled = "true";
      const questionForm = submitButton.parentElement;
      const scoreDisplay = document.createElement("div");
      scoreDisplay.id = `score-display-${submitButton.elId}`;
      scoreDisplay.classList.add("score-display", "absolute", "top-0", "right-16");
      scoreDisplay.textContent = `${Math.ceil(score)}%`;
      questionForm.appendChild(scoreDisplay);
    }
}



export async function equipQuizzes(unit_name) { 
  
  //const quizzes = document.getElementsByClassName("question-data-container"); //quizzes are represented by question data containers
  const questionSets = document.getElementsByClassName("questions-container"); //quizzes are questionSets
  if(questionSets.length === 0) {
    return; //no quizzes to equip
  }
  const quizData = await getQuizData(unit_name); 

  const subsEquipped = [];

  quizData.forEach(data => {
    console.log("data.id", data.id);

    const parsedQuizId = data.id.split("-");
    const numElId = parsedQuizId[1]; //get numeric part of the quiz's id; should be element id I think...changed from last element
    const subBtnId = `submit-quiz-${numElId}`;
    
    if(!(subBtnId in subsEquipped)) { //only do this once per sub button
      const subBtn = document.getElementById(subBtnId); //get the quizzes' submission button
      //console.log("sub btn", subBtnId);
      //console.log(`max subs: ${data.quizMaxSubs}`) //change cap to quizMaxSubs later...
      subBtn.subsUsed = 0;
      subBtn.maxSubs = data.quizMaxSubs;
      const specificQuizData = quizData.filter((specData) => specData.id === data.id);
      subBtn.addEventListener("click", (event) => {gradeSubmission(event, specificQuizData)});
      subsEquipped.push(subBtnId);
    }
    
  });

}

//image
//run this function in the file...
function revealHideCaption(event) {
    const capImgList = [];
    const captionedImages = document.getElementsByClassName("caption-image");
    capImgList.push(...captionedImages);

    const caption = ""; //will be getting from the id from the db
    capImgList.forEach(img => {
        img.addEventListener("click", () => {
            if(!caption.classList.contains("hidden")) { //will need to start hidden for users
              caption.classList.add("hidden");
            } else {
              caption.classList.remove("hidden");
            }
        });
    });
}

//video
export async function equipVideos(unit_name) {
  const videoObjList = [];
  const videoObjs = document.getElementsByClassName("video-obj");
  videoObjList.push(...videoObjs);

  if(videoObjList.length === 0) { //no videos to equip
    return;
  }

  const unitVideoData = await getVideoData(unit_name); 

  videoObjList.forEach(videoObj => {
    videoObj.stampList = []; //get this of pause timestamps list from database
    
    unitVideoData.forEach(document => {
      if(document.id === videoObj.id) {
        videoObj.stampList.push(document);
        //not working const source = videoObj.getElementsByTagName('source'); 
        //source.src = document.vidLocation;
      }

      
    });

    console.log(videoObj.stampList);

    //as time passes, check for a timestamp
    videoObj.addEventListener("timeupdate", (event) => { 
      const time = Math.floor(Number(videoObj.currentTime));
      // current time is given in seconds
      if(videoObj.stampList.some(el => el.time === time)) {
          const pauseData = videoObj.stampList.filter(item => item.time === time)[0]; //going to have to make sure times are unique; maybe use database to enforce? (mongoose?)
          // pause the playback
          videoObj.pause();

          console.log(document.id)
          videoObj.stampList = videoObj.stampList.filter((item) => item.time !== time ); //remove the timestamp so the user can go back through the video without getting the question again
          showQuestion(pauseData.question, pauseData.allOptions, pauseData.explanations, pauseData.id, videoObj); //these pauseData stuff will come from database...working on it...
          //use document.id (videoObj id as elID, wil still work)
      }
    });
  });
  console.log("videos equipped");
}

export function equipImages() {
  const captionedImages = document.getElementsByClassName("caption-image");
  Array.from(captionedImages).forEach((image) => {
      const imageId = image.id;
      const captionId = `${imageId}-caption`;
      const caption = document.getElementById(captionId);
      caption.classList.add("hidden");
      image.addEventListener("click", () => {
        if(!caption.classList.contains("hidden")) { 
          caption.classList.add("hidden");
        } else {
          caption.classList.remove("hidden");
        }
    });
    }
  )

}




//function to show the question on the video
function showQuestion(question, options, explanations, vidID, video) {
  const parsedVidID = vidID.split("-");
  const elID = parsedVidID[parsedVidID.length - 1];
  const parent = document.getElementById(`question-box-${elID}`); 
  parent.innerHTML = "";
  
  const popUp = document.createElement("div");
  popUp.classList.add("question-popup", "absolute", "hidden", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2");
  parent.appendChild(popUp);
  // Create a form element
  const questionDiv = document.createElement('div');

  // Create a question at the top
  const header = document.createElement('h3');
  header.textContent = question;
  header.classList.add("text-2xl");
  questionDiv.appendChild(header);

  // Create the fieldset element
  const fieldset = document.createElement('fieldset');

  // Create the legend (for screen readers)
  const legend = document.createElement('legend');
  legend.classList.add('sr-only');
  legend.textContent = "Desc for screenreaders";
  fieldset.appendChild(legend);

  //randomize the options and explanations but keep track of their ids
  let i = 0;
  const taggedOptions = [];
  const taggedExplanations = [];
  options.forEach(option => {
    taggedOptions.push({id: i, option: option})
    taggedExplanations.push({id: i, explanation: explanations[i]})
    i++;
  });

  shuffleArray(taggedOptions);
  // Loop through the options to generate the radio buttons
  let letter = 65;
  taggedOptions.forEach(taggedOption => {
    const div = document.createElement('div');
    div.classList.add('flex', 'items-center', 'mb-4');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `${question}-${elID}`;
    input.id = `${question}-${elID}-option-${taggedOption.id}`;
    input.value = String.fromCharCode(letter) + ". " + taggedOption.option;
    input.classList.add('w-4', 'h-4', 'border-gray-300', 'focus:ring-2', 'focus:ring-blue-300', 'dark:focus:ring-blue-600', 'dark:bg-gray-700', 'dark:border-gray-600', "vid-question-radio");
    
    //answer is always 0
    if(taggedOption.id === 0) {
      input.video = video;
      input.quesBox = parent;
      input.answer = taggedOption.option;
      input.explain = taggedExplanations.find(ex => ex.id === taggedOption.id).explanation;
      input.addEventListener("click", correctAnswerPopUp);
    } else {
      input.quesBox = parent;
      input.explain = taggedExplanations.find(ex => ex.id === taggedOption.id).explanation;
      input.addEventListener("click", incorrectAnswerPopUp);
    }

    const label = document.createElement('label');
    label.htmlFor = `${question}-${elID}-option-${taggedOption.id}`;
    label.classList.add('block', 'ms-2', 'font-medium', "text-xl", 'text-black-900', 'dark:text-black-300');
    label.textContent = String.fromCharCode(letter) + ". " + taggedOption.option;

    div.appendChild(input);
    div.appendChild(label);
    fieldset.appendChild(div);
    letter += 1;
  });

  video.classList.add("pointer-events-none");
  // Append the fieldset to the form
  questionDiv.appendChild(fieldset);
  parent.appendChild(questionDiv);
  parent.classList.remove("hidden");
}


//correct answer popup activity
function correctAnswerPopUp(event) {
  const radios =  document.getElementsByName(event.target.name);
  radios.forEach(item => item.disabled = true);
  const popUp = event.target.quesBox.children[0];
  popUp.innerHTML = "";
  const header = document.createElement('h3');
  header.textContent = "Correct!";
  header.classList.add("font-bold", "text-xl");
  const explainText = document.createElement("p");
  explainText.textContent = event.target.explain;

  const correctText = document.createElement("p");
  correctText.textContent = event.target.answer;

  const continueButton = document.createElement("button");
  continueButton.classList.add("continue-btn", "absolute", "right-1", "bottom-1");
  continueButton.innerText = "Continue";
  continueButton.parent = popUp;
  continueButton.video = event.target.video;
  continueButton.addEventListener("click", handleCorrectAnswer);

  popUp.appendChild(header);
  popUp.appendChild(correctText);
  popUp.appendChild(explainText);
  popUp.appendChild(continueButton);
  popUp.classList.remove("hidden");
}

//wrong answer popup activity
function incorrectAnswerPopUp(event) {
  const radios =  document.getElementsByName(event.target.name);
  radios.forEach(item => item.disabled = true);
  const popUp = event.target.quesBox.children[0];
  popUp.innerHTML = "";
  const header = document.createElement('h3');
  header.textContent = "Incorrect";
  header.classList.add("font-bold", "text-xl")

  const explainText = document.createElement("p");
  explainText.textContent = event.target.explain;

  const retryButton = document.createElement("button");
  retryButton.classList.add("retry-btn", "absolute", "right-1", "bottom-1");
  retryButton.innerText = "Try Again";
  retryButton.parent = popUp;
  retryButton.video = event.target.video;
  retryButton.radioGroup = event.target.name;
  retryButton.addEventListener("click", handleWrongAnswer);

  popUp.appendChild(header);
  popUp.appendChild(explainText);
  popUp.appendChild(retryButton);
  popUp.classList.remove("hidden");
}

//when the user is correct, play the video and make it clickable
function handleCorrectAnswer(event) {
  event.target.parent.classList.add("hidden");
  event.target.parent.parentElement.classList.add("hidden");
  event.target.video.play();
  event.target.video.classList.remove("pointer-events-none");
}

//when the answer is wrong, renablethe options so the user can try again, and hide the popup
function handleWrongAnswer(event) {
  const radios =  document.getElementsByName(event.target.radioGroup);
  radios.forEach(item => item.disabled = false);
  event.target.parent.classList.add("hidden");
}