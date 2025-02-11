// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD 3-Clause License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0 License") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD 3-Clause License") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "The Unlicense") {
    return `[The Unlicense](https://unlicense.org/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `This application is covered under the ${renderLicenseLink(license)},${renderLicenseBadge(license)}.\n\n`;
  }
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

 
  ## Description
  ${data.description}

  ## Table of Contents

   ## License
  ${renderLicenseSection(data.license)}

  ## Installation Instructions
  ${data.installationInstructions}

  ## Usage Information
  ${data.usageInformation}

  ## Contribution Guidelines
  ${data.contributionGuidelines}

  ## Test Instructions
  ${data.testInstructions}
  ## Link to Test Video
  ${(src="https://drive.google.com/file/d/1nofjP3alxlPjV1u1tsU6nKWaZpK8ePHj/preview" width="640" height="480")}

    ## Questions
  If you have any questions, you can reach me at [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
  `;
  
}