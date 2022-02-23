function addActiveButtonClass(id) {
  document.getElementById(id).classList.add('buttonActive');
}

function removeActiveButtonClass(id) {
  document.getElementById(id).classList.remove('buttonActive');
}

function toggleSecondFunctions() {
  const buttonsContainer = document.getElementById('buttonsContainer');

  buttonsContainer.classList.toggle('second-function');
}

export { addActiveButtonClass, removeActiveButtonClass, toggleSecondFunctions };
