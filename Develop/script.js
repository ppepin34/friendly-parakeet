// Assignment code here

// Define values

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "@#$%^&*";

// Assign length

var pwdLength = prompt("Please select a password length. Your password must be at least 8 and no more than 128 characters long.");

// Prompt for lowercase

var lwrcaseConfirm = confirm("Would you like to include lowercase letters?");

// Prompt for uppercase

var uprcaseConfirm = confirm("Would you like to use uppercase letters?");

// Prompt for numbers

var numbersConfirm = confirm("Would you like to include numbers?");

// Prompt for special characters

var specialCharsConfirm = confirm("Would you like to include special characters?");

// Begin building code

var generatePassword = function() {
  
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
