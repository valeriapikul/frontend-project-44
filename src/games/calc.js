import greeting from '../cli.js';
import {
  generateRandomNum, getAnswer, compareAnswers, congratulations, generateRandomOperator,
} from '../index.js';

const expression = () => {
  const user = greeting();

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const numberFirst = generateRandomNum();
    const numberSecond = generateRandomNum();
    const operator = generateRandomOperator();

    const expr = `${numberFirst} ${operator} ${numberSecond}`;

    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = numberFirst + numberSecond;
        break;
      case '-':
        correctAnswer = numberFirst - numberSecond;
        break;
      case '*':
        correctAnswer = numberFirst * numberSecond;
        break;
      default:
        return false;
    }

    console.log(`Question: ${expr}`);

    const yourAnswer = Number(getAnswer());

    const isLose = compareAnswers(correctAnswer, yourAnswer, user);

    if (isLose === false) {
      return false;
    }
  }

  congratulations(user);
  return true;
};

export default expression;
