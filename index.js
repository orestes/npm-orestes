const chalk = require('chalk');
const boxen = require('boxen');

let options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
};

// Text + chalk definitions
let data = {
    'name': chalk.white('Orestes Carracedo /'),
    'handle': chalk.cyan('orestes'),
    'work': chalk.white('Co-founder, software Engineer @ Lighthorse Consulting'),
    'twitter': chalk.cyan('https://twitter.com/orestesca'),
    'linkedin': chalk.cyan('https://linkedin.com/in/orestesca'),
    'github': chalk.cyan('https://github.com/orestes'),
    'web': chalk.cyan('https://orestes.io'),
    'npx': chalk.white('npx orestes'),

    'labelWork': chalk.white.bold('      Work:'),
    'labelTwitter': chalk.white.bold('   Twitter:'),
    'labelGitHub': chalk.white.bold('    GitHub:'),
    'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
    'labelWeb': chalk.white.bold('       Web:'),
    'labelCard': chalk.white.bold('      Card:')
};

const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;

console.log(chalk.green(boxen(output, options)));
