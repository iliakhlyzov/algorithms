const unsortedArray = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43,
  1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12,
   19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

let count = 0;

function quickSort(coll) {
  count += 1;
  if (coll.length < 2) return coll;
  const pivot = coll[Math.floor(coll.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < coll.length; i += 1) {
    const current = coll[i];

    if (pivot > current) {
      left.push(current);
    }
    if (pivot < current) {
      right.push(current);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(unsortedArray), `\ncount of operations: ${count}`);

export default quickSort;