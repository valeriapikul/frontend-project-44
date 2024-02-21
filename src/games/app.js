import greeting from '../cli.js';
import {
  generateRandomNum, getAnswer, compareAnswers, congratulations,
} from '../index.js';

const ifEven = () => {
  const user = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = generateRandomNum();

    console.log(`Question: ${num}`);

    let correctAnswer;

    if (num % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const yourAnswer = getAnswer();

    const isLose = compareAnswers(correctAnswer, yourAnswer, user);

    if (isLose === false) {
      return false;
    }
  }

  congratulations(user);
};

export default ifEven;
