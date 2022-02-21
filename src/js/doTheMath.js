import * as mathjs from 'mathjs';
import buttonsObj from './buttonsObj';

const calculatorObj = {
  operationArr: [],
  result() { return mathjs.evaluate(this.operationArr.join('')); },
  state: 'stop',
};

function addToOperations(id) {
  calculatorObj.operationArr.push(buttonsObj[id].mathjs);
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
