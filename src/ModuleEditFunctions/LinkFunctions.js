//reverse link insertion
export function reversePermaLink(event) {
    if(event.currentTarget.insertBtn.inserted) {
        const element = event.currentTarget.parent;
        element.innerHTML = "";
        element.appendChild(event.currentTarget.inputField); 
        element.appendChild(event.currentTarget.insertBtn); 
        element.appendChild(event.currentTarget.elBtns);
        event.currentTarget.insertBtn.inserted = false;
    }
}

//insert the user's link
export function permaLink(event) {
    const insertBtn = event.target;
    if(insertBtn) {
        const inputField = insertBtn.parentElement.children[0];
        const link = document.createElement("a");
        link.href = inputField.value;
        link.target = "_blank"
        link.rel = "noopener noreferrer";
        link.textContent = inputField.value;
        inputField.replaceWith(link);
        insertBtn.inserted = true;
        insertBtn.remove();
            
    }
}