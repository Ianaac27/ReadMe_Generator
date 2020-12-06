const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
      },
      {  
        type: "input",
        message: "Please write a short description about the project.",
        name: "description",
      },
      {
        type: "input",
        message: "Please explain how to install the project.",
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
        name: "questions",
      },
    //   {
    //     type: "input",
    //     message: "What is your email?",
    //     name: "questions",
    //   },  
  ];

// function to write README file
 function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
     
    fs.writeFile(fileName, content, (err) => {
        if (err) console.log("Failed to write file");
        else console.log("Wrote file.");
    })
 }

// function to initialize program
function init() {   
inquirer
    .prompt(questions)
    .then(data => {
        console.log(data);
        data.title;
        writeToFile("UPDATED_README.md", data);
 });
}

// function call to initialize program
init();