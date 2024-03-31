#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "please enter first number",
        type: "number",
        name: "firstNumber"
    },
    { message: "please Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "select the operators",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
if (answer.operators == "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators == "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators == "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators == "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select the valid operators");
}
;
