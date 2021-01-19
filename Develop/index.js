const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title for your project:'
    },
    {
        type: 'input',
        name: 'description', 
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation', 
        message: 'Enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'Enter instructions on how to use your project:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter guidelines for contributers:' 
    },
    {
        type: 'input', 
        name: 'test', 
        message: 'Enter test instructions:'
    },
    {
        type: 'list', 
        name: 'license',
        message: 'Choose a license for your project:', 
        choices: ['Apache license 2.0', 'Creative Commons license family', 'MIT', 'Mozilla Public License 2.0']
    },
    {
        type: 'input', 
        name: 'githubInfo', 
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'Enter your email:'
    }

];

// function to initialize program
function init() {
    inq.prompt(questions).then(answers => {
        console.log("Answers", answers);
        let markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, () => {console.log("File saved :)");});
    })
}

// function call to initialize program
init();
