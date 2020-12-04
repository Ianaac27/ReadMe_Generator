const inquirer = require("inquirer");
// const fs = require("fs");
// const md = require('./utils/generateMarkdown');

// array of questions for user
// const questions = [

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description about your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide a table of contents.",
      name: "tableOfContents",
    },
    {
      type: "input",
      message: "Please explain how to install your project.",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your project?",
      name: "usage",
    },
    {
      type: "input",
      message: "What license does our project contain?",
      name: "license",
    },
    {
      type: "input",
      message: "Who has contributed to this project?",
      //create a list?
      name: "contributing",
    },
    {
      type: "input",
      message: "Please explain how to test your project.",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },  
])

.then(response => {
    console.log(response.title);
})  
;


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();