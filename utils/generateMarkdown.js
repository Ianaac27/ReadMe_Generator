//=============================================== function to generate markdown for README ====================================================
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

${generateGithub(data.github)}

${generateEmail(data.email)}

`;
}

//========================================= Functions to generate individual markdown content ===========================================
function generateDescription( description ) {
  return `## Description

  ${description}`;
}

function generateTableOfContents( tableOfContents ) {
  return `## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)`;
}

function generateInstallation( installation ) {
  return `## Installation

  ${installation}`;
}

function generateUsage( usage ) {
  return `## Usage

  ${usage}`;
}

function generateLicense( license ) {

if ( license == 'Apache')
  return `## License
  [![License]${badge.Apache}

  ${license}`;

else if ( license == 'BSD' )   
  return `## License
  [![License]${badge.BSD}

  ${license}`;

else if ( license == 'CC' )   
  return `## License
  [![License]${badge.CC}

  ${license}`;

else if ( license == 'EPL' )   
  return `## License
  [![License]${badge.EPL}

  ${license}`;

else if ( license == 'GNU' )   
  return `## License
  [![License]${badge.GNU}

  ${license}`;

else if ( license == 'IBM' )   
  return `## License
  [![License]${badge.IBM}

  ${license}`;

else if ( license == 'MIT' )   
  return `## License
  [![License]${badge.MIT}

  ${license}`;

else if ( license == 'MPL' )   
  return `## License
  [![License]${badge.MPL}

  ${license}`;

else if ( license == 'Zlib' )   
  return `## License
  [![License]${badge.Zlib}

  ${license}`;

}

function generateContributing( contributing ) {
  return `## Contributing

  ${contributing}`;
}

function generateTests( tests ) {
  return `## Tests

  ${tests}`;
}

function generateQuestions( questions ) {
  return `## Questions

  If you have any questions, please refer to my contact information below.`;
}

function generateGithub( github ) {
  return `[GitHub: ${github}](https://www.github.com/${github})`;
}

function generateEmail( email ) {
  return `Email: ${email}`;
}

//==================================================== Badges =====================================================
const badge = {
  'Apache' : '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'BSD' : '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'CC' : '(https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)',
  'EPL' : '(https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  'GNU' : '(https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)',
  'IBM' : '(https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  'MIT' : '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'MPL' : '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Zlib' : '(https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
}

//======================================================== Export Generate Markdown =============================================================
module.exports = generateMarkdown;






