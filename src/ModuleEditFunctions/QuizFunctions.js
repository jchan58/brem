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

//count how many the user got correct out of the total
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


//edit a question/answer
function editPart(event) { 
  
  const editButton = event.currentTarget;
  //hold onto the original thing we are editing
  const fieldToEdit = editButton.toEdit;
  //make an editing area
  const editDiv = document.createElement("div");
  editDiv.classList.add("flex");
  const editArea = document.createElement("textarea");
  editArea.classList.add("question-edit-input");
  editArea.textContent = fieldToEdit.textContent;
  const doneBtn = document.createElement("button");

  //button with function to indicate you are done editing and replace the original field with the edit area
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");
  doneBtn.addEventListener("click", () => {
    fieldToEdit.textContent = editArea.value;
    editButton.classList.remove("hidden"); 
    editButton.submitButton.disabled = false;
    editButton.submitButton.subsUsed = 0;

    editDiv.replaceWith(fieldToEdit);
  })

  //replace the original question/answer with the edit area
  editDiv.appendChild(editArea);
  editDiv.appendChild(doneBtn);
  editButton.toEdit.replaceWith(editDiv);

  editButton.classList.add("hidden");
}

//function to add a question to a quiz
export function addQuestion(question, options, explanations, parent, questionId, subBtn) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add("relative", "flex-col", "flex");
    questionDiv.id = questionId;

    // Create a question at the top
    const header = document.createElement('div');
    header.classList.add("flex", "flex-row", "justify-center");
    const quesText = document.createElement('h3');
    quesText.textContent = question;
    quesText.classList.add("text-2xl", "question");
    header.appendChild(quesText);
    questionDiv.appendChild(header);

    //add question edit and delete buttons
    const editButton = document.createElement("button");
    const editIcon = document.createElement("i");
    editIcon.classList.add("bi", "bi-pencil-square"); 
    editButton.appendChild(editIcon);
    editButton.classList.add('question-edit-btn'); 
    editButton.toEdit = quesText;
    editButton.submitButton = subBtn;
    editButton.addEventListener("click", editPart);
    header.appendChild(editButton);

    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi", "bi-trash3-fill");
    deleteButton.appendChild(deleteIcon);
    deleteButton.classList.add('trash-btn'); 
    deleteButton.classList.add("absolute");
    deleteButton.classList.add("top-1", "right-5");
    deleteButton.addEventListener("click", () => {
      questionDiv.remove();
      subBtn.data = subBtn.data.filter((item) => item.questionId !== questionId);
      const questionDataContainer = document.getElementById(`question-data-container-${subBtn.elID}`);
      questionDataContainer.questionData = questionDataContainer.questionData.filter((item) => item.questionId !== questionId); 
    })
    questionDiv.appendChild(deleteButton); 
    

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
      label.classList.add('block', 'ms-2', 'font-medium', "text-xl", 'text-black-900', 'dark:text-black-300', "question-answer", "flex", "flex-row");
      label.textContent = String.fromCharCode(letter) + ". " + taggedOption.option;
      
      div.appendChild(input);
      div.appendChild(label);

      //give the ability to edit answers
      const editButton = document.createElement("button");
      const editIcon = document.createElement("i");
      editIcon.classList.add("bi", "bi-pencil-square"); 
      editButton.appendChild(editIcon);
      editButton.classList.add('answer-edit-btn'); 
      editButton.toEdit = label;
      editButton.questionId = questionId;
      editButton.taggedOptionId = taggedOption.id;
      editButton.addEventListener("click", (event) => {  event.stopPropagation();event.preventDefault(); editPart(event)});
      editButton.submitButton = subBtn;
      div.appendChild(editButton);

      fieldset.appendChild(div);
      letter += 1;
    });

    // Append the fieldset to the form and append the question to the element holding the questions
    questionDiv.appendChild(fieldset);
    parent.appendChild(questionDiv);
}