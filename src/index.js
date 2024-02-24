import readlineSync from 'readline-sync';

const generateRandomNum = (placeNumber = 10) => Math.round(Math.random() * placeNumber);

const generateRandomMinMax = (min, max) => Math.round(Math.random() * (max - min) + min);

const getAnswer = () => readlineSync.question('Your answer: ');

const compareAnswers = (corrAns, yourAns, userName) => {
  if (corrAns === yourAns) {
    console.log('Correct!');
  } else {
    console.log(`${yourAns} is wrong answer ;(. Correct answer was ${corrAns}.\nLet's try again, ${userName}!`);
    return false;
  }
};

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const generateRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const j = Math.floor(Math.random() * arr.length);
  return arr[j];
};

export {
  generateRandomNum, getAnswer, compareAnswers, congratulations, generateRandomOperator, generateRandomMinMax
};
