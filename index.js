// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name: "Description",
        message: "Please describe your project"
    },
    {
        type:"input",
        name: "ToC",
        message: "List your table of contents"
    },
    {
        type:"input",
        name: "Installation",
        message: "Describe the installation process for your project"
    },
    {
        type:"input",
        name: "Usage",
        message: "Describe how your project is to be used"
    },
    {
        type:"checkbox",
        name: "License",
        message: "Please select the license you would like to use for this project",
        choices: [
            "Apache",
            "MIT",
            "IBM",
            
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions