import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange();
  const question = num;

  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};
