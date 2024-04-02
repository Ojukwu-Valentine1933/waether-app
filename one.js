
function clickButton() {
    var userInput = document.getElementById("myInput").value
    var regexOne = /[0-9]/
if (userInput.match(regexOne)) {
    console.log("this is a good number")
}else{
    console.log("this not a number")
}
}

function passwordCheck() {
    var userPassword = document.getElementById("password-input").value;
    var confirmPassword = document.getElementById("confirm-password").value;
if (userPassword === confirmPassword) {
    console.log("correct pasword")
}else{
    console.log("your password is not correct")
}
if (userPassword.length < 8) {
    console.log ("password is too short")
}else{
    console.log ("password set sucessfully")
}
}

var fruit = ["banana", "mango", "apple,"];
fruit.unshift("carrot")
console.log(fruit)
var car = ["ferrari", "audi", "toyota"]
var allArray = fruit.concat(car);
console.log (allArray);

function arrayCheck() {
    var names = ["chioma", "dalu", "munachi", "boj", "fred"]
    if (names.length<3) {
        console.log("namew are too few")
    }else{
        console.log(names)
    }
}
console.log(arrayCheck())

// let btn = document.getElementById("btn");
// btn.setAttribute('class', 'myButton')
// console.log(btn)

// document.addEventListener("DOMContentLoaded", function() {
//     let btn = document.getElementById("btn");
//     btn.setAttribute("class", "myButton");
//     console.log(btn);
// });

