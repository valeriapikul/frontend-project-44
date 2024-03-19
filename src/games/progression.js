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

  const progression = generateProgression(start, step, 10);

  const hiddenIndex = getRandomInRange(0, progression.length - 1);

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
