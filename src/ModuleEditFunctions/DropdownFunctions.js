//code to add a dropdown to the page
export function createDropdown(parent, label, menuItems, initDisabled = true, elID) {
    //create overall container
    const container = document.createElement('div');
    container.id = `${label}-type-dropdown-container`;
    container.classList.add("relative");
    // Create button element
    const button = document.createElement('button');
    button.id = `${label}-type-sel-btn`;
    let classesStr = "button disabled:opacity-50 disabled:cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    let classes = classesStr.split(" ");
    button.classList.add(...classes);
    button.type = "button";
    button.setAttribute('data-dropdown-toggle', `${label}-type-dropdown`);
    button.innerHTML = `Change ${label.replaceAll("-", " ").replace(/\d/g, "")} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" d="m1 1 4 4 4-4"/></svg>`;
    
    if(initDisabled) {
      button.disabled = true; 
    }

    
    const enableAllButtons = () => {
        const buttons = parent.querySelectorAll('button');
        buttons.forEach(btn => { 
            btn.disabled = false;
          });
    }

    // Create dropdown container div
    const dropdownDiv = document.createElement('div');
    dropdownDiv.id = `${label}-type-dropdown`;
    dropdownDiv.className = "dropdown z-10 hidden absolute left-1/2 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700";
    // Create unordered list element
    const ul = document.createElement('ul');
    classesStr = "py-2 text-sm text-gray-700 dark:text-gray-200";
    classes = classesStr.split(" ");
    ul.classList.add(...classes);
    ul.setAttribute('aria-labelledby', 'dropdownDefaultButton');
  
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.id = item.id;
      classesStr = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
      classes = classesStr.split(" ");
      a.classList.add(...classes);
      a.textContent = item.text;
      a.elID = elID;
      if(item.funcs != null) {
        for(let i = 0; i < item.funcs.length; i++) {
          a.addEventListener("click", item.funcs[i])
        }
      }

      a.parentSelBtn = button;
      a.dropdown = dropdownDiv;
      a.dropdownContainer = container;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    // Append the ul to the dropdown div
    dropdownDiv.appendChild(ul);
  
    //append the button and dropdown in a container to the parent 
    container.appendChild(button);
    container.appendChild(dropdownDiv);
    parent.enableDropdown = enableAllButtons;
    parent.appendChild(container);

}

//general dropdown menu logic
export function displayDropdownOptions(event) {
    const selectBtn = event.target;

    const dropdown = selectBtn.parentElement.children[1];

    if(dropdown) {
      const links = dropdown.querySelectorAll('a');
      const removes = Array.from(links).map(link => link.textContent);

      for (let i = 0; i < removes.length; i++) {
        selectBtn.classList.remove(removes[i]);
      }

      selectBtn.innerHTML = `${selectBtn.textContent} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" d="m1 1 4 4 4-4"/>
      </svg>`;
      
      
      if (dropdown.classList.contains("hidden")) {
        
        dropdown.classList.remove("hidden");
        dropdown.classList.add("shown");
      } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("shown");
      }
    }

}

  //select on dropdown display logic, is a list item
export function displayDropdownSelection(event) {
    const targetText = event.target.textContent;
    //console.log(event.target);
    const typeSelectBtn = event.target.parentSelBtn;

    if(typeSelectBtn) {
      //console.log(typeSelectBtn);
      
      typeSelectBtn.innerHTML = `${targetText} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4"/>
        </svg>`;

      //remove previous target text class
      const links = typeSelectBtn.querySelectorAll('a');
      const removes = Array.from(links).map(link => link.textContent);

      for (let i = 0; i < removes.length; i++) {
        typeSelectBtn.classList.remove(removes[i]);
      }

      typeSelectBtn.classList.add(targetText);
      
    }
}