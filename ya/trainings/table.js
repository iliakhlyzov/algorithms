const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const func = (a, b, c , d) => {
  const sidesArray = [
    [a + c, Math.max(b, d)],
    [b + d, Math.max(c, a)],
    [a + d, Math.max(b, c)],
    [b + c, Math.max(a, d)],
  ];
  const squares = sidesArray.map(([a, b]) =>  a * b);
  const min = Math.min(...squares);
  // console.log('squares, min', squares, min)
  return sidesArray[squares.lastIndexOf(min)];
};

// rl.close();
rl.on('line', (str) => {
  rl.close();
  const arr = str.split(' ').map(Number);
  console.log(func(...arr).join(' '));
});

// console.log(func(1,1,1) === 1);
// console.log(func(5,3,2) === 2);