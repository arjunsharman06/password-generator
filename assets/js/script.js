// Assignment code here

//Object of userpassword variable 
var userPassword = {
  password: "",
  length: 0,
  isLowerCase: false,
  isUpperCase: false,
  isNumeric: false,
  isSpecialChar: false,

};

//Object of password combination
var characterObject = [
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

  //Checking if the length of the password > 8 && < 128
  if (validLength()) {

    //If the user wants following characters in the password
    charChoice();

    var i = 0;

    //setting the value if the program is run without refreshing the browser
    userPassword.password = "";

    while (i < userPassword.length) {

      if (userPassword.isLowerCase) {
        userPassword.password = userPassword.password + (userPassword.password, characterObject[0].lowerCase[Math.floor(Math.random() * characterObject[0].lowerCase.length)]);
        i++;
      } if (userPassword.isUpperCase) {
        userPassword.password = userPassword.password + (userPassword.password, characterObject[0].upperCase[Math.floor(Math.random() * characterObject[0].upperCase.length)]);
        i++;
      } if (userPassword.isNumeric) {
        userPassword.password = userPassword.password + (userPassword.password, characterObject[0].numeric[Math.floor(Math.random() * characterObject[0].numeric.length)]);
        i++;
      } if (userPassword.isSpecialChar) {
        userPassword.password = userPassword.password + (userPassword.password, characterObject[0].special[Math.floor(Math.random() * characterObject[0].special.length)]);
        i++;
      }
    }
  } else {
    window.alert("Thank You for using PassWord Generator..");
    userPassword.password = "No password Generated as you selected to quit!!";
  }
  return userPassword.password;
};

//Checking if the user has entered the valid length
var validLength = function ValidLength() {

  var userChoice = window.prompt("Input the length of the password");

  //user selected "cancel"
  if (userChoice === null) {
    return false;
  } else {
    userPassword.length = Number(userChoice);

    //check for line space , alphabets , range btw 8 to 128
    if (userPassword.length <= 0 || !/^[0-9]+$/.test(userPassword.length) ||
      !(parseInt(userPassword.length) >= 8 && !parseInt(userPassword.length) <= 128)) {
      window.alert("Wrong Value Inputted for the password!");
      window.alert("The password length should be between 8 to 128 characters! Try Again");
      return validLength();
    } else {
      return true;
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
