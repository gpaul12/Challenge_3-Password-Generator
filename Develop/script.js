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

var options;
var toUpper = function (upper) {
  return upper.toUpperCase();
};
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});

function writePassword() {
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
    options = alert("You must choose a criteria!");
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    options = character.concat(number, alpha, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
  options = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    options = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    options = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    options = number.concat(alpha, alpha2);
  }

  else if (confirmCharacter && confirmNumber) {
    options = character.concat(number);
  } else if (confirmCharacter && confirmNumber) {
    options = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
    options = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    options = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    options = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
    options = number.concat(alpha2);
  }

  else if (confirmCharacter) {
    options = character;
  }
  else if (confirmNumber) {
    options = number;
  }
  else if (confirmLowercase) {
    options = alpha;
  }
  else if (confirmUppercase) {
    options = space.concat(alpha2);
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickOptions = options[Math.floot(Math.random() * options.length)];
    password.push(pickOptions);
  }
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}