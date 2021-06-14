const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

const getMinTime = (i, b) => i * b + b - 1;
const getMaxTime = (minTime, i) => minTime + i * 2;

const func = (a, b, n, m) => {
  const timeMinA = getMinTime(a, n);
  const timeMaxA = getMaxTime(timeMinA, a);

  const timeMinB = getMinTime(b, m);
  const timeMaxB = getMaxTime(timeMinB, b);
  // console.log('minA, maxA', timeMinB, timeMaxB);
  
  if (timeMinB > timeMaxA) {
    return '-1';
  }

  const min = Math.min(timeMinA, timeMinB);
  const max = Math.min(timeMaxA, timeMaxB);

  return `${min} ${max}`;
}

rl.on('line', (number) => {
  data.push(Number(number))
  if (data.length == 4) {
    rl.close();
    console.log(func(...data));
  }
});