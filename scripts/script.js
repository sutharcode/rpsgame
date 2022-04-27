'use strict';

const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

const weaponsContainer = document.getElementById('weapons-container');
const userWeaponEl = document.getElementById('user-weapon');
const computerWeaponEl = document.getElementById('computer-weapon');

const resultContainer = document.getElementById('result-container');
const resultEl = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

let userChoice = '';
let computerChoice = '';

const weapons = ['rock', 'paper', 'scissors'];

const init = function () {
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

const displayWeapons = function () {
  weapons.forEach((weapon) => {
    const weaponEl = document.createElement('button');

   
    weaponEl.classList.add('weapon');

    weaponEl.setAttribute('value', `${weapon}`);
    weaponEl.innerHTML = `<img src ="./assets/${weapon}.png" alt ="${weapon}"/>`;

    weaponsContainer.appendChild(weaponEl);
  });
};


const showResult = function (userChoice, computerChoice, result) {
  resultContainer.classList.add('show');
  userWeaponEl.textContent = userChoice.toUpperCase();
  computerWeaponEl.textContent = computerChoice.toUpperCase();

  if (result === 'draw') {
    resultEl.textContent = 'Game Draw';
  } else if (result === 'win') {
    resultEl.textContent = 'You Won';
    userScore++;
  } else if (result === 'lost') {
    resultEl.textContent = 'You Lost';
    computerScore++;
  }

  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

const getResult = function (userChoice, computerChoice) {
  let resultString = `${userChoice}${computerChoice}`;
  if (userChoice === computerChoice) {
    showResult(userChoice, computerChoice, 'draw');
  } else if (
    resultString === 'rockscissors' ||
    resultString === 'paperrock' ||
    resultString === 'scissorspaper'
  ) {
    
    showResult(userChoice, computerChoice, 'win');
  } else if (
    resultString === 'scissorsrock' || resultString === 'rockpaper' || resultString === 'paperscissors'
  ) {
   
    showResult(userChoice, computerChoice, 'lost');
  }
};

init();

displayWeapons();

document.querySelectorAll('button').forEach((weapon) => {
  
  weapon.addEventListener('click', () => {
    userChoice = weapon.value;
    computerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

    getResult(userChoice, computerChoice);
  });
});