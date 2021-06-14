// форматы: +7<код><номер> или 8<код><номер> <номер> где <номер>
// семь цифр

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

const normalize = (rawString) => {
  const defaultCode = 495;
  const stringNumber = rawString.split('-').join('');

  if (stringNumber.length === 7) return `${defaultCode}${stringNumber}`;

  return stringNumber
    .split('')
    .filter((el) => Number.isInteger(Number(el)))
    .slice(1)
    .join('');
}

rl.on('line', (rawNumber) => {
  const number = normalize(rawNumber);
  data.push(normalize(number));
  if (data.length == 4) {
    rl.close();
    const [newNumber, ...numbers] = data;
    const answer = numbers.map((number) => newNumber === number ? 'YES' : 'NO');
    process.stdout.write(answer.join('\n'));
  }
});

const a = `
+7(495)430-23-97
+7-4-9-5-43-023-97
4-3-0-2-3-9-7
8-495-430
`