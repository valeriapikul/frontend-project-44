import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const generateRound = () => {
  const num = getRandomInRange();
  const question = `${num}`;
  let answer;

  if (num % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};
