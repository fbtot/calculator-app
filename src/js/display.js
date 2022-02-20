import { buttonObj } from './buttonsObj';

const displayContentEl = document.getElementById('displayContent');

function displayContent(id) {
  console.log(buttonObj[id].mathjs);
  if (displayContentEl.innerText === '0') displayContentEl.innerText = buttonObj[id].mathjs;
  else displayContentEl.innerText += buttonObj[id].mathjs;
}

export { displayContent };
