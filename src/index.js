import readlineSync from 'readline-sync';

const generateRandomNum = () => {
    return Math.round(Math.random() * 10);
}

const getAnswer = () => {
    return readlineSync.question('Your answer: ');
}

const compareAnswers = (corrAns, yourAns, userName) => {
    if (corrAns === yourAns) {
        console.log('Correct!');
    } else {
        console.log(`${yourAns} is wrong answer ;(. Correct answer was ${corrAns}.\nLet's try again, ${userName}!`);
        return false;
    }
}

const congratulations = (userName) => {
    console.log(`Congratulations, ${userName}!`);
}

const generateRandomOperator = () => {
    const arr = ['+', '-', '*'];
    let j = Math.floor(Math.random() * arr.length);
    return arr[j];
}

export {generateRandomNum, getAnswer, compareAnswers, congratulations, generateRandomOperator};