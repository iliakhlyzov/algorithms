import * as ibm866 from 'ibm866';
import fs from 'fs';

const buffer = fs.readFileSync('./1291_Сиксхэндов.ftd');
// console.log(buffer)

const text = ibm866.decode(buffer);

console.log(text);
console.log(buffer);