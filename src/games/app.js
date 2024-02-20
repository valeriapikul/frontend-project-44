import greeting from '../cli.js';
import { generateRandomNum, getAnswer, compareAnswers, congratulations } from '../index.js';

const ifEven = () => {

    let user = greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i = i + 1) {

        let num = generateRandomNum();

        console.log(`Question: ${num}`);

        let correctAnswer;

        if (num % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }

        let yourAnswer = getAnswer();

        const isLose = compareAnswers(correctAnswer, yourAnswer, user);

        if (isLose === false) {
            return false;
        }

    }

    congratulations(user);

}

export default ifEven;