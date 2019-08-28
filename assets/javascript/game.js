var compChoice = document.getElementById('computers-choice')
var userGuess = document.getElementById('user-guess');
var submit = document.getElementById('submit');
var userGuesses = document.getElementById('guesses')

function computer() {
  var alphabetLetters = ['a', 'b', 'c'];
  var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
  compChoice.innerHTML = computerGuess;

  if (computerGuess === userGuess.value) {
    alert('YES');
  } else {
    alert('NO');
  }

}


submit.addEventListener('click', () => {
  computer()

  var input = document.getElementById('user-guess')
  var ol = document.querySelector('ol');
  var li = document.createElement('li');

  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';

})

// var alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];