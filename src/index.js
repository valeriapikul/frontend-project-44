import readlineSync from 'readline-sync';

export const generateRandomNum = (placeNumber = 10) => Math.round(Math.random() * placeNumber);

export const generateRandomMinMax = (min, max) => Math.round(Math.random() * (max - min) + min);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswers = (corrAns, yourAns, userName) => {
  if (corrAns === yourAns) {
    console.log('Correct!');
  } else {
    console.log(`${yourAns} is wrong answer ;(. Correct answer was ${corrAns}.\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
};

export const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const generateRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const j = Math.floor(Math.random() * arr.length);
  return arr[j];
};
