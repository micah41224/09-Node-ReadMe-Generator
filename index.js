// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require("util");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
            "Mozilla",
            "Unlicense"
        ]
    },
    {
        type:"input",
        name: "Contributing",
        message: "Who has contributed to this repo?"
    },
    {
        type:"input",
        name: "Tests",
        message: "What command should be issued to run tests?"
    },
    {
        type:"input",
        name: "Contributing",
        message: "Who has contributed to this repo?"
    },
    {
        type:"input",
        name: "Questions",
        message: "Enter an email address for users to direction questions to"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions