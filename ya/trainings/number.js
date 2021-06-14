
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const invokeCount = 3;
let invokeCounter = 0;
const data = [];

const func = (size, arr, number) => {
  if (size === 1) {
    return arr[0];
  }
  let nearest = arr[0];
  for (let i = 1; i < size; i += 1) {
    if (Math.abs(number - nearest) > Math.abs(number - arr[i])) {
      nearest = arr[i];
    }
  }
  return nearest;
}

// rl.close();
rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(...data[0], data[1], ...data[2]));
  }
});

console.log(func(3, [-1000, -15, -888], 15)) // -15
console.log(func(2, [4, 9], 7))