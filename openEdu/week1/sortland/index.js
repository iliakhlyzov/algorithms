// var fs = require ('fs');
import fs from 'fs';

var contents = fs.readFileSync('input.txt', 'utf8');

const rawContent = contents.split('\n');
const [rawSize, rawString] = rawContent;
const size = parseInt(rawSize, 10);

const raw = rawString.split(' ')


const array = raw.map((el, index) => [parseFloat(el, 10), index + 1]);

for (let j = 1; j < size; j += 1) {
  let i = j - 1;
  while (i >= 0 && array[i][0] > array[i + 1][0]) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    i -= 1;
  }
}
const answer = [array[0][1], array[(size - 1) / 2][1], array[array.length - 1][1]];


fs.writeFileSync("output.txt", answer.join(' '));