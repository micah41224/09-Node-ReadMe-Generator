// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

# Description
${data.description}

# Table of Contents

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Github Name
${data.github}

# Email Address
${data.email}

`;
}

module.exports = generateMarkdown;


// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions