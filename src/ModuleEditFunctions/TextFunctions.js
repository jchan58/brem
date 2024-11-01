export function reversePermaText(event) {
    if(event.currentTarget.insertBtn.inserted) {
        const element = event.currentTarget.parent;
        element.innerHTML = "";
        element.appendChild(event.currentTarget.inputField); 
        element.appendChild(event.currentTarget.insertBtn); 
        event.currentTarget.hideDrop();
        event.currentTarget.insertBtn.disableDrop();
        element.appendChild(event.currentTarget.buttons);
        element.appendChild(event.currentTarget);
        event.currentTarget.insertBtn.inserted = false;
    }
}

export function permaText(event) {
    const insertBtn = event.target;
    if(insertBtn) {
        const inputField = document.getElementById(`input-box-for-${insertBtn.id}`);
        if(inputField.value === ""){
            alert("Please enter text into the input field.");
        } else {
            const text = document.createElement("p");
            text.size = 2;
            text.pos = 3;
            text.classList.add("absolute", "top-0", "left-1/2");
            text.classList.add("transform", "-translate-x-1/2");
            text.textContent = inputField.value;
            event.target.enableDrop();
            const elContainer = insertBtn.parentElement;
            
            //don't let added text overlap with the menu
            elContainer.classList.add("flex");
            elContainer.classList.add("justify-end");
            text.classList.add("mt-300");

            inputField.replaceWith(text);
            insertBtn.inserted = true;
            insertBtn.remove();
            elContainer.classList.add("relative"); //make text's absolute relative to...this

            //elContainer.appendChild(text);      
        }
    }
}


export function changeFontStyle(event) {
    event.preventDefault(); //prevent change movement
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[0];
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

export function changeFontSize(event) {
    event.preventDefault();
    const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"];
    
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[0];
    
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

export function changeTextPosition(event) { 
    event.preventDefault();
    const positions = ["left-0.5", "left-1/4", "left-1/3", "left-1/2", "left-2/3", "left-3/4", "right-0.5"];
    
    const container = event.target.dropdownContainer;
    const changeTarget = container.parentElement.parentElement.children[0];
    console.log(changeTarget);
    const elContainer = changeTarget.parentElement;

    for(let i = 0; i < positions.length; i++) {
        changeTarget.classList.remove(positions[i]);
    }

    
    changeTarget.classList.add("transform", "-translate-x-1/2");

    if(event.target.textContent === "Left") {
        changeTarget.pos -= 1;
        if(changeTarget.pos < 0) {
            changeTarget.pos = 0;
        }
        changeTarget.classList.add(positions[changeTarget.pos]);
    } else {
        changeTarget.pos += 1;
        if(changeTarget.pos >= positions.length) {
            changeTarget.pos = positions.length - 1;
        }
        changeTarget.classList.add(positions[changeTarget.pos]);
    }

    if(changeTarget.pos <= 3) {
        elContainer.classList.remove("justify-start");
        elContainer.classList.add("justify-end");
    } else {
        elContainer.classList.remove("justify-end");
        elContainer.classList.add("justify-start");
    }

    if(changeTarget.pos === 0) {
        changeTarget.classList.remove("transform", "-translate-x-1/2");
    }
    
}