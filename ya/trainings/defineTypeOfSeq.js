// defineTypeOfSeq

const { type } = require('os');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const data = [];

const func = (arr) => {
  // empty arr
  if (arr.length === 0) {
    return 'RANDOM';
  }

  // only 1 element
  if (arr.length === 1) {
    return 'CONSTANT';
  }

  const counters = {
    CONSTANT: 0,
    ASCENDING: 0, 
    'WEAKLY ASCENDING': 0,
    DESCENDING: 0, 
    'WEAKLY DESCENDING': 0,
  };

  // compare previous element und current element
  // add +1 to necessecery counter
  // if count of elements is not equal maximum of counters, then random
  for (let i = 1; i < arr.length; i += 1) {
    // console.log(arr);
    const prev = arr[i - 1];
    const current = arr[i];

    if (prev === current) {
      counters.CONSTANT += 1;
      counters['WEAKLY ASCENDING'] += 1;
      counters['WEAKLY DESCENDING'] += 1;
    } else if (current > prev) {
      counters['WEAKLY ASCENDING'] += 1;
      counters.ASCENDING += 1;
    } else if (current < prev) {
      counters['WEAKLY DESCENDING'] += 1;
      counters.DESCENDING += 1;
    }
    
    const values = Object.values(counters);
    // console.log('values', prev, current, prev > current);
    if (Math.max(...values) !== i) {
      return 'RANDOM';
    }
  }

  for (key in counters) {
    if (counters[key] === arr.length - 1) {
      return key;
    }
  }
}

rl.close();

const stopNumber = -2 * (10 ** 9);

rl.on('line', (str) => {
  if (str.length !== 0 && Number(str) !== stopNumber) {
    data.push(Number(str));
  } else {
    rl.close();
    console.log(func(data));
  }
});
console.log(func([3, 2, 1]))
console.log(func([-10, -9, -8,-7, -1]))