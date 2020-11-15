const inquirer = require("inquirer");
const fs = require("fs");

const questionObj = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "date",
    message: "What is today's date?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
];

inquirer.prompt(questionObj).then((answers) => {
  fs.writeFileSync("README.md", markdownText(answers));
});

function markdownText(answers) {
  return `my name is ${answers.name}`;
}
