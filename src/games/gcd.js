import
runEngine
  from '../index.js';

import
getRandomInRange
  from '../utils.js';

const getDivivsors = (num) => {
  const array = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
};

const compareArrays = (array1, array2) => {
  const array3 = [];

  for (let k = 0; k < array1.length; k += 1) {
    for (let m = 0; m < array2.length; m += 1) {
      if (array1[k] === array2[m]) {
        array3.push(array1[k]);
      }
    }
  }

  return array3;
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 99);
  const num2 = getRandomInRange(1, 99);

  const array1 = getDivivsors(num1);
  const array2 = getDivivsors(num2);

  const array = compareArrays(array1, array2);

  const question = `${num1} ${num2}`;
  const answer = String(Math.max(...array));

  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
