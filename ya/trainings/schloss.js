const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];
const yes = 'YES';
const no = 'NO';

const func = (c, d, e, a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  
  if (max >= Math.max(c, d) && min >= Math.min(c,d)) return yes;
  if (max >= Math.max(c, e) && min >= Math.min(c,e)) return yes;
  if (max >= Math.max(e, d) && min >= Math.min(e,d)) return yes;
  return no;
}


rl.on('line', (number) => {
  data.push(Number(number))
  if (data.length == 5) {
    rl.close();
    console.log(func(...data));
  }
});