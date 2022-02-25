import { evaluate, format } from './vendor';

const calculatorObj = {
  operationArr: [],
  result() { return evaluate(this.operationArr.join('')); },
  resultEE() { return format(this.result(), { notation: 'exponential' }); },
  state: 'stop',
  angle: 'rad',
};

export { calculatorObj };
