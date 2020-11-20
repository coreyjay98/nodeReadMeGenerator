const inquirer = require("inquirer");
const fs = require("fs");

const questionObj = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "How can I install this App?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use this App?",
  },
  {
    type: "input",
    name: "techUsed",
    message: "What technologies did you use?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Are contributions allowed?",
  },
  {
    type: "list",
    name: "license",
    message: "Which License would you like to use?",
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    name: "link",
    message: "What is the link to your GitHub page?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your contact Email?",
  },
];

inquirer.prompt(questionObj).then((answers) => {
  fs.writeFileSync("README.md", markdownText(answers));
});

function markdownText(answers) {
  return `# ${answers.title}

  A project created by **${answers.name}**
  
  ## Table Of Contents
  
  - [Project Description](#project-description)
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [Technologies Used](#technologies-used)
  
  - [Contributing](#contributing)
  
  - [License](#license)
  
  - [Questions](#questions)
  
  ## Project Description
  ${answers.description}

  ### Installation
  ${answers.installation}

  ### Usage
  ${answers.usage}

  ### Technologies Used
  ${answers.techUsed}

  ### Contributing
  ${answers.contributing}

  #### License
  ${licenseAnswer(answers.license)}

  ### Questions

  Check out my GitHub page here: ${answers.link}
  
  For any additional questions please feel free to reach me at ${answers.email}
  `;
}

function licenseAnswer(answer) {
  if (answer == "MIT") {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    Copyright (c) 2020

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
    OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (answer == "Apache") {
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    Copyright 2020

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
    or implied. See the License for the specific language governing
    permissions and limitations under the License.`;
  } else {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    Copyright (C) 2020
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`;
  }
}
