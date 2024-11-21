//need to add way to disabled the dropdown...need to hide it first..
//also need to make sure there is an image there
export function hideImage(event) {
  if(event.currentTarget.insertBtn.inserted){
    const imgContainer = event.currentTarget.parent;
    imgContainer.innerHTML = "";
    imgContainer.appendChild(event.currentTarget.inputField); 
    imgContainer.appendChild(event.currentTarget.buttons); 
    event.currentTarget.hideDrop();
    event.currentTarget.insertBtn.disableDrop();
    event.currentTarget.insertBtnsContainer.appendChild(event.currentTarget.insertBtn);
    imgContainer.appendChild(event.currentTarget);
    event.currentTarget.insertBtn.inserted = false;
  }
}

export function displayImage(event) {
  let file;
  if(event.target.files) {
    file = event.target.files[0];
  }
  if (file) {
    const fileURL = URL.createObjectURL(file);
    const imageEmbed = document.createElement("img");
    imageEmbed.src = fileURL;
    imageEmbed.classList.add("file-embed");
    imageEmbed.id = `image-embed-${event.target.elID}-${event.target.num}`;
    imageEmbed.classList.add("flex-1"); 
    imageEmbed.classList.add("box-content");
    imageEmbed.style.width = "200px"; 
    imageEmbed.style.height = "300px";
      
    event.target.enableDrop();
    event.target.inField.replaceWith(imageEmbed);
    event.target.inserted = true;
    event.target.remove();
  } else {
    alert("Please upload an image.")
  }
}

export function changeImageSize(event) {
  event.preventDefault();
  const imageEmbed = event.target.dropdownContainer.parentElement.parentElement.children[0];

  if(event.target.textContent === "Shrink-Width") {
    if(parseInt(imageEmbed.style.width) >= 40) {
      imageEmbed.style.width = (parseInt(imageEmbed.style.width)-20).toString() + "px";     
    }
  } else if (event.target.textContent === "Shrink-Height") {
    if(parseInt(imageEmbed.style.height) >= 100) {
      imageEmbed.style.height = (parseInt(imageEmbed.style.height)-40).toString() + "px";   
    }
  } else if (event.target.textContent === "Enlarge-Width") {
    if(parseInt(imageEmbed.width) <= 500) {
      imageEmbed.style.width = (parseInt(imageEmbed.style.width)+20).toString() + "px";   
    }
  } else if (event.target.textContent === "Enlarge-Height") {
    if (parseInt(imageEmbed.height) <= 600) {
      imageEmbed.style.height = (parseInt(imageEmbed.style.height)+40).toString() + "px";   
    }
  }
  
}


//does not move with preview...maybe need to lock to images?
export function createCaption(event) {
  //want to be able to put caption answer
  const wholeNonFooter = document.getElementById("non-footer");
  wholeNonFooter.classList.add("relative");
  let offsetX = 0;
  let offsetY = 0; 
    
  if (event.target.inField.value !== "" && event.target.choice) {
      const caption = document.createElement("div");
      caption.classList.add("caption");
      caption.classList.add("relative")
      caption.setAttribute("draggable", "true"); // Make the caption draggable

      const text = document.createElement("p");
      text.classList.add("m-5");
      text.textContent = event.target.inField.value;
      caption.appendChild(text);
      


      const deleteButton = document.createElement("button");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("bi", "bi-trash3-fill");
      deleteButton.appendChild(deleteIcon);
      deleteButton.classList.add('trash-btn'); 
      deleteButton.classList.add("absolute");
      deleteButton.classList.add("top-1", "right-1");
      deleteButton.addEventListener("click", () => deleteButton.parentElement.remove());
      caption.appendChild(deleteButton);

      
      const correspondingImage = document.getElementById(`image-embed-${event.target.elID}-${event.target.choice}`); 
      if(correspondingImage) {
        correspondingImage.addEventListener("click", () => {
          if(!caption.classList.contains("hidden")) { //will need to start hidden for users
            caption.classList.add("hidden");
          } else {
            caption.classList.remove("hidden");
          }
        });



        wholeNonFooter.appendChild(caption);
        // Drag start: Add class or set data as needed
        caption.addEventListener("dragstart", function (e) {
          // Capture the mouse offset relative to the caption when the drag starts
          const rect = caption.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;


          e.dataTransfer.setData("text/plain", null); // Required for Firefox
          // Set an ID or unique identifier for the dragged element
          caption.classList.add("dragging");
        });
  
        // Drag end: Remove class
        caption.addEventListener("dragend", function () {
            caption.classList.remove("dragging");
        });
  
        // Handle where the caption can be dropped (the parent container)
        wholeNonFooter.addEventListener("dragover", function (e) {
            e.preventDefault(); // Required to allow dropping
        });
  
        wholeNonFooter.addEventListener("drop", function (e) {
            e.preventDefault();
            const draggingElement = document.querySelector(".dragging");
            if (draggingElement) {
                // Get the bounding rectangle of the parent container
                const containerRect = wholeNonFooter.getBoundingClientRect();
                  
                // Get the mouse's position relative to the container
                const mouseX = e.clientX - containerRect.left;
                const mouseY = e.clientY - containerRect.top;

                console.log(mouseX);
                console.log(mouseY);
                // Adjust for the offset of the dragged element
                const adjustedX = mouseX - offsetX - 330; //manual adjustment may not be good...
                const adjustedY = mouseY - offsetY - 55;

          
                // Move the dragged caption to the adjusted coordinates
                draggingElement.classList.remove("relative");
                draggingElement.classList.add("absolute");
                draggingElement.style.left = `${adjustedX}px`;
                draggingElement.style.top = `${adjustedY}px`;
                draggingElement.classList.remove("dragging");
            }
        });
  
        event.target.inField.value = "";  // Clear the input field
      } else {
        alert("Please upload the image for the caption.");
      }      
  } else {
      alert("Please enter a caption and select an image for the caption.");
  }
}

export function updateChoice (event) { 
  const capAddButton = document.getElementById(`caption-add-btn-${event.target.elID}`);
  capAddButton.choice = event.target.textContent;
  console.log(capAddButton.choice);
  console.log(capAddButton);
}