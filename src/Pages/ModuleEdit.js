import React, { useRef, useEffect, useState } from 'react';
import '../style/ModuleEdit.css';
import {displayImage, changeImageSize, createCaption, updateChoice} from '../ModuleEditFunctions/ImageFunctions'
import {permaText, changeFontSize, changeFontStyle, changeTextPosition} from '../ModuleEditFunctions/TextFunctions'
import { displayPDF } from '../ModuleEditFunctions/PDFFunctions';
import { permaLink } from '../ModuleEditFunctions/LinkFunctions';
import { createDropdown, displayDropdownOptions, displayDropdownSelection } from '../ModuleEditFunctions/DropdownFunctions';
import { displayVideo } from '../ModuleEditFunctions/VideoFunctions';
import { previewPage } from '../ModuleEditFunctions/PreviewFunctions';

const ModuleEdit = () => {

  //want to add:
  //add more pause video functionality
  //add option to caption images
  //add image popup caption functionality; add as many as you want? or up to 3?
  //add quizzes
  //reverse preview
  
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
  const pdfSelButtonRef = useRef(null);
  const textSelButtonRef = useRef(null);
  const quizSelButtonRef = useRef(null);
  const imageSelButtonRef = useRef(null);
  const videoSelButtonRef = useRef(null);
  

  useEffect(() => {

    const typeSelectBtn = typeSelectBtnRef.current;
    const typeDropdown = typeDropdownRef.current;

    const linkSelButton = linkSelButtonRef.current;
    const pdfSelButton = pdfSelButtonRef.current;
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
      typeSelectBtn.classList.remove("PDF");
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

    if (pdfSelButton) {
      pdfSelButton.addEventListener("click", displaySelectionAndClose);
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

      if (pdfSelButton) {
        pdfSelButton.removeEventListener("click", displaySelectionAndClose);
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
      } else if (typeSelectBtn.classList.contains("PDF")) {
        newElement = 
          `<div key = ${moduleElements.length} class = "element-container">             
            <input type="file" id="select-file-${moduleElements.length}" accept="application/pdf" />
            <button class = "insert-input-btn" id = "insert-btn-${moduleElements.length}">Insert</button>
          </div>   
          `;     

          console.log(newElement);

          setModuleElements([...moduleElements, newElement]);
          newElContainer.insertAdjacentHTML('beforeend', newElement);
          
        
          newElContainer.children[newElContainer.children.length-1].children[1].addEventListener("click", displayPDF); //remove event listener where?s
      //add Images
      } else if (typeSelectBtn.classList.contains("Image")){        
          const newElement = document.createElement("div");
          newElement.key = moduleElements.length;
          newElement.classList.add("flex", "flex-row", "flex-wrap");
          newElement.classList.add('element-container');
          newElement.id = `element-container-${moduleElements.length}`;
          newElement.classList.add("justify-center");

          const imageFlexBox = document.createElement("div");
          imageFlexBox.classList.add("flex", "grow-0");
          imageFlexBox.classList.add("flex-row");
          imageFlexBox.classList.add("content-center");
          imageFlexBox.classList.add("space-x-20");

          const image1Container = document.createElement("div");
          image1Container.id = `image1-container-${moduleElements.length}`;

          const imageInput1 = document.createElement("input");
          imageInput1.classList.add("image-input");
          imageInput1.type = "file";
          imageInput1.id = `select-image1-${moduleElements.length}`;
          imageInput1.accept = "image/*";

          const image2Container = document.createElement("div");
          image2Container.id = `image2-container-${moduleElements.length}`;

          const imageInput2 = document.createElement("input");
          imageInput2.classList.add("image-input");
          imageInput2.type = "file";
          imageInput2.id = `select-image2-${moduleElements.length}`;
          imageInput2.accept = "image/*";

          const image3Container = document.createElement("div");
          image3Container.id = `image3-container-${moduleElements.length}`;

          const imageInput3 = document.createElement("input");
          imageInput3.classList.add("image-input");
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
          insertButton1.num = '1';
          insertButton1.textContent = 'Insert 1';

          const insertButton2 = document.createElement('button');
          insertButton2.className = 'insert-input-btn';
          insertButton2.id = `insert-btn2-${moduleElements.length}`; 
          insertButton2.num = '2';
          insertButton2.textContent = 'Insert 2';

          const insertButton3 = document.createElement('button');
          insertButton3.className = 'insert-input-btn';
          insertButton3.id = `insert-btn3-${moduleElements.length}`; 
          insertButton3.num = '3';
          insertButton3.textContent = 'Insert 3';

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
          insertButton1.elID = moduleElements.length;

          insertButton2.inField = imageInput2;
          insertButton2.elID = moduleElements.length;

          insertButton3.inField = imageInput3;
          insertButton3.elID = moduleElements.length;

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
          createDropdown(image1BtnsContainer, `image-size-1-${moduleElements.length}`, imageSizeMenuItems);
          insertButton1.enableDrop = image1BtnsContainer.enableDropdown;

          image2Container.appendChild(image2BtnsContainer);
          createDropdown(image2BtnsContainer, `image-size-2-${moduleElements.length}`, imageSizeMenuItems);
          insertButton2.enableDrop = image2BtnsContainer.enableDropdown;

          image3Container.appendChild(image3BtnsContainer);
          createDropdown(image3BtnsContainer, `image-size-3-${moduleElements.length}`, imageSizeMenuItems);
          insertButton3.enableDrop = image3BtnsContainer.enableDropdown;


          //caption input box
          //want input box in new row
          const breakDiv = document.createElement("div");
          breakDiv.classList.add("break");
          const captionDiv = document.createElement("div");
          captionDiv.classList.add("caption-editor");
          captionDiv.classList.add("flex");
          const inputBox = document.createElement("textarea");
          inputBox.classList.add('caption-input');
        
          inputBox.size = 90;
          

          const addButton = document.createElement('button');
          addButton.classList.add('add-caption-btn');
          addButton.id = `caption-add-btn-${moduleElements.length}`; 
          addButton.textContent = 'Add Caption';

          inputBox.id = `input-box-for-${addButton.id}`;
          
          addButton.inField = inputBox;
          addButton.elID = moduleElements.length;
          addButton.addEventListener("click", createCaption);
          


          const imageSelectMenuItems = [
            { id: "type-img-1", text: "1", funcs: [displayDropdownSelection, updateChoice]}, 
            { id: "type-img-2", text: "2", funcs: [displayDropdownSelection, updateChoice]},
            { id: "type-img-3", text: "3", funcs: [displayDropdownSelection, updateChoice]},

          ];

          captionDiv.appendChild(inputBox);
          captionDiv.appendChild(addButton);

          createDropdown(captionDiv, `caption-image-${moduleElements.length}`, imageSelectMenuItems, false, moduleElements.length);

          //addButton.choice = document.getElementById(`caption-img-${moduleElements.length}-type-sel-btn`).textContent;

          
          newElement.appendChild(breakDiv);
          newElement.appendChild(captionDiv);

          //append the element and update the count
          setModuleElements([...moduleElements, newElement]);
          newElContainer.appendChild(newElement);

          const dropdownElImage1 = document.getElementById(`image-size-1-${moduleElements.length}-type-sel-btn`);
          const dropdownElImage2 = document.getElementById(`image-size-2-${moduleElements.length}-type-sel-btn`);
          const dropdownElImage3 = document.getElementById(`image-size-3-${moduleElements.length}-type-sel-btn`);

          dropdownElImage1.addEventListener("click", displayDropdownOptions); 
          dropdownElImage2.addEventListener("click", displayDropdownOptions); 
          dropdownElImage3.addEventListener("click", displayDropdownOptions);

          const dropdownCaption = document.getElementById(`caption-image-${moduleElements.length}-type-sel-btn`);
          dropdownCaption.addEventListener("click", displayDropdownOptions);
               
 
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
        insertButton.classList.add('insert-input-btn');
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
        insertButton.elID = moduleElements.length;
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
        //btnContainer.dropdownBtns = [];
        console.log(btnContainer);
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
          //{ id: "type-center", text: "Center", funcs: [displayDropdownSelection, changeTextPosition]},
          { id: "type-left", text: "Left", funcs: [displayDropdownSelection, changeTextPosition]},
          { id: "type-right", text: "Right", funcs: [displayDropdownSelection, changeTextPosition]},
        ];


        createDropdown(btnContainer, `font-style-${moduleElements.length}`, fontStyleMenuItems);
        createDropdown(btnContainer, `font-size-${moduleElements.length}`, fontSizeMenuItems);
        createDropdown(btnContainer, `text-position-${moduleElements.length}`, positionMenuItems);

        insertButton.enableDrop = btnContainer.enableDropdown;
        
    
        console.log(insertButton.enableDrop);
        
 
        setModuleElements([...moduleElements, newElement]);
        newElContainer.appendChild(newElement);

        insertButton.addEventListener("click", permaText); //remove event listener where?

        const dropdownEl1 = document.getElementById(`font-style-${moduleElements.length}-type-sel-btn`); //id must match 2nd argument of createDropdown
        const dropdownEl2 = document.getElementById(`font-size-${moduleElements.length}-type-sel-btn`);
        const dropdownEl3 = document.getElementById(`text-position-${moduleElements.length}-type-sel-btn`);

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
                          <a href = "#" ref = {pdfSelButtonRef} id = "type-pdf" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PDF</a>
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