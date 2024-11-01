//PDF display function
export function hidePDF(event) {
    if(event.currentTarget.insertBtn.inserted) {
        const element = event.currentTarget.parent;
        element.innerHTML = "";
        element.appendChild(event.currentTarget.inputField); 
        element.appendChild(event.currentTarget.insertBtn); 
        element.appendChild(event.currentTarget);
        event.currentTarget.insertBtn.inserted = false;
    }
}

export function displayPDF(event) {
    const file = event.target.parentElement.children[0].files[0];
    
    if (file) {
        const fileInput = event.target.parentElement.children[0];
        const fileURL = URL.createObjectURL(file);
        const pdfDisplay = document.createElement("embed");
        pdfDisplay.src = fileURL;
        pdfDisplay.classList.add("file-embed");
        pdfDisplay.width = event.target.parentElement.getBoundingClientRect().width * 0.8;
        pdfDisplay.height = 500;
        fileInput.replaceWith(pdfDisplay);
        event.target.inserted = true;
        event.target.remove();
    }
}
