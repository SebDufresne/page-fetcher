const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`File exists, would you like to overwrite? (Y/N) `, (replace) => {
  if (/[yY]/.test(replace)) {
    console.log(replace);
  } else {
    console.log("File can't be replaced");
  }
  rl.close();
});