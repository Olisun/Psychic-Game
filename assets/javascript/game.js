// Creating varialbes for the DOM method that grabs the specific HTML element specified by their id.
var compChoice = document.getElementById('computers-choice')
var userGuess = document.getElementById('user-guess');
var submit = document.getElementById('submit');
var userGuesses = document.getElementById('guesses');
var userWins = document.getElementById('user-wins');
var userLosses = document.getElementById('user-losses');

// Creating variables for the number of wins and losses with the starting point being 0.
var wins = 0;
var losses = 0;

// Creating a function that first places the letters in-play into an array. 
function computer() {
  // Creating a variable that places the letters in-play into an array.
  var alphabetLetters = ['a', 'b'];
  // Creating a variable for the letter that the computer picks. Math.floor(Math.random() is a built-in method in which the computer will randomly pick a value from a select data set. In this case it is the array assigned to "alphabetLetters".
  var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
  // Creating an if/else statement that says if the random letter the computer picks equals (value and value-type, hence the "===") the letter the user picks, then increment total wins by 1. If the letters don't equal, the increment the total losses by 1. The .value associated with var userGuess specifics the specific key that is entered in the form inout field.
  if (computerGuess === userGuess.value) {
    wins++;
  } else {
    losses++;
  }
  // This will print to the DOM the number of wins, losses and display what the computer actually picked plus the messages in front of the variables.
  userWins.innerHTML = `Your win total is: ${wins}`;
  userLosses.innerHTML = `Your loss total is ${losses}`;
  compChoice.innerHTML = `The computer picked ${computerGuess}.`
}

// This is an event function that listens for the user clicking the "Submit" button. After the button is clicked, the fuunction computer() is called and the instructions are run.
submit.addEventListener('click', () => {
  computer();
  // creating variables 
  var input = document.getElementById('user-guess')
  var ol = document.querySelector('ol');
  var li = document.createElement('li');
  // This will take what the user inputted as their guess and append it to a newly created ordered list in the DOM so the user knows what he/she has entered.
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';



})

// var alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];