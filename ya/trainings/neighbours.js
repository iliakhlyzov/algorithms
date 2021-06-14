// more than neighbours

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const invokeCount = 1;
let invokeCounter = 0;
const data = [];

const func = (arr) => {
  // сколько в этом списке эелементов, которые больше двух своих соседей
  let ans = 0;
  if (arr.length < 3) return 0;
  for (let i = 1; i <= arr.length - 2; i += 1) {
    console.log(i);
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      i += 1;
      ans += 1;
    }
  }
  return ans;
}

// rl.close();
rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(data[0]));
  }
});