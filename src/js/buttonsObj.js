// import { calculatorObj } from './doTheMath';

function openFunction(name) {
  // calculatorObj.function = true;
  return `${name}(`;
}

const buttonObj = {
  openParenthesis: {
    mathjs: '(',
    scientific: true,
    display: '',
  },
  closeParenthesis: {
    mathjs: ')',
    scientific: true,
    display: '',
  },
  cancelMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  addToMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  subtractFromMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  recallMemory: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  seven: {
    mathjs: '7',
    scientific: false,
    display: '7',
  },
  eight: {
    mathjs: '8',
    scientific: false,
    display: '8',
  },
  nine: {
    mathjs: '9',
    scientific: false,
    display: '9',
  },
  delete: {
    mathjs: '',
    scientific: false,
    display: '',
  },
  secondFunction: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  powerOfTwo: {
    mathjs: '^2',
    scientific: true,
    display: '',
  },
  powerOfThree: {
    mathjs: '^3',
    scientific: true,
    display: '',
  },
  powerOfY: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  eToX: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  tenX: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  four: {
    mathjs: '4',
    scientific: false,
    display: '4',
  },
  five: {
    mathjs: '5',
    scientific: false,
    display: '5',
  },
  six: {
    mathjs: '6',
    scientific: false,
    display: '6',
  },
  plus: {
    mathjs: '+',
    scientific: false,
    display: '+',
  },
  inverse: {
    mathjs: '',
    scientific: true,
    display: '-',
  },
  squareRoot: {
    mathjs: openFunction('sqrt'),
    scientific: true,
    display: '',
  },
  cubicRoot: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  yRoot: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  in: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  logTen: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  one: {
    mathjs: '1',
    scientific: false,
    display: '1',
  },
  two: {
    mathjs: '2',
    scientific: false,
    display: '2',
  },
  three: {
    mathjs: '3',
    scientific: false,
    display: '3',
  },
  minus: {
    mathjs: '-',
    scientific: false,
    display: '-',
  },
  factorial: {
    mathjs: '!',
    scientific: true,
    display: '',
  },
  sin: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  cos: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  tan: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  eulersNumber: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  exponentialNotation: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  comma: {
    mathjs: '.',
    scientific: false,
    display: '.',
  },
  zero: {
    mathjs: '0',
    scientific: false,
    display: '0',
  },
  divide: {
    mathjs: '/',
    scientific: false,
    display: '/',
  },
  multiply: {
    mathjs: '*',
    scientific: false,
    display: '*',
  },
  radial: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  sinh: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  cosh: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  tanh: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  pi: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  random: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  percentage: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  invertNumber: {
    mathjs: '',
    scientific: true,
    display: '',
  },
  reset: {
    mathjs: '',
    scientific: false,
    display: '',
  },
  equal: {
    mathjs: '',
    scientific: false,
    display: '',
  },
};

export { buttonObj };
