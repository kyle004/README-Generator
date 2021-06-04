const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')
// const gitName = require('.')


// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a description for your project.'
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation Instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please explain how to use the application.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: [
      'MIT',
      'Apache 2.0',
      'GPL 3.0',
      'BSD 3',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Are there any contributors?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What kind of tests have you run?'
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Please enter your repo link.'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Email address'
  },
];




// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err
    }
    console.log("README has been created")
  })
}

inquirer
  .prompt(questions)
  .then(function (data) {
    const gitHub = `https://api.github.com/users/${data.userName}`;

    axios.get(gitHub).then(function (res) {

      const gitData = {
        profile: res.data.html_url,
        };

      fs.writeFile("README.md", generateMarkdown(data, gitData), function (err) {
        if (err) {
          throw err;
        };

        console.log("README file has been successfully created!");
      });
    });

  });
function init() {

}
// function call to initialize program
init();
