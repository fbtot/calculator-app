import '../css/normalize.css';
import {
  create,
  sqrtDependencies,
  evaluateDependencies,
  invDependencies,
  sinDependencies,
  cosDependencies,
  tanDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  powDependencies,
  factorialDependencies,
  logDependencies,
  piDependencies,
  eDependencies,
  cbrtDependencies,
  sinhDependencies,
  coshDependencies,
  tanhDependencies,
  randomDependencies,
  log10Dependencies,
  asinDependencies,
  acosDependencies,
  atanDependencies,
  asinhDependencies,
  acoshDependencies,
  atanhDependencies,

} from 'mathjs';

const config = {
  angles: 'deg',

};

const { evaluate } = create({
  sqrtDependencies,
  evaluateDependencies,
  invDependencies,
  sinDependencies,
  cosDependencies,
  tanDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  powDependencies,
  factorialDependencies,
  logDependencies,
  piDependencies,
  eDependencies,
  cbrtDependencies,
  sinhDependencies,
  coshDependencies,
  tanhDependencies,
  randomDependencies,
  log10Dependencies,
  asinDependencies,
  acosDependencies,
  atanDependencies,
  asinhDependencies,
  acoshDependencies,
  atanhDependencies,
}, config);

export { evaluate };
