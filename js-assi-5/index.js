// //Chapter no= 23,

// // Question # 1
// var num = 3.45214;
// document.write("round", Math.round(num, "<br><br>"));
// document.write("<br><br>");
// document.write("Floor", Math.floor(num, "<br><br>"));
// document.write("<br><br>");
// document.write("Ceil", Math.ceil(num, "<br><br>")); 
// document.write("<br><br>");

// // Question # 2
// var negativenum = -2.673;
// document.write("round", Math.round(negativenum, "<br><br>")); 
// document.write("<br><br>");
// document.write("Floor", Math.floor(negativenum, "<br><br>")); 
// document.write("<br><br>");
// document.write("Ceil", Math.ceil (negativenum, "<br><br>"));  
// document.write("<br><br>");

// // Question # 3

// var number = 4;
// document.write("The absolute value of ");

// // Question # 4
// var number = Math.floor((Math.random() * 6) + 1);
// document.write("Random Dice Value", number, "<br><br>");

// // Question # 5
// var number1 = Math.floor((Math.random() *2) + 1);
// if (number1 == 1) {
//     document.write("Heads", number1, "<br><br>");
// } else {
//     document.write("Tails", number1, "<br><br>");
// }

// // Question # 6
// var num1_100 = Math.floor((Math.random() * 100) + 1);
// document.write("Random Number 1 to 100", num1_100, "<br><br>");

// // Question # 7
// var numb = prompt("Enter a Number from 1 to 10");
// if (numb == 5) {
//     document.write("Congratulation! You Right ✅", "<br><br>");
// } else if(numb <= 2) {
//     document.write("You are Close!", "<br><br>");
// }else{
//     document.write("Too Far!", "<br><br>");
// }

// // Question # 8
// var userWeight = prompt("Enter your weight");
// var weight = parseFloat(userWeight);
// document.write("The weight of user is " + weight + " kilograms", "<br><br>");
// document.write("<br><br>");

// // Question # 9 
// var secretNum = Math.floor((Math.random() * 10) + 1);
// var userGuess = +prompt("Enter a number between 1 and 10");
// if (userGuess === secretNum) {
//     alert("Congratulations! You guessed the secret number: " + secretNum);
// } else {
//     alert("Sorry, the secret number was: " + secretNum + ". Better luck next time!");
// }
// document.write("<br><br>");

// //Chapter no= 26-30
// // Question # 1
// var userInput = +prompt("Enter a positive integer");
// document.write("number: " + userInput + "<br>");
// document.write("round off value: " + Math.round(userInput) + "<br>");
// document.write("floor value: " + Math.floor(userInput) + "<br>");
// document.write("ceil value: " + Math.ceil(userInput) + "<br>");
// document.write("<br><br>");
// // Question # 2
// var userInput = +prompt("Enter a negative floating point number");
// document.write("number: " + userInput + "<br>");
// document.write("round off value: " + Math.round(userInput) + "<br>");
// document.write("floor value: " + Math.floor(userInput) + "<br>");
// document.write("ceil value: " + Math.ceil(userInput) + "<br>");
// document.write("<br><br>");
// // Question # 3
// var userInput = +prompt("Enter a number to display its absolute value");
// var absoluteValue = Math.abs(userInput);
// document.write("The absolute value of " + userInput + " is " + absoluteValue + "<br>");
// document.write("<br><br>");
// // Question # 4
// var randomDiceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + randomDiceValue + "<br>");
// document.write("<br><br>");
// // Question # 5
// var randomCoinValue = Math.floor(Math.random() * 2) + 1;
// var coinSide = (randomCoinValue === 1) ? "Heads" : "Tails";
// document.write("Random coin value: " + coinSide + "<br>");
// document.write("<br><br>");
// // Question # 6
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber + "<br>");
// document.write("<br><br>");
// // Question # 7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Guess the secret number between 1 and 10");
// if (userGuess === secretNumber) {
//     document.write("Congratulations! You guessed the secret number: " + secretNumber + "<br>");
// }
// else {
//     document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!<br>");
// }
// document.write("<br><br>");
// // Question # 8
// var userWeight = prompt("Enter your weight in kilograms (e.g., '70', '70.5', '70kgs', '70.5kilograms')");
// var weight = parseFloat(userWeight);
// document.write("The weight of user is " + weight + " kilograms<br>");
// document.write("<br><br>");
// // Question # 9
// var secretNum = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Enter a number between 1 and 10");
// if (userGuess === secretNum) {
//     alert("Congratulations! You guessed the secret number: " + secretNum);
// }
// else {
//     alert("Sorry, the secret number was: " + secretNum + ". Better luck next time!");
// }
// document.write("<br><br>");



