// var fs = require ('fs');
import fs from 'fs';

var contents = fs.readFileSync('input.txt', 'utf8');

const rawContent = contents.split('\n');
const [rawSize, rawString] = rawContent;
const size = parseInt(rawSize, 10);

const raw = rawString.split(' ')

const array = raw.map((el) => parseInt(el, 10));
const answer = [];
let last;
for (let j = 1; j < array.length; j += 1) {
  let i = j - 1;
  let flag = false;
  while (i >= 0 && array[i] > array[i + 1]) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    flag = true;
    i -= 1;
  }
  if (flag) {
    if (last && last[0] === i + 1) {
      answer.pop();
    }
    answer.push(`Swap elements at indices ${i + 2} and ${j + 1}.`);
  }
  last = [i + 1, j + 1];
}
answer.push(`No more swaps needed.`);


fs.writeFileSync("output.txt", answer.join('\n'));