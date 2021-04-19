///// Charlie

//variables
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// button 
let generateButton = document.querySelector("#generate")
//push random characters
let passwordLength = 10;
let password = [];
password.push(getRandom(lowerCase));
password.push(getRandom(upperCase));
password.push(getRandom(specialCharacters));
password.push(getRandom(numbers));
for (i = 0; i < passwordLength - 2; i++) {
 password.push(getRandom('possibleCharacters')); 
}
console.log(password);
// random array
function getRandom(arr) {
   let index = Math.floor(Math.random() * arr.length);
   return arr[index];
 } 

//when user gives answer, store in variable so..
function generatePassword(){
  let passwordLength = window.prompt("Choose between 8 and 128 characters");
  while (passwordLength < 8 || passwordLength > 128) {
       passwordLength = prompt("Nope, only 8-128 characters please");
   }
  let hasSpecialCharacters = window.confirm("Use Special Characters"); //boolean
  let hasNumbers = window.confirm("Use Numbers") ;
  let hasUpperCase = window.confirm("Use Upper Case");
  let hasLowerCase = window.confirm("Use Lower Case");
  // Variable to store password as it's being concatenated
  // Array to store types of characters to include in password
  var possibleCharacters = [];
  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];
  if (hasSpecialCharacters) {
    let randomNumber = 0;
    guaranteedCharacters.push(getRandom(specialCharacters))
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  } 
  if (hasNumbers === true) {
    guaranteedCharacters.push(getRandom(numbers))
    possibleCharacters = possibleCharacters.concat(numbers)
  } 
  if (hasUpperCase === true) {
    guaranteedCharacters.push(getRandom(upperCase))
    possibleCharacters = possibleCharacters.concat(upperCase)
  } 
  if (hasLowerCase === true) {
    guaranteedCharacters.push(getRandom(lowerCase))
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }
  let remainingPasswordLength = passwordLength - password.length;
  for (let i = 0; i < remainingPasswordLength; i++) {
    password.push(getRandom(password));
  }
  return password.join("");
}
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let generateBtn = document.querySelector("#generate");
//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
