// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialC = ["@", "!", "#","$","%","^","&","*","&","*","(",")", ",", ".", "/", ";", "[", "]", "-", "=", "+", "~", "<", ">", "?"];
var wordsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var wordsUpper = wordsLower.map(function(x){ return x.toUpperCase(); });
var numbersMinor = ["0","1","2","3","4","5","6","7","8","9"];
// var numbersMinor = []; for (var i = 0; i <= 9; i++) {numbersMinor.push(i)};
var boss;

var uppcaseCount = 0;
var lowercaseCount = 0;
var specialChaCount = 0;
var numberNumberCount = 0;
var secondAns;
var thirdAns;
var forthAns;
var fifthAns;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function secondQuestion() {
  if (secondAns = true) {
    uppcaseCount = 1;
    boss = [].concat(wordsUpper);
  } else {
    uppcaseCount;
  }
}
function thirdQuestion() {
  if (thirdAns = true) {
    lowercaseCount = 1;
    boss = [].concat(boss, wordsLower);
  } else {
    lowercaseCount;
  }
}
function forthQuestion() {
  if (forthAns = true) {
    specialChaCount = 1;
    boss = [].concat(boss, specialC);
  } else {
    specialChaCount;
  }
}
function fifthQuestion() {
  if (fifthAns = true) {
    numberNumberCount = 1;
    boss = [].concat(boss, numbersMinor);
  } else {
    numberNumberCount;
  }
}

function shuffleEq(chain) {
  for (let i = chain.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chain[i], chain[j]] = [chain[j], chain[i]];
  }
  return chain;
}

function generatePassword() {
  var input = parseInt(prompt("How many of charaters would you like your password to be? (in range between 8 and 128)"));
  if (!input) {
    alert("you have to choose a valid number between 8 and 128")
  } else if (input => 8 || input <= 128) {
    if (
      secondAns = confirm("include uppercase?"))
      {
        secondQuestion();
      }
    if (
      thirdAns = confirm("include lowercase?")
    ) {
      thirdQuestion()
    }
    if (
      forthAns = confirm("with speical charater?")
    ) {
      forthQuestion()
    }
    if (
      fifthAns = confirm("with number?")
    ) {
      fifthQuestion()
    }

      }
  var peopleChoice = uppcaseCount + lowercaseCount + specialChaCount + numberNumberCount;

  if (peopleChoice == 0) {
    alert ("try again! at least one criteria")
  } else {
    console.log(shuffleEq(boss));
  var finalBoss = shuffleEq(boss).slice(0,input);
  }
  return finalBoss.join("");
  }
