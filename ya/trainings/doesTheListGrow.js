const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const no = 'NO';
const yes = 'YES';

const func = (arr) => {
  if (arr.length === 0) return no;
  if (arr.length === 1) return yes;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] > arr[i]) return no;
  }
  return yes;
}

rl.close();
rl.on('line', (str) => {
  rl.close();
  const arr = str.length === 0
    ? [] : str.trim().split(' ');
  console.log(func(arr));
});
