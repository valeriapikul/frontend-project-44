import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const isPrime = (num) => {
  const arr = [];

  for (let j = 1; j <= num; j += 1) {
    if (num % j === 0) {
      arr.push(j);
    }
  }

  return arr;
};

const generateRound = () => {
  const num = getRandomInRange(1, 10);
  const question = num;

  const array = isPrime(num);

  const answer = array.length !== 2 ? 'no' : 'yes';

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};
