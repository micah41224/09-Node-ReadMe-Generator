// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require("util");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name: "description",
        message: "Please describe your project"
    },
    {
        type:"input",
        name: "toc",
        message: "List your table of contents"
    },
    {
        type:"input",
        name: "installation",
        message: "Describe the installation process for your project"
    },
    {
        type:"input",
        name: "usage",
        message: "Describe how your project is to be used"
    },
    {
        type:"list",
        name: "license",
        message: "Please select the license you would like to use for this project",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU",
            "BSD"
        ]
    },
    {
        type:"input",
        name: "contributing",
        message: "Who has contributed to this repo?"
    },
    {
        type:"input",
        name: "tests",
        message: "What command should be issued to run tests?"
    },
    {
        type:"input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type:"input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(fileName + " has been successfully created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("ExampleREADME.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


//entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions