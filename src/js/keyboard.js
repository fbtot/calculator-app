function addActiveButtonClass(id) {
  document.getElementById(id).classList.add('buttonActive');
}

function removeActiveButtonClass(id) {
  document.getElementById(id).classList.remove('buttonActive');
}

function toggleSecondFunctions() {
  const secondFunctionBtn = document.getElementById('secondFunction');
  const buttonsContainer = document.getElementById('buttonsContainer');

  secondFunctionBtn.addEventListener('click', () => {
    buttonsContainer.classList.toggle('second-function');
  });
}

export { addActiveButtonClass, removeActiveButtonClass, toggleSecondFunctions };
