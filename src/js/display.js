import { buttonObj } from './buttonsObj';
import { calculatorObj } from './calculatorObj';

const displayContentEl = document.getElementById('displayContent');

function addDisplayContent(id) {
  displayContentEl.innerHTML += buttonObj[id].mathjs;
}

function replaceDisplayContent(id) {
  displayContentEl.innerHTML += buttonObj[id].mathjs;
}

function updateDisplay(string) {
  if (string) displayContentEl.innerHTML = formatString(string);
  else if (calculatorObj.operationArr.length === 0 || string == 0) displayContentEl.innerHTML = 0;
  else displayContentEl.innerHTML = formatString(calculatorObj.operationArr.join(''));
}

function readDisplayContent() {
  return displayContentEl.innerText;
}

function formatString(string) {
  return String(string)
    .replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    .replaceAll('(', '<span class="highlight--bg">(')
    .replaceAll(')', ')</span>');
}

function displayMemory() {
  displayMemoryVisibility();
  updateMemoryDisplay();
}

function displayMemoryVisibility() {
  const displayMemoryContainer = document.getElementsByClassName('display__memory')[0];

  if (calculatorObj.memory === 0) {
    displayMemoryContainer.classList.remove('visible');
  } else {
    displayMemoryContainer.classList.add('visible');
  }
}

function updateMemoryDisplay() {
  const displayContent = document.getElementById('displayMemoryContent');
  displayContent.innerText = formatString(calculatorObj.memory);
}

export {
  addDisplayContent,
  replaceDisplayContent,
  updateDisplay,
  readDisplayContent,
  displayMemory,
};
