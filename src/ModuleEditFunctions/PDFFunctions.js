//PDF display function
export function displayPDF(event) {
    const file = event.target.parentElement.children[0].files[0];
    
    if (file) {
        const fileURL = URL.createObjectURL(file);
        console.log(event.target.parentElement);
        console.log(event.target.parentElement.width);
        event.target.parentElement.innerHTML = `<embed src = "${fileURL}" class="file-embed" width="${event.target.parentElement.getBoundingClientRect().width * 0.8}" height="500" />` 
    }
}
