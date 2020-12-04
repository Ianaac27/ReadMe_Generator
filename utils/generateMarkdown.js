// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${generateDescription(data.description)}

${generateTableOfContents(data.tableOfContents)}

${generateInstallation(data.installation)}

${generateUsage(data.usage)}

${generateLicense(data.license)}

${generateContributing(data.contributing)}

${generateTests(data.tests)}

${generateQuestions(data.questions)}

`;
}

//Functions to generate individual markdown content
function generateDescription( description ) {
  return `## Description

  ${description}`;
}

function generateTableOfContents( tableOfContents ) {
  return `## Table of Contents

  ${tableOfContents}`;
}

function generateInstallation( installation ) {
  return `* [Installation](#installation)

  ${installation}`;
}

function generateUsage( usage ) {
  return `* [Usage](#usage)

  ${usage}`;
}

function generateLicense( license ) {
  return `* [License](#license)

  ${license}`;
}

function generateContributing( contributing ) {
  return `* [Contributing](#contributing)

  ${contributing}`;
}

function generateTests( tests ) {
  return `* [Tests](#tests)

  ${tests}`;
}

function generateQuestions( questions ) {
  return `[Questions](#questions)

  ${questions}`;
}

// console.log(generateMarkdown({
//   title: "Testing",
//   description: "Testing Description",
//   tableOfContents: "123",
//   installation: "asf",
//   usage: "rew",
//   license: "dsa",
//   contributing: "456",
//   tests: "897",
//   questions: "321",
// }));

module.exports = generateMarkdown;






