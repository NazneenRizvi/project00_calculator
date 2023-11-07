#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

   
let sleep = () => {
    return new Promise((res) =>{
      setTimeout(res, 2000);
    })
  }
  async function Welcome(){
    let rainbowTitle = chalkAnimation . rainbow(' Lets start calculator'); //start
     await sleep();
     rainbowTitle .stop() 
 let pulseTitle = chalkAnimation.pulse(' Developed by NAZNEEN Rizvi for TypeScript faculty test.');
   await sleep(); 
   pulseTitle .stop ();
   console.log(chalk.red(`
   _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `));
   //console.log(${rainbowTitle} is fine);
  }
await Welcome();

async function askQuestion() {
    let answer = await inquirer.prompt([
      {
        type: "list",
        name: "operator",
        message: chalk.yellowBright("Which operation you want to perform? /n"),
        choices: ["+Addition", "-Subtraction", "*Multiplication", "/Division"],
      },
      {
        type: "number",
        name: "num1",
        message: chalk.greenBright("Enter number 1:"),
      },
      {
        type: "number",
        name: "num2",
        message: chalk.greenBright("Enter number 2:"),
      },
    ]).then((answers) => {
      if (answers.operator == "+Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
      } else if (answers.operator == "-Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
      } else if (answers.operator == "*Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
      } else if (answers.operator == "/Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
      }
    });
  }
     //askQuestion();
  
  async function startAgain() {
    do {
      await askQuestion();
      var again = await inquirer.prompt({
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n:",
      });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
  }
  
startAgain(); 