// Assignment code here
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function generatePassword() {
  enter = parseInt(prompt("How many characters in your password? Choose between 8 and 128"));
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must enter between 8 and 128"));
  } else {
      confirmNumber = confirm("Would you like numbers?");
      confirmCharacter = confirm("Would you like special characters?");
      confirmUppercase = confirm("Would you like Uppercase letters?");
      confirmLowercase = confirm("Would you like Lowercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }

  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }

  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
