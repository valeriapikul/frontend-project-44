import greeting from '../cli.js';
import { generateRandomNum, getAnswer, compareAnswers, congratulations, generateRandomOperator } from '../index.js';

const expression = () => {

    let user = greeting();

    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i = i + 1) {

        let numberFirst = generateRandomNum();
        let numberSecond = generateRandomNum();
        let operator = generateRandomOperator();

        let expr = `${numberFirst} ${operator} ${numberSecond}`;

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
        }

        console.log(`Question: ${expr}`);

        let yourAnswer = Number(getAnswer()); 

        const isLose = compareAnswers(correctAnswer, yourAnswer, user);

        if (isLose === false) {
            return false;
        }
    }

    congratulations(user);

}

export default expression;