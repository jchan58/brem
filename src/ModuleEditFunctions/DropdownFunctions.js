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
    
    //we want some buttons to be initally disabled
    if(initDisabled) {
      button.disabled = true; 
    }

    //functions to allow the enabling and disabling of all buttons (doing them per element did not work)
    const enableAllButtons = () => {
        const buttons = parent.querySelectorAll('button');
        buttons.forEach(btn => { 
            btn.disabled = false;
          });
    }

    const disableAllButtons = () => {
      const buttons = parent.querySelectorAll('button');
      buttons.forEach(btn => { 
          btn.disabled = true;
        });
    }

    // Create dropdown container div
    const dropdownDiv = document.createElement('div');
    dropdownDiv.id = `${label}-type-dropdown`;
    classesStr = "dropdown z-10 hidden absolute left-1/2 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700";
    classes = classesStr.split(" ");
    dropdownDiv.classList.add(...classes);
    // Create unordered list element
    const ul = document.createElement('ul');
    classesStr = "py-2 text-sm text-gray-700 dark:text-gray-200";
    classes = classesStr.split(" ");
    ul.classList.add(...classes);
    ul.setAttribute('aria-labelledby', 'dropdownDefaultButton');

    const hideDropdown = () => {
      //dropdownDiv.classList.add("hidden");
      const dropdowns = parent.querySelectorAll('.dropdown');
      dropdowns.forEach(drop => drop.classList.add("hidden"));

    }

    //want dropdown to be able to hide itself
    dropdownDiv.hide = hideDropdown;
  
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.id = item.id;
      classesStr = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
      classes = classesStr.split(" ");
      a.classList.add(...classes);
      a.textContent = item.text; //these will be used as an exact match for setting the selected option!
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
    parent.disableDropdown = disableAllButtons;
    parent.hideDrop = hideDropdown;
    parent.appendChild(container);

}

//general dropdown menu logic, similar to that of the dropdown in ModuleEdit
export function displayDropdownOptions(event) {
    const selectBtn = event.target;

    const dropdown = selectBtn.parentElement.children[1];

    if(dropdown) {
      const links = dropdown.querySelectorAll('a');
      const removes = Array.from(links).map(link => link.textContent);

      //remove all dropdown option text from the class list (they will all be tagged 'a')
      for (let i = 0; i < removes.length; i++) {
        selectBtn.classList.remove(removes[i]);
      }

      selectBtn.innerHTML = `${selectBtn.textContent} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" d="m1 1 4 4 4-4"/>
      </svg>`;
      
      //reveal or hide the dropdown
      if (dropdown.classList.contains("hidden")) {
        
        dropdown.classList.remove("hidden");
      } else {
        dropdown.classList.add("hidden");
      }
    }

}

  //select on dropdown display logic, is a list item
export function displayDropdownSelection(event) {
    event.preventDefault();
    const targetText = event.target.textContent;

    const typeSelectBtn = event.target.parentSelBtn;

    if(typeSelectBtn) {  
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