function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

${answers.description}

## Technologies used

${answers.technologies}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Future Contributions [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${answers.name}/${answers.repo}/issues)

${answers.contributing} to making contributions to this project and reporting any issues

## License

This project is licensed under ${answers.license}

## Acknowledgements
${answers.sources}

## Authors

__ This project was created by: __
* ${answers.name} [![HitCount](http://hits.dwyl.com/${answers.name}/${answers.repo}.svg)](http://hits.dwyl.com/${answers.name}/${answers.repo})
  * Contact info: ${answers.email}
`;
}

module.exports = generateMarkdown;
