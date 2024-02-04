'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// score 0 dom element
const score0 = document.querySelector('#score--0');
//score 1 dom element
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let scores = [0, 0];


//Still playing the game
let playing = true;

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

//Function for resetting all variables
const init = function () {

}

//This keeps track of the active player
let activePlayer = 0;

let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;

diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {

    if (playing) {
        // Generates a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //Displays dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check if we got 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        //Switch to next player
        else {
            switchPlayer();
        }
    }
})


btnHold.addEventListener('click', function () {

    if (playing) {

        //Add current score to active player's score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');


        }
        // If true, finish game
        else {
            //else, switch players
            switchPlayer();
        }


    }
})

btnNew.addEventListener('click', function () {

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
    score0.textContent = 0
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    activePlayer = 0;
    playing = true;
    currentScore = 0;
    scores = [0, 0];


})