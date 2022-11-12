var chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

function welcome() {
  var userName = readlineSync.question("What's your Name? ");
  console.log('Hi ' + userName + '! Welcome to COLOR MIXING!');
  console.log("Let's see how many colours you get right!");
}

var highScores = [
  {
    name: "Mridul",
    score: 5
  }, {
    name: "Vasu",
    score: 4
  }];

//have atleast 5 questions
//array of objects
var quesAns = [
  {
    question: "Red + Yellow? ",
    answer: "Orange"
  }, {
    question: "Red + Blue? ",
    answer: "Purple"
  }, {
    question: "Red + White? ",
    answer: "Pink"
  }, {
    question: "Yellow + Blue? ",
    answer: "Green"
  }, {
    question: "Red + Green? ",
    answer: "Brown"
  }];

function game() {

  for (var i = 0; i < quesAns.length; i++) {
    var answer = readlineSync.question(quesAns[i].question)
    if (answer.toUpperCase() === quesAns[i].answer.toUpperCase()) {
      console.log(chalk.bold.green("Correct!"));
      score++;
    } else {
      console.log(chalk.bold.red("Oops.. That's Wrong!"));
    }
    console.log("Score: " + score);
  }

}

function finalScore() {
  console.log("Your final score is: " + score);
  console.log("Check out the highScores of your pals here..");
  highScores.map(scores => console.log(scores.name, ':', scores.score))
  console.log("Ping me a screenshot of your scores, if you break the highscore! I'll update it on the scoreboard!");
}

//main 
welcome()
game()
finalScore()