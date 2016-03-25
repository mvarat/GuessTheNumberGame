

var guessTheNumber = {};

// generate a number 1 to 50
var generateANumber = function(){
  var number = Math.floor(Math.random() * 50);
  console.log("Shhh... The number is " + number);
  return number;
};



$(document).ready(function(){
  var answer = generateANumber();
  var guess = prompt("Guess A Number 1 to 50.");
  while (guess != answer){
    if ( guess > answer){
      guess = prompt("Guess a smaller number.");
    }
    else if ( guess < answer){
      guess = prompt("Guess a larger number.");
    }
  }
  alert("You win!");

});
