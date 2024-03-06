import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const generateRound = () => {
  const num = getRandomInRange(1, 10);
  const arr = [];
  const question = num;
  let answer;

  for (let j = 1; j <= num; j += 1) {
    if (num % j === 0) {
      arr.push(j);
    }
  }

  if (arr.length !== 2) {
    answer = 'no';
  } else {
    answer = 'yes';
  }

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};
