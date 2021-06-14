// F. Симметричная последовательность

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const invokeCount = 2;
let invokeCounter = 0;
const data = [];

const func = (n, seq) => {
  if (n === 1) {
    return 0;
  }
  // if (n === 2) {
  //   return seq[0] === seq[1] ? 0 : `2\n${seq[1]} ${seq[0]}`;
  // }
  // let missedNumbersCounter = 0;
  // let missedNumbers = [];

  const middle = n === 2 ? n / 2 : (n + 1) / 2;
  let startOfSymmSeq = middle;

  for (let i = 1, j = startOfSymmSeq; j < seq.length; ) {
    if (seq[j - i] === seq[j]) {
      j += 1;
      i += 1;
    } else {
      startOfSymmSeq = j + 1;
      j = startOfSymmSeq;
      i = 1;
    }
  }

  // for (let i = 0, j = startOfSymmSeq; i < startOfSymmSeq && startOfSymmSeq < seq.length && j < seq.length;) {
  //   if (seq[j - i] !== seq[j]) {
  //     i += 1;
  //     j += 1;
  //     if (seq[j] === seq[startOfSymmSeq]) {
  //       startOfSymmSeq = j;
  //     }
  //     i = 0;
  //   } else {
  //     j += 1;
  //     i += 1;
  //   }
    

  if (startOfSymmSeq === middle && middle ===) return 0;
  const missedNumber = seq.slice(0, startOfSymmSeq - 1);
  return `${missedNumber.length}\n${missedNumber.join(' ')}`;
}

// rl.close();
rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(...data[0], data[1]));
  }
});