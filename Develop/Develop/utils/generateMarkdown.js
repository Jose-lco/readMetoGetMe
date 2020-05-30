function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description

${answers.description}

## Technologies

${answers.technologies}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Future Contributions

${answers.contributing} to making contributions to this project and reporting any issues

## License

This project is licensed under ${answers.license}

## Acknowledgements
${answers.sources}

## Authors

This project was created by ${answers.name}
Contact info: ${answers.email}
`;
}

module.exports = generateMarkdown;
