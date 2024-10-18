export function previewPage() {
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

    const dropdowns = document.getElementsByClassName("dropdown"); 
    hide.push(...dropdowns);

    const imageInputs = document.getElementsByClassName("image-input");
    hide.push(...imageInputs);

    const trashButtons = document.getElementsByClassName("trash-btn");
    console.log(trashButtons);
    hide.push(...trashButtons);

    const captionInputs = document.getElementsByClassName("caption-input");
    hide.push(...captionInputs);

    const addCaptionBtns = document.getElementsByClassName("add-caption-btn");
    hide.push(...addCaptionBtns);
    
    const elementContainers = document.getElementsByClassName("element-container");
    Array.from(elementContainers).forEach(item => {
      item.classList.remove("element-container");
      item.classList.add("added-element-container");
    })

    hide.forEach(item => { 
      item.classList.add("hidden");
      item.style.visibility = "hidden";
      
    });
}