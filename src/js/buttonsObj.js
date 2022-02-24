import { calculatorObj } from './calculatorObj';

import { addNextActionButton } from './keyboard';

function openFunction(name) {
  // calculatorObj.function = true;
  return `${name}(`;
}

function openFunctionAngles(name) {
  if (calculatorObj.angle === 'deg') {
    addNextActionButton();
  }
  return openFunction(name);
}

function openCloseFunction(name) {
  return `${name}()`;
}

const buttonObj = {
  openParenthesis: {
    mathjs() { return '('; },
    scientific: true,
    display: '',
  },
  closeParenthesis: {
    mathjs() { return ')'; },
    scientific: true,
    display: '',
  },
  cancelMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  addToMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  subtractFromMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  recallMemory: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  seven: {
    mathjs() { return '7'; },
    scientific: false,
    display: '7',
  },
  eight: {
    mathjs() { return '8'; },
    scientific: false,
    display: '8',
  },
  nine: {
    mathjs() { return '9'; },
    scientific: false,
    display: '9',
  },
  delete: {
    mathjs() { return ''; },
    scientific: false,
    display: '',
  },
  secondFunction: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  powerOfTwo: {
    mathjs() { return '^2'; },
    scientific: true,
    display: '',
  },
  powerOfThree: {
    mathjs() { return '^3'; },
    scientific: true,
    display: '',
  },
  powerOfY: {
    mathjs() { return '^'; },
    scientific: true,
    display: '',
  },
  eToX: {
    mathjs() { return 'e^'; },
    scientific: true,
    display: '',
  },
  tenX: {
    mathjs() { return '10^'; },
    scientific: true,
    display: '',
  },
  four: {
    mathjs() { return '4'; },
    scientific: false,
    display: '4',
  },
  five: {
    mathjs() { return '5'; },
    scientific: false,
    display: '5',
  },
  six: {
    mathjs() { return '6'; },
    scientific: false,
    display: '6',
  },
  plus: {
    mathjs() { return '+'; },
    scientific: false,
    display: '+',
  },
  inverse: {
    mathjs() { openFunction('inv'); },
    scientific: true,
    display: '-',
  },
  squareRoot: {
    mathjs() { return openFunction('sqrt'); },
    scientific: true,
    display: '',
  },
  cubicRoot: {
    mathjs() { openFunction('cbrt'); },
    scientific: true,
    display: '',
  },
  // TODO: aggiungere tooltip che spiegano il funzionamento di verti tasti
  yRoot: {
    mathjs() { openFunction('nthRoot'); },
    scientific: true,
    display: '',
  },
  in: {
    mathjs() { openFunction('log'); },
    scientific: true,
    display: '',
  },
  /* TODO: dato che in mathjs la base del logaritmo va sempre specificata,
  non seve assegnare più di un tasto ai logaritmi */
  logTen: {
    mathjs() { openFunction('log10'); },
    scientific: true,
    display: '',
  },
  one: {
    mathjs() { return '1'; },
    scientific: false,
    display: '1',
  },
  two: {
    mathjs() { return '2'; },
    scientific: false,
    display: '2',
  },
  three: {
    mathjs() { return '3'; },
    scientific: false,
    display: '3',
  },
  minus: {
    mathjs() { return '-'; },
    scientific: false,
    display: '-',
  },
  factorial: {
    mathjs() { return '!'; },
    scientific: true,
    display: '',
  },
  sin: {
    mathjs() { return openFunctionAngles('sin'); },
    scientific: true,
    display: '',
  },
  cos: {
    mathjs() { openFunctionAngles('cos'); },
    scientific: true,
    display: '',
  },
  tan: {
    mathjs() { openFunctionAngles('tan'); },
    scientific: true,
    display: '',
  },
  asin: {
    mathjs() { openFunctionAngles('asin'); },
    scientific: true,
    display: '',
  },
  acos: {
    mathjs() { openFunctionAngles('acos'); },
    scientific: true,
    display: '',
  },
  atan: {
    mathjs() { openFunctionAngles('atan'); },
    scientific: true,
    display: '',
  },
  eulersNumber: {
    mathjs() { return 'e'; },
    scientific: true,
    display: '',
  },
  // TODO: si potrebbe togliere
  exponentialNotation: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  comma: {
    mathjs() { return '.'; },
    scientific: false,
    display: '.',
  },
  zero: {
    mathjs() { return '0'; },
    scientific: false,
    display: '0',
  },
  divide: {
    mathjs() { return '/'; },
    scientific: false,
    display: '/',
  },
  multiply: {
    mathjs() { return '*'; },
    scientific: false,
    display: '*',
  },

  // TODO: si potrebbe togliere
  radial: {
    mathjs() { return ''; },
    scientific: true,
    value: false,
    display: '',
  },
  sinh: {
    mathjs() { openFunctionAngles('sinh'); },
    scientific: true,
    display: '',
  },
  cosh: {
    mathjs() { openFunctionAngles('cosh'); },
    scientific: true,
    display: '',
  },
  tanh: {
    mathjs() { openFunctionAngles('tanh'); },
    scientific: true,
    display: '',
  },
  asinh: {
    mathjs() { openFunctionAngles('asinh'); },
    scientific: true,
    display: '',
  },
  acosh: {
    mathjs() { openFunctionAngles('acosh'); },
    scientific: true,
    display: '',
  },
  atanh: {
    mathjs() { openFunctionAngles('atanh'); },
    scientific: true,
    display: '',
  },
  pi: {
    mathjs() { return 'pi'; },
    scientific: true,
    display: '',
  },
  random: {
    mathjs() { openCloseFunction('random'); },
    scientific: true,
    display: '',
  },
  percentage: {
    mathjs() { return '%'; },
    scientific: true,
    display: '',
  },
  invertNumber: {
    mathjs() { return ''; },
    scientific: true,
    display: '',
  },
  reset: {
    mathjs() { return ''; },
    scientific: false,
    display: '',
  },
  equal: {
    mathjs() { return '(-)'; },
    scientific: false,
    display: '',
  },
};

export { buttonObj };
