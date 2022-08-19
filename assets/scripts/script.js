//array of lowercase letters
var lowerCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//convert to uppercase in a new array
var upperCharacters = [];
for (var i = 0; i < lowerCharacters.length; i++) {
  upperCharacters.push(lowerCharacters[i].toUpperCase());
}

//arrays for numeric and special characters
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var characterSets = [
  lowerCharacters,
  upperCharacters,
  numericCharacters,
  specialCharacters,
]; //array of arrays, used for random password generation
var characterBank = []; //empty array to concatenate previous arrays into based on user selections
var randomPassword = ""; //emply string to store the randomly generated password

//variables for password options
var low = false;
var upp = false;
var num = false;
var spec = false;
var length = 8;
var choices = [low, upp, num, spec, length]; //array containing each password option variable

//while loop to ensure that the user has selected at least one character set and a password of the required length
while (!choices.includes(true) || length < 8 || length > 128) {
  //check if the choices array has any true values (otherwise no char sets are selected)
  alert(
    "Please select which characters to use for your password" +
      " Must include at least one set of characters"
  );
  //use window.confirm to store the user's choice for each charset as a boolean, update the choices array
  low = confirm("Use lowercase letters?");
  choices[0] = low;
  upp = confirm("Use uppercase letters?");
  choices[1] = upp;
  num = confirm("Use numeric characters?");
  choices[2] = num;
  spec = confirm("Use special characters?");
  choices[3] = spec;
  length = prompt("Enter length of password between 8" + "and 128");
  while (length < 8 || length > 128) {
    //verify the length of the password. If out of bounds, prompt again
    length = prompt("Enter length of password between 8 and 128 characters");
  }
  choices[4] = length;
}

// function to generate and return a random password as a string
var generatePassword = function () {
  for (var i = 0; i < choices.length - 1; i++) {
    //loop through the choices array checking for a true value
    if (choices[i]) {
      //if the value is true, concatenate the associated array from the characterSets array using the index variable
      console.log("inside if loop, iteration: " + i); //debugging
      var select = characterSets[i];
      characterBank = characterBank.concat(select);
      console.log(select); // debugging
    }
  }
  var index = 0; //index variable into characterBank array that will be assigned a random value
  for (var j = 0; j < length; j++) {
    //run the loop as many times as the length the user selected
    index = Math.floor(Math.random() * characterBank.length); //index must be random and within the range of the array
    randomPassword = randomPassword + characterBank[index]; //add the new character to the string
  }
  return randomPassword;
};

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
