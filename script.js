// Assignment Code
var generateBtn = document.querySelector("#generate");

//DATABASE
var specialC = ["@", "!", "#","$","%","^","&","*","&","*","(",")", ",", ".", "/", ";", "[", "]", "-", "=", "+", "~", "<", ">", "?"];
var wordsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var wordsUpper = wordsLower.map(function(x){ return x.toUpperCase(); });
var numbersMinor = [].concat([]); for (var i = 0; i <= 9; i++) {numbersMinor.push(i)};
var numbersMinor = numbersMinor.concat(numbersMinor.concat(numbersMinor)); //to have even amount of number from the rest of charaters

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

//Boolean Functions (global)
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

//Shuffle Function (global)
function shuffleEq(chain) {
  for (let i = chain.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chain[i], chain[j]] = [chain[j], chain[i]];
  }
  return chain;
}

function generatePassword() {
  var input = parseInt(prompt("How many characters would you like to use in a password? (min of 8; max of 128)"));
  if (!input) {
    alert("You have to choose a valid number between 8 and 128")
  } else if (input => 8 || input <= 128) {
    if (
      secondAns = confirm("includes uppercase?"))
      {
        secondQuestion();
      }
    if (
      thirdAns = confirm("includes lowercase?")
    ) {
      thirdQuestion()
    }
    if (
      forthAns = confirm("with speical characters?")
    ) {
      forthQuestion()
    }
    if (
      fifthAns = confirm("with numbers?")
    ) {
      fifthQuestion()
    }

      }
  var peopleChoice = uppcaseCount + lowercaseCount + specialChaCount + numberNumberCount;

  if (peopleChoice == 0) {
    alert ("Please try again! at least one criteria")
  } else {
  var smallBoss = boss.concat(boss.concat(boss.concat(boss.concat(boss.concat(boss))))); // ensure that final array => 128
  var midBoss = shuffleEq(smallBoss);
  var finalBoss = midBoss.slice(0,input);
  return finalBoss.join(""); //remove coma
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
