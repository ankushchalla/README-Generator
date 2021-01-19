// function to generate markdown for README.
// data will be answers generated in index.js from inquirer prompt.
function generateMarkdown(data) {
  let answerData = {
    title: `# ${data.title}\n`,
    description: `## Description\n${data.description}\n`,
    toc: "",
    installation: `## Installation\n${data.installation}\n`,
    usage: `## Usage\n${data.usage}\n`,
    guidelines: `## Contributing\n${data.guidelines}\n`,
    test: `## Tests\n${data.test}\n`,
    license: `## License\n${data.license}\n`,
    questions: `## Questions\nClick [here](https://github.com/${data.githubInfo}) to visit my Github profile.\n` +
               `Or you can email me at: ${data.email}`
  };

  answerData.toc = "## Table of Contents\n" + "* [Installation](#installation)\n" + "* [Usage](#usage)\n" +
                   "* [Contributing](#contributing)\n" + "* [Tests](#tests)\n" + "* [License](#license)\n" +
                   "* [Questions](#questions)\n"

  let finalReadMe = "";
  for (key in answerData) {
    finalReadMe += answerData[key];
  }
  return finalReadMe;
}

module.exports = generateMarkdown;
