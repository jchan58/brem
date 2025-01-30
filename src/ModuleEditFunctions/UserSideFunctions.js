//quiz
//count how many the user got correct out of the total

//questionData will need to come from the database...
//how to get? data and question will be together, and have ID according to the unit page...; ID needs to have elID bc some units may have many quizzes
export function gradeSubmission(event){
  const questionData = event.target.data;
  let score = 0;

  const chosenOptions = [];
  const incorrect = [];

  for (let i = 0; i < questionData.length; i++){
    const qId = questionData[i].questionId;
    const checkedInput = document.querySelector(`input[name=${qId}]:checked`);
    if(!checkedInput){
      alert("Must answer all questions before submitting");
      return;
    }
    const choice = checkedInput.value;
    chosenOptions.push(choice);
  }
  
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
    const submitBtn = document.getElementById(`submit-btn-${elID}`);

    let correct = 0;
  
    //go over every question
    for (let i = 0; i < questionData.length; i++){
      
      const qId = questionData[i].questionId;
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

//image
//run this function in the file...
function revealHideCaption(event) {
    const capImgList = [];
    const captionedImages = document.getElementsByClassName("caption-image");
    capImgList.push(...captionedImages);

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
//function to show the question on the video
function showQuestion(question, options, explanations, video) {
  const parent = document.getElementById(`question-box-${elID}`); //again, will need to save elID with everything in the database and get it
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