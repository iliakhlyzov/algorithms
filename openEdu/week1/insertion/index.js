// var fs = require ('fs');
import fs from 'fs';

var contents = fs.readFileSync('input.txt', 'utf8');

const rawContent = contents.split('\n');
const [, rawString] = rawContent;

const raw = rawString.split(' ')


const array = raw.map((el) => parseInt(el, 10));
const arrayIndex = [1];

for (let j = 1; j < array.length; j += 1) {
  let i = j - 1;
  while (i >= 0 && array[i] > array[i + 1]) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    i -= 1;
  }
  arrayIndex.push(i + 2);
}

const answer = [arrayIndex.join(' '), array.join(' ')];
fs.writeFileSync("output.txt", answer.join('\n'));