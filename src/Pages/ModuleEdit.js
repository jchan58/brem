import React, { useRef, useEffect, useState } from 'react';
import '../style/ModuleEdit.css';

const ModuleEdit = () => {
  
  //functions to turn text/link put into input box and make it permanent
  function permaText(event) {
    const insertBtn = event.target;
    if(insertBtn) {
      const inputField = insertBtn.parentElement.children[0];
      insertBtn.parentElement.innerHTML = `<div>${inputField.value} </div>`;  
    }
  }

  function permaLink(event) {
    const insertBtn = event.target;
    if(insertBtn) {
      const inputField = insertBtn.parentElement.children[0];
      insertBtn.parentElement.innerHTML = `<a href = "${inputField.value}">${inputField.value}</a>`;  
    }
  }

  //file insert display function
  function displayFile(event) {
    const file = event.target.parentElement.children[0].files[0];
    
    if (file) {
      const fileURL = URL.createObjectURL(file);
      event.target.parentElement.innerHTML = `<embed src = "${fileURL}" class="file-embed" width="500" height="400" />`
    }
  }

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
  

  useEffect(() => {

    const typeSelectBtn = typeSelectBtnRef.current;
    const typeDropdown = typeDropdownRef.current;

    const linkSelButton = linkSelButtonRef.current;
    const fileSelButton = fileSelButtonRef.current;
    const textSelButton = textSelButtonRef.current;
    const quizSelButton = quizSelButtonRef.current;


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
                        <input type="text" class="element-input" name="random text" required minlength="4" maxlength="100" size="90" />
                        <button class = "insert-input-btn" id = "insert-btn-${moduleElements.length}">Insert</button>
                        <div id = "new-item-container-${moduleElements.length}">
                  
                        </div>
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
      //add textboxes (quizzes not done yet)
      } else {
        newElement = `<div key = ${moduleElements.length} class = "element-container"> 
                        <input type="text" class="element-input" name="random text" required minlength="4" maxlength="35" size="90" />
                        <button class = "insert-input-btn" id = "insert-btn-${moduleElements.length}">Insert</button>
                        <div id = "new-item-container-${moduleElements.length}">
                  
                        </div>
                      </div>` 
      
        //console.log(newElement);

        setModuleElements([...moduleElements, newElement]);
        newElContainer.insertAdjacentHTML('beforeend', newElement);
        console.log(newElContainer);
        console.log(newElContainer.children[0]);
        newElContainer.children[newElContainer.children.length-1].children[1].addEventListener("click", permaText); //remove event listener where?
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
                
                <div id = "btn-and-dropdown-container">
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
                      </ul>
                  </div>
                </div>

                <p id = "add-container-text" >Add a module element of type: </p>
                <button id ="add-module-element-btn" ref = {addBtnRef}>Add</button>
              </div>

              {/*container for added content*/}
              <div id = "new-modules-container" ref = {newElContainerRef}>
                
              </div>

              <button id ="save-module-page-btn">Save</button>
              </div>

          </div>
        </div>
    );
};

export default ModuleEdit;