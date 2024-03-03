import readlineSync from 'readline-sync';

// export const generateRandomNum = (placeNumber = 10) => Math.round(Math.random() * placeNumber);

// export const generateRandomMinMax = (min, max) => Math.round(Math.random() * (max - min) + min);

// export const getAnswer = () => readlineSync.question('Your answer: ');

// export const compareAnswers = (corrAns, yourAns, userName) => {
//   if (corrAns === yourAns) {
//     console.log('Correct!');
//   } else {
//     console.log(`${yourAns} is wrong answer ;(. Correct answer was ${corrAns}.\nLet's try again, ${userName}!`);
//     return false;
//   }
//   return true;
// };

// export const congratulations = (userName) => {
//   console.log(`Congratulations, ${userName}!`);
// };

// export const generateRandomOperator = () => {
//   const arr = ['+', '-', '*'];
//   const j = Math.floor(Math.random() * arr.length);
//   return arr[j];
// };




const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const [question, answer] = generateRound();

    console.log(question);

    answer =  readlineSync.question('Your answer: ');

    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${question}.\nLet's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
}