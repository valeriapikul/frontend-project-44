import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomInRange();
  const step = getRandomInRange(1, 10);
  const step2 = getRandomInRange(0, 9);
  let progr;

  const arr = generateProgression(start, step, 10);

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
