import { buttonObj } from './buttonsObj';
import { calculatorObj } from './doTheMath';

const displayContentEl = document.getElementById('displayContent');

function addDisplayContent(id) {
  displayContentEl.innerHTML += buttonObj[id].mathjs;
}

function replaceDisplayContent(id) {
  displayContentEl.innerHTML += buttonObj[id].mathjs;
}

function updateDisplay(string) {
  if (string) displayContentEl.innerHTML = formatString(string);
  else if (calculatorObj.operationArr.length === 0) displayContentEl.innerHTML = 0;
  else displayContentEl.innerHTML = formatString(calculatorObj.operationArr.join(''));
}

function formatString(string) {
  return String(string)
    .replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    .replaceAll('(', '<span class="highlight--bg">(')
    .replaceAll(')', ')</span>');
}

export { addDisplayContent, replaceDisplayContent, updateDisplay };
