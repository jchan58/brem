import React, { useRef, useEffect, useState } from 'react';
import '../style/ModuleEdit.css';

const ModuleEdit = () => {
  
  function changeFontStyle(event) {
    event.preventDefault(); //prevent change movement
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[1];
    if(event.target.textContent === "Bold") {
      changeTarget.classList.remove("italic");
      changeTarget.classList.remove("font-bold");

      changeTarget.classList.add("font-bold");
    } else if (event.target.textContent === "Italics") {
      changeTarget.classList.remove("italic");
      changeTarget.classList.remove("font-bold");

      changeTarget.classList.add("italic");
    } else if (event.target.textContent === "Bold/Italic") {
      changeTarget.classList.remove("italic");
      changeTarget.classList.remove("font-bold");

      changeTarget.classList.add("font-bold");
      changeTarget.classList.add("italic");
    } else {
      changeTarget.classList.remove("italic");
      changeTarget.classList.remove("font-bold");
    }
  }

  function changeFontSize(event) {
    event.preventDefault();
    const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"];
    
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[1];
    
    for(let i = 0; i < sizes.length; i++) {
      changeTarget.classList.remove(sizes[changeTarget.size]);
    }

    if(event.target.textContent === "+") {
      changeTarget.size += 1;
      if(changeTarget.size >= sizes.length) {
        changeTarget.size = sizes.length - 1;
      }
      changeTarget.classList.add(sizes[changeTarget.size]);
    } else {
      changeTarget.size -= 1;
      if(changeTarget.size < 0) {
        changeTarget.size = 0;
      }
      changeTarget.classList.add(sizes[changeTarget.size]);
    }

  }

  function changeTextPosition(event) {
    event.preventDefault();
    const pos = ["left-1/2", "right-0"];
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[1];

    for(let i = 0; i < pos.length; i++) {
      changeTarget.classList.remove(pos[i]);
    }

    if(event.target.textContent === "Center") {
      changeTarget.classList.add(pos[0]);
    } else if (event.target.textContent === "Right"){
      changeTarget.classList.add(pos[1]);
    }
    
  }

  function changeImageSize(event) {
    event.preventDefault();
    const imageEmbed = event.target.dropdownContainer.parentElement.parentElement.children[0];

    console.log(imageEmbed)
    if(event.target.textContent === "Shrink-Width") {
      if(imageEmbed.width >= 40) {
        imageEmbed.width -= 20;      }
    } else if (event.target.textContent === "Shrink-Height") {
      if(imageEmbed.height >= 100) {

        imageEmbed.height -= 40;
      }
    } else if (event.target.textContent === "Enlarge-Width") {
      if(imageEmbed.width <= 500) {
        imageEmbed.width = (Number(imageEmbed.width) + 20);
      }
    } else if (event.target.textContent === "Enlarge-Height") {
      if (imageEmbed.height <= 600) {
        imageEmbed.height = (Number(imageEmbed.height) + 40);
      }
    }
    
  }

  //functions to turn text/link put into input box and make it permanent
  function permaText(event) {
    const insertBtn = event.target;
    if(insertBtn) {
      const inputField = document.getElementById(`input-box-for-${insertBtn.id}`);
      
      const text = document.createElement("p");
      text.size = 2;
      text.classList.add("absolute", "top-0", "left-1/2");
      text.textContent = inputField.value;
      event.target.enableDrop();
      const btnContainer = insertBtn.parentElement.parentElement;

      btnContainer.removeChild(inputField); 
      insertBtn.parentElement.removeChild(insertBtn); 
      btnContainer.classList.add("relative"); //make text's absolute relative to...this
      btnContainer.appendChild(text);      
    }
  }

  function permaLink(event) {
    const insertBtn = event.target;
    if(insertBtn) {
      const inputField = insertBtn.parentElement.children[0];
      insertBtn.parentElement.innerHTML = `<a href = "${inputField.value}">${inputField.value}</a>`; 
      
      //get rid of the box outline
      
    }
  }

  //file insert display function
  function displayFile(event) {
    const file = event.target.parentElement.children[0].files[0];
    
    if (file) {
      const fileURL = URL.createObjectURL(file);
      console.log(event.target.parentElement);
      console.log(event.target.parentElement.width);
      event.target.parentElement.innerHTML = `<embed src = "${fileURL}" class="file-embed" width="${event.target.parentElement.getBoundingClientRect().width * 0.8}" height="400" />` 
    }
  }

  //add warning, insert file first
  function displayImage(event) {
    let file;
    if(event.target.files) {
      file = event.target.files[0];
    }
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const imageEmbed = document.createElement("embed");
      imageEmbed.src = fileURL;
      imageEmbed.classList.add("file-embed");
      imageEmbed.classList.add("flex-1"); //looks different in chrome??? scrolls
      
      imageEmbed.width = 200; 
      imageEmbed.height = 300;
      
      event.target.enableDrop();
      event.target.inField.replaceWith(imageEmbed);
      event.target.remove();
    }
  }

  //add warning, insert file first
  function displayVideo(event) {
    let file;
    if(event.target.files) {
      file = event.target.files[0];
    }
    if (file) {
      const videoAndPauseDataContainer = document.createElement("div");
      videoAndPauseDataContainer.classList.add("flex");
      videoAndPauseDataContainer.classList.add("flex-row");
      //videoAndPauseDataContainer.classList.add("content-center");
      videoAndPauseDataContainer.classList.add("space-x-20");
      
      //create video object
      const fileURL = URL.createObjectURL(file);
      const videoObj = document.createElement("video");
      videoObj.width = "700";
      videoObj.setAttribute("controls", "true"); //?
      const source = document.createElement("source");
      source.src = fileURL;
      source.type = file.type;
      videoObj.stampList = [];
      videoObj.append(source);


      const pauseDataContainer = document.createElement("div");
      pauseDataContainer.classList.add("pause-data-container");

      //input box for pause times
      const pTimeBox1 = document.createElement("input");
      pTimeBox1.width = "40";
      pTimeBox1.height = "50";
      pTimeBox1.classList.add("outline", "outline-black", "outline-2");
      pauseDataContainer.append(pTimeBox1);
      pTimeBox1.classList.add("m-100");

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
      pTimeBox1Btn.addEventListener("click", () =>{
        const val = Number(pTimeBox1.value.trim());
        if(isNaN(val) || val > videoObj.duration) {
          alert(`Please enter a number shorter than the video duration.`);
        } else {
        videoObj.stampList.push(val);
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
            timestamp.innerText = item;
            removeBtn.item = item;
            removeBtn.addEventListener("click", (event) => { 
              console.log(event.target);
              alert(`You clicked on ${event.target.item}`);
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
      pauseDataContainer.append(pTimeBox1Btn);
      pauseDataContainer.append(timestamps);


      
        //pop-up place to add question?

      // test out auto pausing //work on auto pausing...
      videoObj.addEventListener("timeupdate", () => { 
       
        // current time is given in seconds
        if(videoObj.stampList.includes(Math.floor(Number(videoObj.currentTime)))) {
            // pause the playback
            videoObj.pause();
            const time = Math.floor(Number(videoObj.currentTime));
            videoObj.stampList = videoObj.stampList.filter((item) => item !== time ); //for admin, want it to come back, or no, don't just let them test it
            console.log(videoObj.stampList);
            alert(`Video paused`);
        }
      });

      videoAndPauseDataContainer.append(videoObj);
      videoAndPauseDataContainer.append(pauseDataContainer);
      //event.target.enableDrop();
      event.target.inField.replaceWith(videoAndPauseDataContainer);
      event.target.remove();
    }
  }

  //code to add a dropdown to the page
  //add insert before use message
  function createDropdown(parent, label, menuItems) {
    //create overall container
    const container = document.createElement('div');
    container.id = `${label}-type-dropdown-container`;

    // Create button element
    const button = document.createElement('button');
    button.id = `${label}-type-sel-btn`;
    let classesStr = "button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    let classes = classesStr.split(" ");
    button.classList.add(...classes);
    button.type = "button";
    button.setAttribute('data-dropdown-toggle', `${label}-type-dropdown`);
    button.innerHTML = `Change ${label.replaceAll("-", " ")} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" d="m1 1 4 4 4-4"/></svg>`;
    

    button.disabled = true; //why is this disabling other inserted elements of the same types buttons!!
    
    const enableAllButtons = () => {
        const buttons = parent.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = false);
    }

    // Create dropdown container div
    const dropdownDiv = document.createElement('div');
    dropdownDiv.id = `${label}-type-dropdown`;
    dropdownDiv.className = "dropdown z-10 hidden relative bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700";
    
    // Create unordered list element
    const ul = document.createElement('ul');
    classesStr = "py-2 text-sm text-gray-700 dark:text-gray-200";
    classes = classesStr.split(" ");
    ul.classList.add(...classes);
    ul.setAttribute('aria-labelledby', 'dropdownDefaultButton');
  
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.id = item.id;
      classesStr = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
      classes = classesStr.split(" ");
      a.classList.add(...classes);
      a.textContent = item.text;

      if(item.funcs != null) {
        for(let i = 0; i < item.funcs.length; i++) {
          a.addEventListener("click", item.funcs[i])
        }
      }

      a.parentSelBtn = button;
      a.dropdown = dropdownDiv;
      a.dropdownContainer = container;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    // Append the ul to the dropdown div
    dropdownDiv.appendChild(ul);
  
    //append the button and dropdown in a container to the parent 
    container.appendChild(button);
    container.appendChild(dropdownDiv);

    parent.enableDropdown = enableAllButtons;
    parent.appendChild(container);

  }

  //general dropdown menu logic
  function displayDropdownOptions(event) {
    const selectBtn = event.target;

    const dropdown = selectBtn.parentElement.children[1];

    if(dropdown) {
      const links = dropdown.querySelectorAll('a');
      const removes = Array.from(links).map(link => link.textContent);

      for (let i = 0; i < removes.length; i++) {
        selectBtn.classList.remove(removes[i]);
      }

      selectBtn.innerHTML = `${selectBtn.textContent} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" d="m1 1 4 4 4-4"/>
      </svg>`;
      
      
      if (dropdown.classList.contains("hidden")) {
        
        dropdown.classList.remove("hidden");
        dropdown.classList.add("shown");
      } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("shown");
      }
    }

  }

  //select on dropdown display logic, is a list item
  function displayDropdownSelection(event) {
    const targetText = event.target.textContent;
    //console.log(event.target);
    const typeSelectBtn = event.target.parentSelBtn;

    if(typeSelectBtn) {
      console.log(typeSelectBtn);
      
      typeSelectBtn.innerHTML = `${targetText} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4"/>
        </svg>`;

      //remove previous target text class
      const links = typeSelectBtn.querySelectorAll('a');
      const removes = Array.from(links).map(link => link.textContent);

      for (let i = 0; i < removes.length; i++) {
        typeSelectBtn.classList.remove(removes[i]);
      }

      typeSelectBtn.classList.add(targetText);
      
    }
  }

  //also want to get rid of module element container gap (ok sometimes?)
  //some other elements need to go away
  function previewPage() {
    const hide = [];

    const addModuleContainer = document.getElementById("add-module-container");
    hide.push(addModuleContainer);

    const insertInputButtons = document.getElementsByClassName("insert-input-btn");
    hide.push(...insertInputButtons);

    const elementBtnContainers = document.getElementsByClassName("element-btns-container");
    hide.push(...elementBtnContainers);

    const imageElBtnContainers1 = document.getElementsByClassName("image1-btns-container");
    hide.push(...imageElBtnContainers1);
    const imageElBtnContainers2 = document.getElementsByClassName("image2-btns-container");
    hide.push(...imageElBtnContainers2);
    const imageElBtnContainers3 = document.getElementsByClassName("image3-btns-container");
    hide.push(...imageElBtnContainers3);

    const pauseDataContainers = document.getElementsByClassName("pause-data-container");
    hide.push(...pauseDataContainers);

    const dropdowns = document.getElementsByClassName("dropdown"); //work?
    hide.push(...dropdowns);

    hide.forEach(item => { 
      item.classList.add("hidden");
      item.style.visibility = "hidden";
      console.log(item);
      
    });

    const elementContainers = document.getElementsByClassName("element-container");
    Array.from(elementContainers).forEach(item => {
      item.classList.remove("element-container");
      item.classList.add("added-element-container");
    })
  }

  const previewBtnRef = useRef(null);
  useEffect(() => {
    const previewBtn= previewBtnRef.current;


    if (previewBtn) {
      previewBtn.addEventListener("click", previewPage);
    }

    
  });

 

  //dropdown menu button logic
  const typeSelectBtnRef = useRef(null);
  const typeDropdownRef = useRef(null);
  
  useEffect(() => {
    const typeSelectBtn = typeSelectBtnRef.current;
    const typeDropdown = typeDropdownRef.current;

    const displayElementOptions = () => {

      //remove previous target text class and set back to default
      typeSelectBtn.classList.remove("Link");
      typeSelectBtn.classList.remove("File");
      typeSelectBtn.classList.remove("Textbox");
      typeSelectBtn.classList.remove("Quiz");

      typeSelectBtn.innerHTML = `Select Module Element Type <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" d="m1 1 4 4 4-4"/>
      </svg>`;
      
        if (typeDropdown.classList.contains("hidden")) {
            typeDropdown.classList.remove("hidden");
            typeDropdown.classList.add("shown");
        } else {
            typeDropdown.classList.add("hidden");
            typeDropdown.classList.remove("shown");
        }
    };

    if (typeSelectBtn) {
        typeSelectBtn.addEventListener("click", displayElementOptions);
    }

    // Cleanup event listener on component unmount
    return () => {
        if (typeSelectBtn) {
            typeSelectBtn.removeEventListener("click", displayElementOptions);
        }
    };
  });


  //dropdown menu selection logic
  const linkSelButtonRef = useRef(null);
  const fileSelButtonRef = useRef(null);
  const textSelButtonRef = useRef(null);
  const quizSelButtonRef = useRef(null);
  const imageSelButtonRef = useRef(null);
  const videoSelButtonRef = useRef(null);
  

  useEffect(() => {

    const typeSelectBtn = typeSelectBtnRef.current;
    const typeDropdown = typeDropdownRef.current;

    const linkSelButton = linkSelButtonRef.current;
    const fileSelButton = fileSelButtonRef.current;
    const textSelButton = textSelButtonRef.current;
    const quizSelButton = quizSelButtonRef.current;
    const imageSelButton = imageSelButtonRef.current;
    const videoSelButton = videoSelButtonRef.current;


    const displaySelectionAndClose = (clicked) => {
      const targetText = clicked.target.textContent;

      typeSelectBtn.innerHTML = `${targetText} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" d="m1 1 4 4 4-4"/>
      </svg>`;

      //remove previous target text class
      typeSelectBtn.classList.remove("Link");
      typeSelectBtn.classList.remove("File");
      typeSelectBtn.classList.remove("Textbox");
      typeSelectBtn.classList.remove("Quiz");
      typeSelectBtn.classList.remove("Image");
      typeSelectBtn.classList.remove("Video");



      typeSelectBtn.classList.add(targetText);
      
      typeDropdown.classList.add("hidden");
      typeDropdown.classList.remove("shown");
    }

    if (linkSelButton) {
      linkSelButton.addEventListener("click", displaySelectionAndClose);
    }

    if (fileSelButton) {
      fileSelButton.addEventListener("click", displaySelectionAndClose);
    }

    if (textSelButton) {
      textSelButton.addEventListener("click", displaySelectionAndClose);
    }

    if (quizSelButton) {
      quizSelButton.addEventListener("click", displaySelectionAndClose);
    }

    if (imageSelButton) {
      imageSelButton.addEventListener("click", displaySelectionAndClose);
    }

    if (videoSelButton) {
      videoSelButton.addEventListener("click", displaySelectionAndClose);
    }

  // Cleanup event listener on component unmount
  return () => {
      if (linkSelButton) {
        linkSelButton.removeEventListener("click", displaySelectionAndClose);
      }

      if (fileSelButton) {
        fileSelButton.removeEventListener("click", displaySelectionAndClose);
      }

      if (textSelButton) {
        textSelButton.removeEventListener("click", displaySelectionAndClose);
      }

      if (quizSelButton) {
        quizSelButton.removeEventListener("click", displaySelectionAndClose);
      }

      if (imageSelButton) {
        imageSelButton.removeEventListener("click", displaySelectionAndClose);
      }

      if (videoSelButton) {
        videoSelButton.removeEventListener("click", displaySelectionAndClose);
      }
  };

  });

  //add button logic
  
  const [moduleElements, setModuleElements] = useState([]); 
  
  const addBtnRef = useRef(null);
  const newElContainerRef = useRef(null);
  
  useEffect(() => {
    const addBtn = addBtnRef.current;
    const newElContainer = newElContainerRef.current;
    const typeSelectBtn = typeSelectBtnRef.current;

    const addElement = () => {
      
      let newElement;
      //add links
      if(typeSelectBtn.classList.contains("Link")) {
        newElement = `<div key = ${moduleElements.length} class = "element-container"> 
                        <input type="text" class="element-input" name="random text" size="120" />
                        <button class = "insert-input-btn" id = "insert-btn-${moduleElements.length}">Insert</button>
                        
                      </div>` 
      


        setModuleElements([...moduleElements, newElement]);
        newElContainer.insertAdjacentHTML('beforeend', newElement);
        console.log(newElContainer);
        console.log(newElContainer.children[0]);
        newElContainer.children[newElContainer.children.length-1].children[1].addEventListener("click", permaLink); //remove event listener where?

        //add files
      } else if (typeSelectBtn.classList.contains("File")) {
        newElement = 
          `<div key = ${moduleElements.length} class = "element-container">             
            <input type="file" id="select-file-${moduleElements.length}" accept="*" />
            <button class = "insert-input-btn" id = "insert-btn-${moduleElements.length}">Insert</button>
          </div>   
          `;     

          console.log(newElement);

          setModuleElements([...moduleElements, newElement]);
          newElContainer.insertAdjacentHTML('beforeend', newElement);
          
        
          newElContainer.children[newElContainer.children.length-1].children[1].addEventListener("click", displayFile); //remove event listener where?s
      //add Images
      } else if (typeSelectBtn.classList.contains("Image")){        
          const newElement = document.createElement("div");
          newElement.key = moduleElements.length;
          newElement.classList.add("flex");
          newElement.classList.add('element-container');
          newElement.id = `element-container-${moduleElements.length}`;
          newElement.classList.add("justify-center");

          const imageFlexBox = document.createElement("div");
          imageFlexBox.classList.add("flex");
          imageFlexBox.classList.add("flex-row");
          imageFlexBox.classList.add("content-center");
          imageFlexBox.classList.add("space-x-20");

          const image1Container = document.createElement("div");
          image1Container.id = `image1-container-${moduleElements.length}`;

          const imageInput1 = document.createElement("input");
          imageInput1.type = "file";
          imageInput1.id = `select-image1-${moduleElements.length}`;
          imageInput1.accept = "image/*";

          const image2Container = document.createElement("div");
          image2Container.id = `image2-container-${moduleElements.length}`;

          const imageInput2 = document.createElement("input");
          imageInput2.type = "file";
          imageInput2.id = `select-image2-${moduleElements.length}`;
          imageInput2.accept = "image/*";

          const image3Container = document.createElement("div");
          image3Container.id = `image3-container-${moduleElements.length}`;

          const imageInput3 = document.createElement("input");
          imageInput3.type = "file";
          imageInput3.id = `select-image3-${moduleElements.length}`;
          imageInput3.accept = "image/*";

          imageFlexBox.append(image1Container);
          imageFlexBox.append(image2Container);
          imageFlexBox.append(image3Container);

          image1Container.append(imageInput1);
          image2Container.append(imageInput2);
          image3Container.append(imageInput3);

          
          const insertButton1 = document.createElement('button');
          insertButton1.className = 'insert-input-btn';
          insertButton1.id = `insert-btn1-${moduleElements.length}`; 
          insertButton1.textContent = 'Insert';

          const insertButton2 = document.createElement('button');
          insertButton2.className = 'insert-input-btn';
          insertButton2.id = `insert-btn2-${moduleElements.length}`; 
          insertButton2.textContent = 'Insert';

          const insertButton3 = document.createElement('button');
          insertButton3.className = 'insert-input-btn';
          insertButton3.id = `insert-btn3-${moduleElements.length}`; 
          insertButton3.textContent = 'Insert';

          imageInput1.id = `image-input-for-${insertButton1.id}`;
          imageInput2.id = `image-input-for-${insertButton2.id}`;
          imageInput3.id = `image-input-for-${insertButton3.id}`;


          // add input box and button to the new element
          newElement.appendChild(imageFlexBox);

          const btnContainer = document.createElement("div");
          btnContainer.classList.add("element-btns-container");

          
          btnContainer.appendChild(insertButton1);
          btnContainer.appendChild(insertButton2);
          btnContainer.appendChild(insertButton3);
          newElement.appendChild(btnContainer);


          //let insert buttons access files and input field
          imageInput1.addEventListener('change', (event) => insertButton1.files = event.target.files);
          imageInput2.addEventListener('change', (event) => insertButton2.files = event.target.files);
          imageInput3.addEventListener('change', (event) => insertButton3.files = event.target.files);

          insertButton1.inField = imageInput1;
          insertButton2.inField = imageInput2;
          insertButton3.inField = imageInput3;

          insertButton1.addEventListener("click", displayImage); 
          insertButton2.addEventListener("click", displayImage); 
          insertButton3.addEventListener("click", displayImage); 

          //add adjustment dropdowns
          
          const image1BtnsContainer = document.createElement("div");
          image1BtnsContainer.classList.add("image1-btns-container");
          const imageSizeMenuItems = [
            { id: "type-minus-w", text: "Shrink-Width", funcs: [displayDropdownSelection, changeImageSize]}, //test change image size and get dropdown working
            { id: "type-minus-w", text: "Shrink-Height", funcs: [displayDropdownSelection, changeImageSize]},
            { id: "type-plus-w", text: "Enlarge-Width", funcs: [displayDropdownSelection, changeImageSize]},
            { id: "type-plus-h", text: "Enlarge-Height", funcs: [displayDropdownSelection, changeImageSize]}
          ];

          const image2BtnsContainer = document.createElement("div");
          image2BtnsContainer.classList.add("image2-btns-container");

          const image3BtnsContainer = document.createElement("div");
          image3BtnsContainer.classList.add("image3-btns-container");
          
  
          image1Container.appendChild(image1BtnsContainer);
          createDropdown(image1BtnsContainer, "image-size-1", imageSizeMenuItems);
          insertButton1.enableDrop = image1BtnsContainer.enableDropdown;

          image2Container.appendChild(image2BtnsContainer);
          createDropdown(image2BtnsContainer, "image-size-2", imageSizeMenuItems);
          insertButton2.enableDrop = image2BtnsContainer.enableDropdown;

          image3Container.appendChild(image3BtnsContainer);
          createDropdown(image3BtnsContainer, "image-size-3", imageSizeMenuItems);
          insertButton3.enableDrop = image3BtnsContainer.enableDropdown;

          //old ending
          setModuleElements([...moduleElements, newElement]);
          newElContainer.appendChild(newElement);

          const dropdownElImage1 = document.getElementById(`image-size-1-type-sel-btn`);
          const dropdownElImage2 = document.getElementById(`image-size-2-type-sel-btn`);
          const dropdownElImage3 = document.getElementById(`image-size-3-type-sel-btn`);

          dropdownElImage1.addEventListener("click", displayDropdownOptions); 
          dropdownElImage2.addEventListener("click", displayDropdownOptions); 
          dropdownElImage3.addEventListener("click", displayDropdownOptions); 
 
      //add Videos
      } else if (typeSelectBtn.classList.contains("Video")) {
        
        const newElement = document.createElement("div");
        newElement.key = moduleElements.length;
        newElement.classList.add("flex");
        newElement.classList.add('element-container');
        newElement.id = `element-container-${moduleElements.length}`;
        newElement.classList.add("justify-center");
        newElement.classList.add("flex-row");
        newElement.classList.add("content-center");
        newElement.classList.add("space-x-20");

        const videoContainer = document.createElement("div");
        videoContainer.id = `video-container-${moduleElements.length}`;

        const videoInput = document.createElement("input");
        videoInput.type = "file";
        videoInput.id = `select-video-${moduleElements.length}`;
        videoInput.accept = "video/*";

        videoContainer.append(videoInput);
        newElement.append(videoContainer);
        
        const insertButton = document.createElement('button');
        insertButton.className = 'insert-input-btn';
        insertButton.id = `insert-btn-${moduleElements.length}`; 
        insertButton.textContent = 'Insert';

    
        videoInput.id = `video-input-for-${insertButton.id}`;
     
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("element-btns-container");

        
        btnContainer.appendChild(insertButton);
 
        newElement.appendChild(btnContainer);


        //let insert buttons access files and input field
        videoInput.addEventListener('change', (event) => insertButton.files = event.target.files);
     
        insertButton.inField = videoInput;

        insertButton.addEventListener("click", displayVideo); 

        
        
      

        //old ending
        setModuleElements([...moduleElements, newElement]);
        newElContainer.appendChild(newElement);
        
      //add Textboxes (Quiz missing)
      } else {
      
        const newElement = document.createElement("div");
        newElement.key = moduleElements.length;
        newElement.classList.add('element-container');
        newElement.id = `element-container-${moduleElements.length}`;

        const inputBox = document.createElement("textarea");
        inputBox.classList.add('element-input');
        
        //inputBox.minLength = 4;
        //inputBox.maxLength = 35;
        inputBox.size = 90;


        const insertButton = document.createElement('button');
        insertButton.className = 'insert-input-btn';
        insertButton.id = `insert-btn-${moduleElements.length}`; 
        insertButton.textContent = 'Insert';

        inputBox.id = `input-box-for-${insertButton.id}`;
        // add input box and button to the new element
        newElement.appendChild(inputBox);

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("element-btns-container"); //issue: overlapping with text
        btnContainer.appendChild(insertButton);
        newElement.appendChild(btnContainer);
        
      
        const fontStyleMenuItems = [
          { id: "type-bold", text: "Bold", funcs: [displayDropdownSelection, changeFontStyle]},
          { id: "type-italics", text: "Italics", funcs: [displayDropdownSelection, changeFontStyle]},
          { id: "type-bi", text: "Bold/Italic", funcs: [displayDropdownSelection, changeFontStyle]},
          { id: "type-default", text: "Default", funcs: [displayDropdownSelection, changeFontStyle]} 
        ];

        const fontSizeMenuItems = [
          { id: "type-minus", text: "-", funcs: [displayDropdownSelection, changeFontSize]},
          { id: "type-plus", text: "+", funcs: [displayDropdownSelection, changeFontSize]}
        ];

        const positionMenuItems = [
          { id: "type-center", text: "Center", funcs: [displayDropdownSelection, changeTextPosition]},
          { id: "type-left", text: "Left", funcs: [displayDropdownSelection, changeTextPosition]},
          { id: "type-right", text: "Right", funcs: [displayDropdownSelection, changeTextPosition]},
        ];

        
        
        createDropdown(btnContainer, "font-style", fontStyleMenuItems);
        createDropdown(btnContainer, "font-size", fontSizeMenuItems);
        createDropdown(btnContainer, "text-position", positionMenuItems);

        insertButton.enableDrop = btnContainer.enableDropdown;
        console.log(insertButton.enableDrop);
        
        
          
        setModuleElements([...moduleElements, newElement]);
        newElContainer.appendChild(newElement);
        
        insertButton.addEventListener("click", permaText); //remove event listener where?

        const dropdownEl1 = document.getElementById(`font-style-type-sel-btn`); //id must match 2nd argument of createDropdown
        const dropdownEl2 = document.getElementById(`font-size-type-sel-btn`);
        const dropdownEl3 = document.getElementById(`text-position-type-sel-btn`);

        dropdownEl1.addEventListener("click", displayDropdownOptions); 
        dropdownEl2.addEventListener("click", displayDropdownOptions); 
        dropdownEl3.addEventListener("click", displayDropdownOptions);       
  
      }
        
    };

    if (addBtn) {
        addBtn.addEventListener("click", addElement);
    }

    // Cleanup event listener on component unmount
    return () => {
        if (addBtn) {
          addBtn.removeEventListener("click", addElement);
        }
    };
  });

    //rendered
    return (
        <div className="relative bg-white">
          <div className="relative z-10">
            <div id = "non-footer">
              <div id = "add-module-container" className = "columns-3 order-first">
                
                <div id = "btn-and-dropdown-element-container">
                  <button ref = {typeSelectBtnRef} id="module-element-type-sel-btn" data-dropdown-toggle="module-element-type-dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Select Module Element Type <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>

                  {/*Dropdown menu*/}
                  <div ref = {typeDropdownRef} id="module-element-type-dropdown" className="z-10 hidden relative bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href = "#" ref = {linkSelButtonRef} id = "type-link" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Link</a>
                        </li>
                        <li>
                          <a href = "#" ref = {fileSelButtonRef} id = "type-file" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">File</a>
                        </li>
                        <li>
                          <a href = "#" ref = {textSelButtonRef} id = "type-textbox" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Textbox</a>
                        </li>
                        <li>
                          <a href = "#" ref = {quizSelButtonRef} id = "type-quiz" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Quiz</a>
                        </li>
                        <li>
                          <a href = "#" ref = {imageSelButtonRef} id = "type-image" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Image</a>
                        </li>
                        <li>
                          <a href = "#" ref = {videoSelButtonRef} id = "type-video" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Video</a>
                        </li>
                      </ul>
                  </div>
                </div>

                <p id = "add-container-text" >Add a module element of type: </p>
                <button id ="add-module-element-btn" ref = {addBtnRef}>Add</button>
              </div>

              {/*container for added content*/}
              <div id = "new-modules-container" ref = {newElContainerRef}>
                
              </div>
              <button id ="preview-module-page-btn" ref = {previewBtnRef}>Preview</button>
              <button id ="save-module-page-btn">Save</button>
              </div>

          </div>
        </div>
    );
};

export default ModuleEdit;