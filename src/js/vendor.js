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
} from 'mathjs';

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
});

export { evaluate };
