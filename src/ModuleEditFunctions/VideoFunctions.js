//maybe make this make question? and do hidden
function showQuestion(question, options, parent, elID) {
    parent.innerHTML = "";
    // Create a form element
    const questionDiv = document.createElement('div');

    // Create a question at the top; need question arg
    const header = document.createElement('h3');
    header.textContent = question;
    questionDiv.appendChild(header);

    // Create the fieldset element
    const fieldset = document.createElement('fieldset');

    // Create the legend (for screen readers)
    const legend = document.createElement('legend');
    legend.classList.add('sr-only');
    legend.textContent = "Desc for screenreaders";
    fieldset.appendChild(legend);

    // Loop through the options to generate the radio buttons
    let i = 0;
    options.forEach(option => {
      const div = document.createElement('div');
      div.classList.add('flex', 'items-center', 'mb-4');

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `${question}-${elID}`;
      input.id = `${question}-${elID}-option-${i}`;
      input.value = option;
      input.classList.add('w-4', 'h-4', 'border-gray-300', 'focus:ring-2', 'focus:ring-blue-300', 'dark:focus:ring-blue-600', 'dark:bg-gray-700', 'dark:border-gray-600');
      

      const label = document.createElement('label');
      label.htmlFor = `${question}-${elID}-option-${i}`;
      label.classList.add('block', 'ms-2', 'text-sm', 'font-medium', 'text-black-900', 'dark:text-black-300');
      label.textContent = option;

      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
      i += 1;
    });

    // Append the fieldset to the form
    questionDiv.appendChild(fieldset);
    parent.appendChild(questionDiv);
    parent.classList.remove("hidden");
}

//add warning, insert file first
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
      inputBox.placeholder = `Enter the question information in this format:
        This is a question?, This is the answer. Other option 1, Other option 2, Other option 3.`; //think about answer format
      inputBox.classList.add('pause-question-input');  
      inputBox.size = 70;    
      //needs an id; well, we have elID from the event target

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
        } else {
          console.log(inputBox.value);
          const questionInfo = inputBox.value.split(", ");
          inputBox.value = "";
          console.log(questionInfo);
          const options = questionInfo.slice(1, questionInfo.length);
        videoObj.stampList.push(
          {time: val, question: questionInfo[0], answer: questionInfo[1], allOptions: options});
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
            removeBtn.item = item;
            removeBtn.addEventListener("click", (event) => { 
              console.log(event.target);
              alert(`You clicked on ${event.target.item.time}`);
              videoObj.stampList = videoObj.stampList.filter((item) => item !== event.target.item);
              console.log(videoObj.stampList);
              removeBtn.parentElement.remove();
            });

            timestamp.append(removeBtn);
            timestamps.append(timestamp);
          });
          console.log(videoObj.stampList);
        }
      })

      pauseDataContainer.append(pTimeBox1);
      pauseDataContainer.append(inputBox);
      pauseDataContainer.append(pTimeBox1Btn);
      pauseDataContainer.append(timestamps);

        //pop-up place to add question?

      videoObj.addEventListener("timeupdate", (event) => { 
        const time = Math.floor(Number(videoObj.currentTime));
        // current time is given in seconds
        if(videoObj.stampList.some(el => el.time === time)) {
            const pauseData = videoObj.stampList.filter(item => item.time === time)[0]; //going to have to make sure times are unique
            // pause the playback
            videoObj.pause();
            
            videoObj.stampList = videoObj.stampList.filter((item) => item.time !== time ); //for admin, want it to come back, or no, don't just let them test it
            console.log(videoObj.stampList);
            showQuestion(pauseData.question, pauseData.allOptions, questionBox, elID);
        }
      });

      videoAndPauseDataContainer.append(videoObj);
      videoAndPauseDataContainer.append(pauseDataContainer);
      event.target.inField.replaceWith(videoAndPauseDataContainer);
      event.target.remove();
    } else {
      alert("Please upload a video.")
    }
}