// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
//Object of user password variables 
var userPassword = {
  password: "",
  length: 0,
  isLowerCase: false,
  isUpperCase: false,
  isNumeric: false,
  isSpecialChar: false,

};

//Object of password combination
var characterArray = [
  {
    "lowerCase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    "upperCase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    "numeric": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    "special": ["", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "`", "{", "|", "}", "~"]
  }
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//function to generate the password.
var generatePassword = function generatePassword() {

  //Checking if the length of the password >8 && < 128
  if (validLength()) {

    //If the user wants following characters in the password
    charChoice();

    //Creating password
    var i = 0;

    //setting the value if the program is run without refreshing the browser
    userPassword.password ="";

    while (i < userPassword.length) {
      
      if (userPassword.isLowerCase) {
        userPassword.password = userPassword.password + (userPassword.password, characterArray[0].lowerCase[Math.floor(Math.random() * characterArray[0].lowerCase.length)]);
        i++;
      } if (userPassword.isUpperCase) {
        userPassword.password = userPassword.password + (userPassword.password, characterArray[0].upperCase[Math.floor(Math.random() * characterArray[0].upperCase.length)]);
        i++;
      } if (userPassword.isNumeric) {
        userPassword.password = userPassword.password + (userPassword.password, characterArray[0].numeric[Math.floor(Math.random() * characterArray[0].numeric.length)]);
        i++;
      } if (userPassword.isSpecialChar) {
        userPassword.password = userPassword.password + (userPassword.password, characterArray[0].special[Math.floor(Math.random() * characterArray[0].special.length)]);
        i++;
      }
    }
  } else {
    window.alert("Thank You for using PassWord Generator..");
    userPassword.password =  "No password Generated as you selected to quit!!";
  }
  return userPassword.password;
};

//Checking if the user has entered the valid length
var validLength = function ValidLength() {

  userPassword.length = Number(window.prompt("Input the length of the password"));

  //if the user has selected cancel from the prompt
  if (userPassword.length <= 0) {
    return false;

    //should not be a character
  } else if (!/^[0-9]+$/.test(userPassword.length)) {
    window.alert("Wrong Value Inputted for the password! Try Again")
    return validLength();
  } else {
    //Check for the length between the range 8 to 128
    if (parseInt(userPassword.length) >= 8 && parseInt(userPassword.length) <= 128) {
      return true;
    } else {
      window.alert("The password length should be between 8 to 128 characters");
      var choice = window.confirm("Do you want to continue?");
      if (choice) {
        return validLength();
      }
      else {
        return false;
      }
    }
  }
};

//function to generate prompt message
var inputChoice = function (message) {
  return window.confirm(message);
};

//Function to take in user choice for characters
var charChoice = function () {

  userPassword.isLowerCase = inputChoice("Do you want to have Lowercase Characters in your password");
  userPassword.isUpperCase = inputChoice("Do you want to have Uppercase characters in your password");
  userPassword.isNumeric = inputChoice("Do you want to have Numeric characters in your password");
  userPassword.isSpecialChar = inputChoice("Do you want to have Special characters in your password");

  if (!userPassword.isLowerCase && !userPassword.isUpperCase && !userPassword.isNumeric && !userPassword.isSpecialChar) {
    window.alert("Need to select one character type. Please input your choice again");
    return charChoice();
  } else
    return true;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
