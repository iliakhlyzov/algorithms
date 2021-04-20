// var fs = require ('fs');
import fs from 'fs';
 
var contents = fs.readFileSync('./input.txt', 'utf8');

const raw = contents.split(' ');
const array = raw.map((el) => BigInt(el));
let answer = array[0] + array[1] ** BigInt("2");

fs.writeFileSync("output.txt", answer.toString());