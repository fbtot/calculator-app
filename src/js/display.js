import buttonObj from './buttonsObj';
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

// TODO: la regex non va bene, mostra la dvisione tra le migliaia anche dopo la virgola.
function formatString(string) {
  return String(string)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    .replaceAll('(', '<span class="highlight--bg">(')
    .replaceAll(')', ')</span>');
}

export { addDisplayContent, replaceDisplayContent, updateDisplay };

// TODO: trovare un modo per evidenziare i numeri tra parentesi.
