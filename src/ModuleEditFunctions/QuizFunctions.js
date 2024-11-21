//helper function for shuffling an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

//function to give the user feedback and hints for their submission
function giveFeedbackAndHints(incorrect, questionData, submitButton, score) {
  let correct = 0;

  //go over every question
  for (let i = 0; i < questionData.length; i++){
    const qId = questionData[i].questionId;
    const question = document.getElementById(qId);
    question.classList.add("relative");
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

      const oldHintPopUp = document.getElementById(`${qId}-hint-popup`);
      if(oldHintPopUp) {
        oldHintPopUp.remove();
      }

      const hintsPopUp = document.createElement("div");
      hintsPopUp.id = `${qId}-hint-popup`;
      hintsPopUp.classList.add("hint-popup", "absolute", "top-0", "right-56");
      const header = document.createElement("h2");
      header.textContent = "Hint:";
      header.classList.add("font-bold", "italic")
      const hint = document.createElement("p");

      //give hints if there are any left for the question and the user can resubmit
      if(questionData[i].hintInfo[0] && (submitButton.subsUsed !== submitButton.maxSubs)) {
        if(questionData[i].hintInfo.length === 1){
          header.textContent = "Final Hint:"
        }
        hint.textContent = questionData[i].hintInfo[0];
        hintsPopUp.appendChild(header);
        hintsPopUp.appendChild(hint); 
        question.appendChild(hintsPopUp);
        
        questionData[i].hintInfo.splice(0, 1);
        if(questionData[i].hintInfo.length === 0) {
          submitButton.countAllHintsUsed += 1;
        }
      }
    } else {
      correct += 1;

      //remove hints
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

  //if all correct, show score and disabled submit button
  if(correct === questionData.length) {
    submitButton.disabled = "true";
    const questionForm = submitButton.parentElement;
    const scoreDisplay = document.createElement("div");
    scoreDisplay.classList.add("score-display", "absolute", "top-0", "right-16", "disabled:opacity-50", "disabled:cursor-not-allowed");
    scoreDisplay.textContent = `${Math.ceil(score)}%`;
    questionForm.appendChild(scoreDisplay);
  }

  //show score and disable submit button if all possible resubmits were used
  if(submitButton.subsUsed === submitButton.maxSubs) {
    submitButton.disabled = "true";
    const questionForm = submitButton.parentElement;
    const scoreDisplay = document.createElement("div");
    scoreDisplay.classList.add("score-display", "absolute", "top-0", "right-32");
    scoreDisplay.textContent = `${Math.ceil(score)}%`;
    questionForm.appendChild(scoreDisplay);
  }
}

//count how many the user got correct out of the total
export function gradeSubmission(event){
  const questionData = event.target.data;
  let score = 0;

  const chosenOptions = [];
  const incorrect = [];

  for (let i = 0; i < questionData.length; i++){
    const qId = questionData[i].questionId;
    const choice = document.querySelector(`input[name=${qId}]:checked`).value;
    console.log(choice);
    chosenOptions.push(choice);
  }
  
  for (let i = 0; i < questionData.length; i++){
    const answer = questionData[i].answer;
    console.log(answer);
    if(chosenOptions[i].includes(answer)) { //includes because answer is appended with letter option
      score += 1;
      incorrect.push(0); //0 means not incorrect
    } else {
      incorrect.push(1); //1 means correct
    }
  }

  score = (score/questionData.length) * 100; 
  
  console.log("score ", score);
  console.log("incorrect", incorrect); 

  //mark the questions as correct/incorrect and give hints
  event.target.subsUsed += 1;
  giveFeedbackAndHints(incorrect, questionData, event.target, score);
}

//need to style quiz (prob diff style than vid style), separators between them and box....

//function to add a question to a quiz
export function addQuestion(question, options, explanations, parent, questionId) {
    const questionDiv = document.createElement('div');
    questionDiv.id = questionId;

    // Create a question at the top
    const header = document.createElement('h3');
    header.textContent = question;
    header.classList.add("text-2xl", "question");
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
      input.name = `${questionId}`;
      input.id = `${questionId}-option-${taggedOption.id}`;
      input.value = String.fromCharCode(letter) + ". " + taggedOption.option;
      input.classList.add('w-4', 'h-4', 'border-gray-300', 'focus:ring-2', 'focus:ring-blue-300', 'dark:focus:ring-blue-600', 'dark:bg-gray-700', 'dark:border-gray-600', "question-radio");
      
      //answer is always 0
      if(taggedOption.id === 0) {
        input.quesBox = parent;
        input.answer = taggedOption.option;
        input.explain = taggedExplanations.find(ex => ex.id === taggedOption.id).explanation;
      } else {
        input.quesBox = parent;
        input.explain = taggedExplanations.find(ex => ex.id === taggedOption.id).explanation;
      }

      const label = document.createElement('label');
      label.htmlFor = `${questionId}-option-${taggedOption.id}`;
      label.classList.add('block', 'ms-2', 'font-medium', "text-xl", 'text-black-900', 'dark:text-black-300', "question-answer");
      label.textContent = String.fromCharCode(letter) + ". " + taggedOption.option;
  
      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
      letter += 1;
    });

    // Append the fieldset to the form
    questionDiv.appendChild(fieldset);
    parent.appendChild(questionDiv);
}