//helper function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
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

//function to show the question on the video
function showQuestion(question, options, explanations, parent, elID, video) {
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

//allow admin to restore passed or otherwise deleted timestamps
function restoreTimeStampList(event){
  const videoObj = event.target.videoOb;
  videoObj.stampList = event.target.backUpList;
  const timestamps = event.target.timestamps;
  timestamps.innerHTML = "";
  event.target.videoOb.stampList.forEach(item => {
    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.classList.add("outline", "outline-black", "outline-2","rounded", "shadow-lg");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn")
    // Set the button text content
    removeBtn.textContent = "-";
    timestamp.innerText = item.time;
    timestamp.value = item.time;
    removeBtn.item = item;
    removeBtn.addEventListener("click", (event) => { 
      alert(`You clicked on ${event.target.item.time}`);
      videoObj.stampList = videoObj.stampList.filter((item) => item !== event.target.item);
      removeBtn.parentElement.remove();
    });

    timestamp.append(removeBtn);
    timestamps.append(timestamp);
  });
}

//reverse insertion of video
export function hideVideo(event) {
  if(event.currentTarget.insertBtn.inserted) {
    const element = event.currentTarget.parent;
    element.innerHTML = "";
    element.appendChild(event.currentTarget.inputField); 
    element.appendChild(event.currentTarget.insertBtn); 
    element.appendChild(event.currentTarget.elBtns);
    event.currentTarget.insertBtn.inserted = false;
  }
}

//insert video into page
export function displayVideo(event) {
    const elID = event.target.elID;

    let file;
    if(event.target.files) {
      file = event.target.files[0];
    }
    if (file) {
      const videoAndPauseDataContainer = document.createElement("div");
      videoAndPauseDataContainer.classList.add("flex", "relative");
      videoAndPauseDataContainer.classList.add("flex-row");
      videoAndPauseDataContainer.classList.add("space-x-20");

      //create questionbox object (will start hidden)
      const questionBox = document.createElement("div");
      questionBox.classList.add("question-box", "hidden", "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2");
      
      videoAndPauseDataContainer.append(questionBox);
      //create video object
      const fileURL = URL.createObjectURL(file);
      const videoObj = document.createElement("video");
      videoObj.width = "700";
      videoObj.setAttribute("controls", "true"); 
      const source = document.createElement("source");
      source.src = fileURL;
      source.type = file.type;
      videoObj.stampList = [];
      videoObj.backUpStampList = [];
      videoObj.append(source);


      const pauseDataContainer = document.createElement("div");
      pauseDataContainer.classList.add("pause-data-container");
      pauseDataContainer.classList.add("flex", "flex-col", "gap-2");

      //input box for pause times
      const pTimeBox1 = document.createElement("input");
      pTimeBox1.placeholder = "Enter a timestamp (seconds)";
      pTimeBox1.style.width = "200px";
      pTimeBox1.style.height = "30px";
      pTimeBox1.classList.add("outline", "outline-black", "outline-2");
      pauseDataContainer.append(pTimeBox1);
      pTimeBox1.classList.add("m-100");

      //input box for pause Question and Answer
      const inputBox = document.createElement("textarea");
      inputBox.placeholder = `Enter the question information in this format: This is a question?!!!This is the answer.!!!Other option 1.!!!Other option 2.!!!Other option 3`; 
      inputBox.classList.add('pause-question-input');  
    

      const explainBox = document.createElement("textarea");
      explainBox.placeholder = `Enter explanations for the answer options in this format: Explanation for answer 1!!!Explanation for answer 2!!!Explanation for answer 3!!!Explanation for answer 4`;
      explainBox.classList.add('explanation-input');
      

      //button to add pause times
      const pTimeBox1Btn = document.createElement("button");
      pTimeBox1Btn.innerText = "Add Pause Timestamp";
      pTimeBox1Btn.classList.add("outline", "outline-black", "outline-1", "pause-time-box-button");
      pTimeBox1Btn.height = 50;
      pTimeBox1Btn.width = 50;
      pTimeBox1Btn.classList.add("p-4");

      //hold all timestamps
      const timestamps = document.createElement("div");
      timestamps.classList.add("timestamps");

      //add a timestamp to the timestamps
      pTimeBox1Btn.addEventListener("click", (event) =>{
        const val = Number(pTimeBox1.value.trim());
        if(isNaN(val) || val > videoObj.duration) {
          alert(`Please enter a number shorter than the video duration.`);
        } else if( inputBox.value === "") {
          alert(`Please enter a question before adding a timestamp.`);
        } else if (!inputBox.value.includes("!!!")){
          alert(`Please enter at least one answer to the question before adding a timestamp.`);
        } else {
          const existing_time = videoObj.stampList.filter((item) => item.time === val);
          if(existing_time.length !== 0) {
            alert(`Please enter unique timestamps (timestamp already exists).`);
          } else {
            const questionInfo = inputBox.value.split("!!!");
            inputBox.value = "";
            
            const explainInfo = explainBox.value.split("!!!");
            explainBox.value  = "";

            const options = questionInfo.slice(1, questionInfo.length);
            if(options.length > 26) { 
              options.splice(26, options.length - 26);
              console.log(options);
              alert("Limit hit. Only 26 answer options saved.");
            }
            videoObj.stampList.push(
              {time: val, question: questionInfo[0], answer: questionInfo[1], allOptions: options, explanations: explainInfo});
            videoObj.backUpStampList.push(
              {time: val, question: questionInfo[0], answer: questionInfo[1], allOptions: options, explanations: explainInfo});
            
              console.log(videoObj.stampList);
            pTimeBox1.value = "";
            timestamps.innerHTML = "";
            // Iterate over the list of items
            videoObj.stampList.forEach(item => {
              const timestamp = document.createElement("div");
              timestamp.classList.add("timestamp");
              timestamp.classList.add("outline", "outline-black", "outline-2","rounded", "shadow-lg");

              const removeBtn = document.createElement("button");
              removeBtn.classList.add("remove-btn")
              // Set the button text content
              removeBtn.textContent = "-";
              timestamp.innerText = item.time;
              timestamp.value = item.time;
              removeBtn.item = item;
              removeBtn.addEventListener("click", (event) => { 
                alert(`You clicked on ${event.target.item.time}`);
                videoObj.stampList = videoObj.stampList.filter((item) => item !== event.target.item);
                removeBtn.parentElement.remove();
              });

              timestamp.append(removeBtn);
              timestamps.append(timestamp);
            });
            console.log(videoObj.stampList);
          }
        }
      })

      const resTimestampsBtn = document.createElement("button");
      resTimestampsBtn.innerText = "Restore All Timestamps";
      resTimestampsBtn.classList.add("outline", "outline-black", "outline-1", "restore-times-btn");

      resTimestampsBtn.classList.add("p-4");
      resTimestampsBtn.videoOb = videoObj;
      resTimestampsBtn.backUpList = videoObj.backUpStampList;
      resTimestampsBtn.timestamps = timestamps;
      resTimestampsBtn.addEventListener("click", restoreTimeStampList);
      
      pauseDataContainer.append(pTimeBox1);
      pauseDataContainer.append(inputBox);
      pauseDataContainer.append(explainBox);
      pauseDataContainer.append(pTimeBox1Btn);
      pauseDataContainer.append(resTimestampsBtn);
      pauseDataContainer.append(timestamps);

      //as time passes, check for a timestamp
      videoObj.addEventListener("timeupdate", (event) => { 
        const time = Math.floor(Number(videoObj.currentTime));
        // current time is given in seconds
        if(videoObj.stampList.some(el => el.time === time)) {
            const pauseData = videoObj.stampList.filter(item => item.time === time)[0]; //going to have to make sure times are unique
            // pause the playback
            videoObj.pause();
            const tstamps = document.getElementsByClassName("timestamp");
            Array.from(tstamps).forEach(timestamp => {
              if(Number(timestamp.value) === time) {
                timestamp.remove();
              }
            });
            videoObj.stampList = videoObj.stampList.filter((item) => item.time !== time ); //remove the timestamp so the user can go back through the video without getting the question again
            showQuestion(pauseData.question, pauseData.allOptions, pauseData.explanations, questionBox, elID, videoObj);
        }
      });

      videoAndPauseDataContainer.append(videoObj);
      videoAndPauseDataContainer.append(pauseDataContainer);
      event.target.inField.replaceWith(videoAndPauseDataContainer);
      event.target.inserted = true;
      event.target.remove();
    } else {
      alert("Please upload a video.")
    }
}