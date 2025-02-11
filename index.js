// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your name?',
        name: 'name',
    },
    {
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        message: 'Description of project?',
        name: 'description',
    },
    {
        message: 'Installation instructions of project',
        name: 'installationInstructions',
    },
    {
        message: 'Usage information about the project',
        name: 'usageInformation',
    },
    {
        message: 'What are the contribution guidelines of the project',
        name: 'contributionGuidelines',
    },
    {
        message: 'What are the test instructions of the project',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Type of license to add to the project',
        name: 'license',
        choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'The Unlicense', 'MIT', 'Mozilla Public License 2.0']
    },
    {
        message: 'Enter your GitHub handle',
        name: 'github',
    },
    {
        message: 'Enter your email address',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const markdownContent = generateMarkdown(data); 
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        });
}

// Function call to initialize app
init();