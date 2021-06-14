// чемпионат по метанию коровьих лепешек
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const invokeCount = 2;
let invokeCounter = 0;
const data = [];

// dis - distances
const func = (n, dis) => {
  let max = dis[0];
  let value = -1;
  for (let i = 1; i < n; i += 1) {
    const curr = dis[i];
    // console.log('curr',curr)
    if (curr > max) {
      max = curr;
      value = -1;
    } else if (curr % 10 === 5 && curr > dis[i + 1]) {
      if (curr > value) {
        value = curr;
      }
    }
  }
  if (value === max) {
    return 1;
  }
  if (value < 0) {
    return 0;
  }
  let place = 1;
  for (let i = 0; i < n; i += 1) {
    const curr = dis[i];
    if (curr > value) {
      place += 1;
    }
  }
  return place;
}

// rl.close();
rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(...data[0], data[1]));
  }
});

// let i;
// console.log('ans', func(7, [20,11, 10, 5, 1]));
// console.log('ans', func(3, [15, 15, 10]));
// console.log('ans', func(3, [10, 15, 20]));

// l =[20, 10, 10, 5, 1, 30];
// console.log('ans', func(l.length, l));

// l =[6, 5, 1];
// console.log('ans', func(l.length, l));
