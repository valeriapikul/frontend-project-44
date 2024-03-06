import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const generateRound = () => {
  const arr = [];
  const start = getRandomInRange();
  const step = getRandomInRange(1, 10);
  const step2 = getRandomInRange(0, 9);
  let progr;

  for (let j = start; j < start + step * 10; j += step) {
    arr.push(j);
  }

  for (let k = 0; k < arr.length; k += 1) {
    progr = arr[step2];
  }

  const str = arr.join(' ');
  const question = str.replace(progr, '..');
  const answer = String(progr);

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
