// Assignment code here

//array of lowercase letters
  var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"]

//convert to uppercase in a new array
  var upperCharacters = [];
  for (var i = 0; i<lowerCharacters.length; i++) {
    upperCharacters.push(lowerCharacters[i].toUpperCase());
  }  
  //debug
  console.log(lowerCharacters + "\n" + upperCharacters);


  //arrays for numeric and special characters
  var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&",
                              "*", "(", ")"]
  //debugging
  console.log(numericCharacters);
  console.log(specialCharacters);

  //variables for password options
  var low = false;
  var upp = false;
  var num = false;
  var spec = false;
  var length = 8;
  var choices = [low, upp, num, spec, length];

  console.log("default choices");
  console.log(choices);

  while (!choices.includes(true)) {
  alert("Please select which characters to use for your password" +
        " Must include at least one set of characters");
  low = confirm("Use lowercase letters?");
  choices[0] = low;
  upp = confirm("Use uppercase letters?");
  choices[1] = upp;
  num = confirm("Use numeric characters?");
  choices[2] = num;
  spec = confirm("Use special characters?");
  choices[3] = spec;
  length = prompt("Enter length of password between 8" +
                  "and 128");
  choices[4] = length;
  }

  console.log("user choices");
  console.log(choices);

  var characterBank = [];
  var randomPassword = "";
  var characterSets = [lowerCharacters, upperCharacters, numericCharacters, specialCharacters];
  var generatePassword = function() {
    for (var i = 0; i<choices.length-1; i++) {
      if (choices[i]) {
        console.log("inside if loop, iteration: " + i );
        var select = characterSets[i];
        characterBank = characterBank.concat(select);
        console.log(select); // debugging
      }
    }
    var index = 0;
    for (var j = 0; j<length; j++) {
      index = Math.floor(Math.random() * characterBank.length);
      randomPassword = randomPassword + characterBank[index]; 
      console.log(characterBank[index]);
      console.log(randomPassword);
    }
    return randomPassword;
  }

  // generatePassword();
  
  // console.log("This should be an array of all the selected characters");
  // console.log(characterBank);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
