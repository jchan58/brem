export function permaLink(event) {
    const insertBtn = event.target;
    if(insertBtn) {
        const inputField = insertBtn.parentElement.children[0];
        insertBtn.parentElement.innerHTML = `<a href = "${inputField.value}" target="_blank" rel="noopener noreferrer">${inputField.value}</a>`; 
            
    }
}