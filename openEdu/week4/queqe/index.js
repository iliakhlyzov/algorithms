// var fs = require ('fs');
// var path = require ('path');
import fs from 'fs';

// const from = path.resolve('openEdu', 'week4', 'stack', 'input.txt');
// const to = path.resolve('openEdu', 'week4', 'stack', 'output.txt');


var contents = fs.readFileSync("input.txt", 'utf8');

const [, ...rest] = contents.split('\n');
const stack = []
const result = [];
rest.forEach((el) => {
  const [action, raw] = el.split(' ');
  const number = Number(raw);
  switch(action) {
    case '-':
      if (stack.length === 0) {
        console.log('hell')
        break;
      }
      const poped = stack.shift();
      result.push(poped);
      break;
    case '+':
      stack.unshift(number);
      break;
  }
});
fs.writeFileSync("output.txt", result.reverse().join('\n'));