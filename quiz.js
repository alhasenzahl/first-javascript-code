/*
I am currently learning JavaScript through courses on treehouse.com.

This challenge included creating a quiz that included the following:
1) at least 5 questions
2) kept track of correct answers
3) provided a message at the end that told the user how many answers they got write
4) ranked the user by how many questions they ot correct

This is my very first program I have written from scratch in JavaScript all by myself! YAY
*/

var questionOne = prompt('What is the capital of Nebraska?');
var questionTwo = prompt('What is the capital of Arizona?');
var questionThree = prompt("Which state's capital is Salem?");
var questionFour = prompt('What is the capital of the USA?');
var questionFive = prompt("Which state's capital is Denver?");

var correctAnswers = 0;

// This code is used to keep track of how many questions the user gets correct during the quiz

if ( questionOne.toUpperCase() === 'LINCOLN' ) {
  correctAnswers = correctAnswers + 1;
} else {
  correctAnswers = correctAnswers;
}

if ( questionTwo.toUpperCase() === 'PHOENIX' ) {
  correctAnswers = correctAnswers + 1;
} else {
  correctAnswers = correctAnswers;
}

if ( questionThree.toUpperCase() === 'OREGON' ) {
  correctAnswers = correctAnswers + 1;
} else {
  correctAnswers = correctAnswers;
}

if ( questionFour.toUpperCase() === 'WASHINGTON DC' ) {
  correctAnswers = correctAnswers + 1;
} else {
  correctAnswers = correctAnswers;
}

if ( questionFive.toUpperCase() === 'COLORADO' ) {
  correctAnswers = correctAnswers + 1;
} else {
  correctAnswers = correctAnswers;
}

// This code produces the message as well as the user's rank at the end of the quiz

if (correctAnswers === 5 ) {
  alert('You got ' + correctAnswers + ' questions correct! Your perfect score earns you a Gold Crown!');
} else if ( correctAnswers >= 3 && correctAnswers < 5 ) {
  alert('You got ' + correctAnswers + ' questions correct. Your score earns you a Silver Crown!');
} else if ( correctAnswers >= 1 && correctAnswers < 3 ) {
  alert('You got ' + correctAnswers + ' questions correct. Your score earns you a Bronze Crown!');   
} else {
  alert('You got ' + correctAnswers + ' questions correct. I am sorry you do not receive a crown.');
}