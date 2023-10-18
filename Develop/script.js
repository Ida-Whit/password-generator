const characters = "!#$%&`()*+'-./:;<=>?@^_~"
const numbers = "0123456789"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"

let select = []



const generateBtn = document.querySelector("#generate");   // Assignment Code  // linked to the button on webpage

generateBtn.addEventListener("click", writePassword);  // Add event listener to generate button  // makes it so that when you click the button, it will execute the writePassword function.

function writePassword() {
  const userAmount  = prompt("Please select a password length between 8 and 128 characters.", "8-128")
  const userChar = confirm("Would you like to include special characters?")
  const userUpper = confirm("Would you like to include uppercase letters?")
  const userLower = confirm("Would you like to include lowercase letters?")
  const userNumber = confirm("Would you like to include numbers?")

  if (userNumber) {
    select.push(numbers)
  }
  if (userUpper) { 
    select.push(upper)
  }
  if (userLower) { 
    select.push(lower)
  }
  if (userChar) { 
    select.push(characters)
  }
  
  for (let i=0; i<userAmount.length; i++) {
    
  };
  const password = generatePassword()
  const passwordText = document.querySelector("#password");  // passwordText linked to text area on webpage

  passwordText.value = password; // links the passwordText (linked to the text area on the webpage) with the password that will be generated once the code is entered.
}






