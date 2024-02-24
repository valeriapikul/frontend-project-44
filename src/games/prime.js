import greeting from '../cli.js';
import {
    generateRandomMinMax, getAnswer, compareAnswers, congratulations,
} from '../index.js';

const ifPrime = () => {
    const user = greeting();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const num = generateRandomMinMax(1, 10);

        console.log(`Question: ${num}`);

        let correctAnswer;
        let arr = [];

        for (let j = 1; j <= num; j = j + 1) {
            if (num % j === 0) {
                arr.push(j);
            }
        }

        if (arr.length !== 2) {
            correctAnswer = 'no';

        } else {
            correctAnswer = 'yes';
        }

        const yourAnswer = getAnswer();

        const isLose = compareAnswers(correctAnswer, yourAnswer, user);

        if (isLose === false) {
            return false;
        }
    }

    congratulations(user);
};

export default ifPrime;
