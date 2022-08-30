var readlineSync = require("readline-sync");
var chalk= require("chalk");
var username= (readlineSync.question("what your name? "));
const log=console.log;
log(chalk.magenta(username+" "+"lets play a quiz"));
log(chalk.green("Be ready !"));
var score=0;
console.log("-------");
var question="";
function quiz(question,option1,option2,option3,a)
  {
  console.log(chalk.blue(question));
  answers = [option1, option2, option3];
  index = readlineSync.keyInSelect((answers), "ans");
if (answers[index] == answers[a]) {
  score++;
  console.log(chalk.green("you are right"));
  
  
}
else {
  
  console.log(chalk.red("you are wrong"));
  
}
console.log("------")
  }
quiz("which country is termed as birthofcricket ?","india","japan","england",2);
quiz("olympic games are held after an interval of ","3","4","5",1);
quiz("which sport is not included in olympic ?","cricket","hockey","boxing",0);
quiz("what is the length of pitch in cricket","20.3","21.2","20.12",2);
quiz("what is the  maximum length of bat in cricket","35","38","30",1);
console.log("------");
console.log("------");

  console.log(chalk.blueBright("your score is "+score+"/5"));
console.log("------");
console.log("------");
console.log(chalk.yellowBright("Thank you !"));
