import readlineSync from 'readline-sync';
import greeting from './cli.js';

const generateRandomNum = () => {
    return Math.round(Math.random(11) * 100);
}

const getAnswer = () => {
    return readlineSync.question('Your answer: ');
}

const compareAnswers = () => {
    if (correctAnswer === yourAnswer) {
        console.log('Correct!');
    } else {
        console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${user}!`);
        return false;
    }
}

let correctAnswer;
let yourAnswer;
let user;

const ifEven = () => {

    user = greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i = i + 1) { 

        let num = generateRandomNum();

        console.log(`Question: ${num}`);

        if (num % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }

        yourAnswer = getAnswer();

        compareAnswers();

    }

    console.log(`Congratulations, ${user}!`);

}

export default ifEven;