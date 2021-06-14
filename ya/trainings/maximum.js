// Наибольшее произведение двух чисел
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const invokeCount = 1;
let invokeCounter = 0;
const data = [];

const maxAboveNull = [];
const maxUnterNull = [];

const sortByOrdnug = (a, b) => a < b ? [a, b] : [b, a];
const add = (number, array) => {
  if (array.length < 2) {
    array.push(number);
  } else {
    const current = Math.abs(number);
    const firstEl = Math.abs(array[0]);
    const secondEl = Math.abs(array[1]);
    if (current > firstEl || current > secondEl) {
      if (firstEl >= secondEl) {
        array[1] = current;
      }
      else {
        array[0] = current;
      }
    }
  }
}
const func = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const n = arr[i];
    if (n >= 0) {
      add(n, maxAboveNull);
    } else {
      add(n, maxUnterNull);
    }
  }
  let ans = 0;
  console.log('maxAboveNull, maxUnterNull',maxAboveNull, maxUnterNull)
  if (maxAboveNull.length === 1 && maxUnterNull.length === 1) {
    ans = [maxUnterNull[0], maxAboveNull[0]];
  } else if (maxAboveNull.length < 2) {
    ans = maxUnterNull;
  } else if (maxUnterNull.length < 2) {
    ans = maxAboveNull;
  } else {
    const multiplyResult1 = maxAboveNull[0] * maxAboveNull[1];
    const multiplyResult2 = maxUnterNull[0] * maxUnterNull[1];
    ans = multiplyResult1 > multiplyResult2 ? maxAboveNull : maxUnterNull;
  }
  return sortByOrdnug(...ans).join(' ');
}

// const func = (arr) => {
//   const pair = [arr[0], arr[1]];
//   for (let i = 2; i < arr.length; i += 1) {
//     let max1 = arr[0];
//     let max2 = arr[1];
//     // console.log(i)
//     const current = arr[i];
//     if (current > pair[0] || current > pair[1]) {
      
//     }
//     const m = multiply(max1, max2);
//     const m1 = multiply(max1, current);
//     const m2 = multiply(max2, current);

//     if (m1 > m || m2 > m ) {
//       if (m1 > m2) {
//         max2 = current;
//       } else {
//         max1 = current;
//       }
//     }
//     // console.log(max1, max2, m)
//   }
//   return sortByOrdnug(max1, max2).join(' ');
// };

// rl.close();
rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(...data));
  }
});