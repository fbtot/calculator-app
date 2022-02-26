import { evaluate, format } from './vendor';

const calculatorObj = {
  operationArr: [],
  result() { return evaluate(this.operationArr.join('').toString()); },
  resultEE() { return format(this.result(), { notation: 'exponential' }); },
  state: 'stop',
  angle: 'rad',
  memory: '0',
};

export { calculatorObj };
