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
  formatDependencies,
} from 'mathjs';
import MicroModal from 'micromodal';

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
});

const { format } = create({ formatDependencies });

MicroModal.init();

export { evaluate, format };
