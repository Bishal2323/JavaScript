'use strict';
// console.log(document.querySelector('.message'));

// document is the entry point object for the dom
// dom is complete overview of the html

// document.querySelector('.message').textContent = 'Correct Number';
// // changed the message in the p class of id message

// document.querySelector('.message').textContent;

// document.querySelector('.label-score').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Note 2 : just learned how to select and also how to change the text content and how to modify the values learned about query selector , textContent , value

let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunch removes the extra number
document.querySelector('.number').textContent = '?';
// // showing the number to the screen
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // don;t have to use this again and again
};

document.querySelector('.check').addEventListener('click', function () {
  // what happens after the click
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No value entered ! ';
  } else if (guess === secretNumber) {
    // when number is equal
    displayMessage('pp Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      //determining the highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   score > secretNumber ? 'Your number is high !' : 'Your number is low';

      displayMessage(
        score > secretNumber ? 'Your number is high !' : 'Your number is low'
      );
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = ''; // remove the incorrect number from code
    } else {
      // document.querySelector('.message').textContent = 'You loose !';
      displayMessage('You loose !');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   // when the guess is hilgher than the number
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Your number is high !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You loose !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   // when the number is lower than the number
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Your number is low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You loose !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //while(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';

  console.log(secretNumber);
  document.querySelector('.guess').value = '';

  //}
});

// dry principle  = don;t repeat yourself
