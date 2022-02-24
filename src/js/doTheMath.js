import { buttonObj } from './buttonsObj';
import { calculatorObj } from './calculatorObj';

function addToOperations(id) {
  if (calculatorObj.operationArr !== '') {
    calculatorObj.operationArr.push(buttonObj[id].mathjs());
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
  addToOperations, removeFromOperations, resetAll,
};
