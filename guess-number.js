//задание 2

const readline = require('readline');

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const secretNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Загадано число в диапазоне от ${MIN_NUMBER} до ${MAX_NUMBER}`);

const guessNumber = (guess) => {
  if (guess === secretNumber) {
    console.log(`Отгадано число ${secretNumber}`);
    rl.close();
  } else if (guess < secretNumber) {
    console.log('Больше');
  } else {
    console.log('Меньше');
  }
};

rl.on('line', (input) => {
  const guess = parseInt(input);
  if (isNaN(guess)) {
    console.log('Пожалуйста, введите число');
  } else {
    guessNumber(guess);
  }
});
