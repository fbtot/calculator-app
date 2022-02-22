import { mathjs } from './vendor';
import { buttonObj } from './buttonsObj';

const calculatorObj = {
  operationArr: [],
  result() { return mathjs.evaluate(this.operationArr.join('')); },
  state: 'stop',
  function: false,
  depthIndex: 0,
};

function addToOperations(id) {
  if (calculatorObj.operationArr !== '') {
    calculatorObj.operationArr.push(buttonObj[id].mathjs);
  }
}

function removeFromOperations() {
  calculatorObj.operationArr.pop();
}

// function doTheMath() {
//   return calculatorObj.result();
// }

function resetAll() {
  calculatorObj.operationArr.splice(0, calculatorObj.operationArr.length);
  calculatorObj.state = 'stop';
}

export {
  calculatorObj, addToOperations, removeFromOperations, resetAll,
};
