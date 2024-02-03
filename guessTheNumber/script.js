'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 21);

let score = 20;
let reset = false;
let highScore = 0;

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 21);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    score = 20;

})


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When ther is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }

    // When the player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

    }

    // When the guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    }

    // When the guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    }
});