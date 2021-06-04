// function to generate markdown for README
function generateMarkdown(data, gitData) {

  
  return `
  # **${data.title}**
  
  ${data.license === 'none' ? '' : `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors )
  * [Test](#test)
  * [Questions](#questions)
  * [Repository Link](#repository)
  
  ## Description
  ${data.description}


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  
  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  Email Me: ${data.questions}
  
  GitHub Profile: <${gitData.profile}>

  ## Repository
  ${data.repo}
`;
}

module.exports = generateMarkdown;


