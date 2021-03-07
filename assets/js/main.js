document.addEventListener('DOMContentLoaded',initApp);

function initApp() {
  generateClassesDropdown();
  addListeners();
}


function generateClassesDropdown() {
  const classTypes = ['rouge', 'bard', 'druid', 'monk', 'wizzard', 'warrior'];
  const ddClassEl =  document.createElement('select');
  const defaultOption =  document.createElement('option');
  
  classTypes.sort();

  ddClassEl.classList = "form-control";
  ddClassEl.id = "ddclass-selector";
  
  
  defaultOption.value = "";
  defaultOption.text = "Select Character Class";
  
  ddClassEl.appendChild(defaultOption);

  classTypes.forEach( (ddClass) => {
    const classOption =  document.createElement('option');
    classOption.value = classOption.text = ddClass;
    ddClassEl.appendChild(classOption);
  });
  document.querySelector(".class-select").appendChild(ddClassEl);
}

function addListeners(){
  const ddClassSelector = document.querySelector("#ddclass-selector");

  ddClassSelector.addEventListener('change', (val)=>{
    const charClass = val.target.value;
    loadNewCharacterPicture(charClass);
  });
}

function loadNewCharacterPicture(charClass) {
  const newImg = document.createElement('img');
  const chContainer = document.querySelector('#character-container');

  /* Clear container */
  chContainer.innerHTML = "";

  newImg.src = `/assets/img/${charClass}.png`;
  newImg.classList = "character-image img-thumbnail";

  chContainer.appendChild(newImg);
}