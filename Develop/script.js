// Assignment code here

// Define values

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "@#$%^&*";

// Begin building code

var generatePassword = function () {
  // Assign length

  var pwdLength = parseInt(prompt("Please select a password length. Your password must be at least 8 and no more than 128 characters long."));
  
  //debugger
  if (pwdLength === 0 || pwdLength === NaN) {
    alert("Please choose a password length");
    return "";
  };
  
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Please choose an appropriate password length");
    return "";
  };

  // Prompt for lowercase

  var lwrcaseConfirm = confirm("Would you like to include lowercase letters?");

  // Prompt for uppercase

  var uprcaseConfirm = confirm("Would you like to use uppercase letters?");

  // Prompt for numbers

  var numbersConfirm = confirm("Would you like to include numbers?");

  // Prompt for special characters

  var specialCharsConfirm = confirm("Would you like to include special characters?");

  // creat value for characters in password
  var characters = "";

  //check prompts for which characters to include
  if (lwrcaseConfirm) {
    characters += lowercase;
  };

  if (uprcaseConfirm) {
    characters += uppercase
  };

  if (numbersConfirm){
    characters += numbers
  };

  if (specialCharsConfirm) {
    characters += specialChars
  };
 
  //if none included send back to beginning
  if (characters === "") {
    alert("You need to select characters for the password");
    return "";
  };

  //declare password variable
  var password = "";
debugger
  //create password string
  for (var i = 0; i < pwdLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}


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
