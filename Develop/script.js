const characters = "!#$%&`()*+'-./:;<=>?@^_~"
const numbers = "0123456789"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"

let select = []

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); 

function writePassword(){
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

  function generatePassword(){
    let password = ""
    for (let i=0; i<userAmount; i++) {
      let randomSelect = Math.floor(Math.random() * select.length)
      let randomCharacter = Math.floor(Math.random() * select[randomSelect].length)
      password += select[randomSelect][randomCharacter]
      }
      return password
  };
  

  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
