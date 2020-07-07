const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email you use with GitHub?"
    },
    {
        type: "input",
        name: "url",
        message: "What is the url one can use to get to your project?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a brief description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the command to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Is there anything the user should know about using the program?"
    },
    {
        type: "list",
        name: "liscense",
        message: "What licenses is your project using?",
        choices: ["apache 2.0","boost 1.0","BSD 3--Clause","BSD 2--clause","CC0 1.0","CC BY 4.0","CC BY-SA 4.0","CC BY-NC 4.0","CC BY-ND 4.0","CC BY-NC-SA 4.0","CC BY-NC-ND 4.0","EPL 1.0","GPLv3","GPL v2","AGPL v3","LGPL v3","FDL v1.3","IPL 1.0","ISC","MIT","MPL 2.0","ODC BY","ODbL","PDDL","Perl","Artistic 2.0","OFL 1.1","Unlicense","WTFPL","Zlib","none"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Is there anything the user should know about how to contribute to the project?"
    },
    {
        type: "confirm",
        name: "contribute",
        message: "Do you want to encourage others to contribute to the project?",
    },
    {
        type: "input",
        name: "test",
        message: "What is the command to test?",
        default: "npm test"
    },

];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Done', data)
    })
}

function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("ReadMe.md", generateMarkdown(response))
        console.log(response)
    })

}



init();
