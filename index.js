const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

rl.question();

console.log('[1] [2] [3]\n[4] [5] [6]\n[7] [8] [9]\n');
