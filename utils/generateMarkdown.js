function collaboration(contribute){
  if (contribute !== false) {
    return `[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)`
  }
  return
}

function marks(){
  return "-".repeat(60)
}

function checkLicense(license) {
  if (license !== null && license !== "none") {
    return `![License](https://img.shields.io/badge/License-${license}--Clause-purple.svg)`
  }
  return
}

function generateMarkdown(data) {
  return `
# ${data.projectName}
${collaboration(data.contribute)}
${checkLicense(data.license)}
${marks()}
## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

${marks()}

## Installation

${marks()}

To install the necessary components run:

${data.installation}

${marks()}

## Usage

${marks()}

${data.usage}

${marks()}

## Contributing

${marks()}

${data.contributing}

${marks()}

## Test

${marks()}

To test the program run:

${data.test}

${marks()}

## Questions

${marks()}

If you have any questions, comments, or concerns please open an issue [here](${data.url}) or contact the owner at [${data.email}](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;
