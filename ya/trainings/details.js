const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// n - масса сплава, k - масса заготовки, m - масса детали
const func = (nM, kM, mM) => {
  if (kM > nM || mM > kM) {
    return 0;
  }
  const kCount = Math.floor(nM / kM);
  const mCount = Math.floor(kM / mM) * kCount;

  const nRest = nM % kM;
  const kRest = (kM % mM) * kCount;

  if (kRest === 0) {
    return mCount;
  }
  return mCount + func(nRest + kRest, kM, mM);
}

// rl.close();
rl.on('line', (str) => {
  rl.close();
  const arr = str.split(' ').map(Number);
  console.log(func(...arr));
});

// console.log(func(1,1,1) === 1);
// console.log(func(5,3,2) === 2);