import readlineSync from 'readline-sync';

const ifEven = () => {

    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i = i + 1) {

        let num = Math.round(Math.random(101) * 100);

        console.log(`Question: ${num}`);

        const answer = readlineSync.question('Your answer: ');

        if (num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
        } else if (num % 2 === 0 && answer === 'no') {
            console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
            return false;
        } else if (num % 2 !== 0 && answer === 'yes') {
            console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
            return false;
        } else {
            console.log(`${answer} is wrong answer ;(.\nLet's try again, ${name}!`);
            return false;
        }
    }

    console.log(`Congratulations, ${name}!`);

}

export default ifEven;