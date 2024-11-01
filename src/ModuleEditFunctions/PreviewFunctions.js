export function previewOrEditPage(event) {
    const toChange = [];

    const addModuleContainer = document.getElementById("add-module-container");
    toChange.push(addModuleContainer);

    const insertInputButtons = document.getElementsByClassName("insert-input-btn");
    toChange.push(...insertInputButtons);

    const elementBtnContainers = document.getElementsByClassName("element-btns-container");
    toChange.push(...elementBtnContainers);

    const imageElBtnContainers1 = document.getElementsByClassName("image1-btns-container");
    toChange.push(...imageElBtnContainers1);
    const imageElBtnContainers2 = document.getElementsByClassName("image2-btns-container");
    toChange.push(...imageElBtnContainers2);
    const imageElBtnContainers3 = document.getElementsByClassName("image3-btns-container");
    toChange.push(...imageElBtnContainers3);

    const captionEditors  = document.getElementsByClassName("caption-editor");
    toChange.push(...captionEditors);
    
    const pauseDataContainers = document.getElementsByClassName("pause-data-container");
    toChange.push(...pauseDataContainers);

    const dropdowns = document.getElementsByClassName("dropdown"); 
    toChange.push(...dropdowns);

    const imageInputs = document.getElementsByClassName("image-input");
    toChange.push(...imageInputs);

    const elementInputs = document.getElementsByClassName("element-input");
    toChange.push(...elementInputs);

    const trashButtons = document.getElementsByClassName("trash-btn");
    console.log(trashButtons);
    toChange.push(...trashButtons);

    const captionInputs = document.getElementsByClassName("caption-input");
    toChange.push(...captionInputs);

    const addCaptionBtns = document.getElementsByClassName("add-caption-btn");
    toChange.push(...addCaptionBtns);

    const videoInputs = document.getElementsByClassName("video-input");
    toChange.push(...videoInputs);
    
    const elementContainers = document.getElementsByClassName("element-container");

    const addedElementContainers = document.getElementsByClassName("added-element-container");

    if(event.target.textContent === "Preview") {
      Array.from(elementContainers).forEach(item => {
        console.log(event.target.textContent);
        item.classList.remove("element-container");
        item.classList.add("added-element-container");
      })
    } else {
      if(event.target.textContent === "Edit")
      Array.from(addedElementContainers).forEach(item => {
        console.log(event.target.textContent);
        item.classList.add("element-container");
        item.classList.remove("added-element-container");
      })
    }

    

    toChange.forEach(item => { 
      if(event.target.textContent === "Preview") {
        item.classList.add("hidden");
        item.style.visibility = "hidden";
      } else {
        item.classList.remove("hidden");
        item.style.visibility = "visible";
      }
    });

    if(event.target.textContent === "Preview") {
      event.target.textContent = "Edit";
    } else {
      event.target.textContent = "Preview";
    }

    Array.from(dropdowns).forEach(dropdown => dropdown.hide());
}
