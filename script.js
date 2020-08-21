// Assignment Code
var generateBtn = document.querySelector("#generate");

var boxChecked1 =  false;
var boxChecked2 =  false;
var boxChecked3 =  false;
var boxChecked4 =  false;


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","|","<",">","?"];

var passwordArray = [];

//var lowerCaseRand = lowerCase(Math.floor(Math.random()*26)+1);
//var upperCaseRand = upperCase(Math.floor(Math.random()*26)+1);
//var numbersRand = numbers(Math.floor(Math.random()*9)+1);
//var specialCharactersRand = specialCharacters(Math.floor(Math.random()*23)+1);

var randomChar = [];



var lowercaseCheckbox = document.querySelector("input[name=checkBox1]");
lowercaseCheckbox.addEventListener("change", text1);

function text1(){
  //var myLowerLetter = document.querySelector('.checkBox1:checked').value;
  boxChecked1 = true;
  console.log(boxChecked1);

  randomChar.push(...lowerCase);

}

  var uppercaseCheckbox = document.querySelector("input[name=checkBox2]");
uppercaseCheckbox.addEventListener("change", text2);

function text2(){
  //var myUpperLetter = document.querySelector('.checkBox2:checked').value;
  boxChecked2 = true;
  console.log(boxChecked2);
  
  randomChar.push(...upperCase);

}


  var numbersCheckbox = document.querySelector("input[name=checkBox3]");
numbersCheckbox.addEventListener("change", text3);

function text3(){
  //var myNumber = document.querySelector('.checkBox3:checked').value;
  boxChecked3 = true;
  console.log(boxChecked3);
  randomChar.push(...numbers);

}

  var specialCharactersCheckbox = document.querySelector("input[name=checkBox4]");
specialCharactersCheckbox.addEventListener("change", text4);

function text4(){
  //var mySpecialCharacter = document.querySelector('.checkBox4:checked').value;
  boxChecked4 = true;
  console.log(boxChecked4);
  randomChar.push(...specialCharacters);
}

//function getRandomCharacter(lowerCase){
//var randomChar = Math.floor(Math.random()* lowerCase.length)
//return randomChar
//}


// Write password to the #password input
function writePassword() {
  var passwordLength = document.getElementById("passwordLength").value;
  var passwordNum = parseInt(passwordLength);
  if(typeof passwordNum === "string"){
    alert("Password must be a number.");
  }
  if(boxChecked1===false && boxChecked2=== false && boxChecked3 === false && boxChecked4 === false){
    alert("A box must be checked.");
  }
  console.log(randomChar);
  console.log(passwordNum);
  for(var index = 0; index < passwordNum; index++){
    var x = randomChar[Math.floor(Math.random()* randomChar.length)];
    passwordArray.push( x);
    console.log(x);
  }
  var password = passwordArray;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
  



// function generatePassword(){

//   //make password and alert password
//   console.log(passwordArray)
// }
// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
