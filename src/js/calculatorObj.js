import { evaluate } from './vendor';

const calculatorObj = {
  operationArr: [],
  result() { return evaluate(this.operationArr.join('')); },
  state: 'stop',
  angle: 'rad',
};

export { calculatorObj };
