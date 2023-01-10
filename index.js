

readlineSync= require("readline-sync");
var userName = readlineSync.question("Whts your name?! ");

console.log("\nWELCOME " + userName + " to Fandom Quiz");
score=0;

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(answer==userAnswer)
  {
    console.log("Right!");
    score= score+1;
  }
  else
  {
    console.log("Wrong!");
  }

  console.log("current score: ", score);
  console.log("----------");
}

var questions = 
[{
  question: "\nwhat is the name of harry potter owl?:\n ",
  answer: "hedwig"
},
{
  question: "What is the name harry potter in real life?:\n ",
  answer: "daniel radcliffe"
},
{
  question: "\nwhat is the name of Lord Voldemort's loyal snake?: \n ",
  answer: "nagini"
},
{
  question: "\nWhen was the first harry porter film released?: \n ",
  answer: "2001"
},
{
  question: "\nwhat position did harry potter play at quidditch?:\n ",
  answer: "seeker"
},
];

for(var i=0; i<questions.length; i++)
{
  var currentAnswer= questions[i];
  play(currentAnswer.question, currentAnswer.answer)
}

