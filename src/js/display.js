import buttonObj from './buttonsObj';
import { calculatorObj } from './doTheMath';

const displayContentEl = document.getElementById('displayContent');

function addDisplayContent(id) {
  displayContentEl.innerText += buttonObj[id].mathjs;
}

function replaceDisplayContent(id) {
  displayContentEl.innerText += buttonObj[id].mathjs;
}

function updateDisplay(string) {
  if (string) displayContentEl.innerText = formatString(string);
  else if (calculatorObj.operationArr.length === 0) displayContentEl.innerText = 0;
  else displayContentEl.innerText = formatString(calculatorObj.operationArr.join(''));
}

function formatString(string) {
  return String(string).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { addDisplayContent, replaceDisplayContent, updateDisplay };
