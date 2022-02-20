import buttonObj from './buttonsObj';

const displayContentEl = document.getElementById('displayContent');

function addDisplayContent(id) {
  displayContentEl.innerText += buttonObj[id].mathjs;
}

function replaceDisplayContent(id) {
  displayContentEl.innerText += buttonObj[id].mathjs;
}

export { addDisplayContent, replaceDisplayContent };
