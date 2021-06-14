const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];
const notSolution = "NO SOLUTION";
const manySolution = "MANY SOLUTIONS";

const func = (a, b, c) => {
  if (c < 0) return notSolution; 
  if (c > 0) {
    // sqrt(ax + b) = c
    if (a === 0) {
      // x может быть любым
      // sqrt(b) = c
      // b = c ** 2
      if (b <= 0) {
        return notSolution;
      }
      if (b === c ** 2) {
        return manySolution;
      }
      return notSolution;
    }
    return (c ** 2 - b) / a;
  }
  // if (c > 0) return a === 0 ? notSolution : (c ** 2 - b) / a; // x = (c ** 2 - b) / a
  // c = 0
  if (a < 0) {
    // sqrt(ax - b) = 0; ax === b
    // x === b / a
  }

  if (a !== 0) {
    // sqrt(ax + b) = 0;
    if (b === 0) {
      // sqrt(ax) = 0;
      return 0;
    }
    // ax + b = 0;
    // x = -b / a;
    return b / a;
  }
  // a = 0;
  // sqrt(b) = 0
  if (b === 0) {
    return manySolution;
  }
  return notSolution;
};



// rl.close();
rl.on('line', (number) => {
  data.push(Number(number))
  if (data.length == 3) {
    rl.close();
    console.log(func(...data));
  }
});