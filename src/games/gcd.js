import greeting from '../cli.js';
import {
  generateRandomNum, getAnswer, compareAnswers, congratulations,
} from '../index.js';

const findDivisor = () => {
  const user = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const numberFirst = generateRandomNum(100);
    const numberSecond = generateRandomNum(100);
    const array1 = [];
    const array2 = [];
    const array3 = [];

    console.log(`Question: ${numberFirst} ${numberSecond}`);

    for (let n = 1; n <= numberFirst; n += 1) {
      if (numberFirst % n === 0) {
        array1.push(n);
      }
    }
    for (let j = 1; j <= numberFirst; j += 1) {
      if (numberSecond % j === 0) {
        array2.push(j);
      }
    }

    for (let k = 0; k < array1.length; k += 1) {
      for (let m = 0; m < array2.length; m += 1) {
        if (array1[k] === array2[m]) {
          array3.push(array1[k]);
        }
      }
    }

    const correctAnswer = Math.max(...array3);

    const yourAnswer = Number(getAnswer());

    const isLose = compareAnswers(correctAnswer, yourAnswer, user);

    if (isLose === false) {
      return false;
    }
  }

  congratulations(user);
  return true;
};

export default findDivisor;
