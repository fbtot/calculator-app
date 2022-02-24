const buttonsContainer = document.getElementById('buttonsContainer');

function addActiveButtonClass(id) {
  document.getElementById(id).classList.add('buttonActive');
}

function removeActiveButtonClass(id) {
  document.getElementById(id).classList.remove('buttonActive');
}

function toggleSecondFunctions() {
  buttonsContainer.classList.toggle('second-function');
}

function toggleRadial() {
  buttonsContainer.classList.toggle('deg');
}

function addNextActionButton() {
  buttonsContainer.classList.add('nextAction');
}

function removeNextActionButton() {
  buttonsContainer.classList.remove('nextAction');
}

export {
  addActiveButtonClass,
  removeActiveButtonClass,
  toggleSecondFunctions,
  addNextActionButton,
  removeNextActionButton,
  toggleRadial,
};
