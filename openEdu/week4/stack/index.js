var fs = require ('fs');
// var path = require ('path');
// import fs from 'fs';

// const from = path.resolve('openEdu', 'week4', 'stack', 'input.txt');
// const to = path.resolve('openEdu', 'week4', 'stack', 'output.txt');


var contents = fs.readFileSync("input.txt", 'utf8');

const [, ...rest] = contents.split('\n');
const stack = [];
const result = [];
rest.forEach((el) => {
  console.log(result)
  const [action, number] = el.split(' ');
  switch(action) {
    case '-':
      if (stack.length === 0) {
        break;
      }
      const poped = stack.pop();
      result.push(poped);
      break;
    case '+':
      stack.push(number);
      break;
  }
});
fs.writeFileSync("output.txt", result.join('\n'));