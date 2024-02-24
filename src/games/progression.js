import greeting from '../cli.js';
import {
    generateRandomNum, getAnswer, compareAnswers, congratulations, generateRandomMinMax
} from '../index.js';

const findMissingNum = () => {
    const user = greeting();

    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i += 1) {
        const arr = [];
        const start = generateRandomNum(100);
        const step = generateRandomMinMax(1, 10);
        let step2 = generateRandomNum(9);
        let correctAnswer;

        for (let j = start; j < start + step * 10; j += step) {
            arr.push(j);
        }

        for (let k = 0; k < arr.length; k += 1) {
            correctAnswer = arr[step2];
        }

        const str = arr.join(' ');
        const repl = str.replace(correctAnswer, '..');

        console.log(`Question: ${repl}`);

        const yourAnswer = Number(getAnswer());

        const isLose = compareAnswers(correctAnswer, yourAnswer, user);

        if (isLose === false) {
            return false;
        }
    }

    congratulations(user);
};

export default findMissingNum;
