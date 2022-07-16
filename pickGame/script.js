'use strict';


const score0el = document.getElementById('score--0');
const score1el = document.getElementById('score--1');
const dice_rool = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const current = document.querySelector('.current-score');
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');


//variabes

let scores = [0.0];
let current_score = 0;
let active_player = 0;
let playing = true;


score0el.textContent = 0;
score1el.textContent = 0;
dice_rool.classList.add('hidden');
document.querySelectorAll('.current-score').textContent = 0;



//action lister on rool dice'

btn_roll.addEventListener('click', function () {
    if (playing) {


        let num = Math.trunc(Math.random() * 6) + 1;

        //showing dice
        dice_rool.classList.remove('hidden');
        dice_rool.src = `dice-${num}.png`;


        //checking the condtion
        if (num !== 1) {
            current_score += num;
            document.getElementById(`current--${active_player}`).textContent = current_score;


        }
        else {

            document.getElementById(`current--${active_player}`).textContent = 0;
            active_player = active_player === 0 ? 1 : 0;
            current_score = 0;
            player0el.classList.toggle('player--active');
            player1el.classList.toggle('player--active');

        }
    }


})

btn_hold.addEventListener('click', function () {
    //add the score
    if (playing) {


        let ll = Number(document.querySelector(`#score--${active_player}`).textContent);

        ll += current_score;
        document.querySelector(`#score--${active_player}`).textContent = ll;

        if (ll >= 20) {
            playing = false;
            document.querySelector('.dice').classList.add('hidden');
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');

            document.querySelector(`.player--${active_player}`).classList.remove('player--active');

        }

        else {

            document.getElementById(`current--${active_player}`).textContent = 0;
            active_player = active_player === 0 ? 1 : 0;
            current_score = 0;
            player0el.classList.toggle('player--active');
            player1el.classList.toggle('player--active');
        }
    }







    //change the player

});

btn_new.addEventListener('click', function () {
    scores = [0, 0];
    current_score = 0;
    active_player = 0;
    playing = true;


    score0el.textContent = 0;
    score1el.textContent = 0;
    document.querySelectorAll('.current-score').textContent = 0;
    dice_rool.classList.add('hidden');

    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--winner');

    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');




})

