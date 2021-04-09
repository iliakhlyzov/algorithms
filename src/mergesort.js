const unsortedArray = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43,
   1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12,
    19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

let count = 0;

const mergeSort = (array) => {
  count += 1;
  if (array.length < 2) {
    return array;
  }
  const piv = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, piv));
  const right = mergeSort(array.slice(piv));
  return merge(left, right);
}

const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    sorted.push(left[0] > right[0]
      ? right.shift() : left.shift())
  }
  return [...sorted, ...left, ...right];
}

console.log(mergeSort(unsortedArray), `\ncount of operations: ${count}`);

export default mergeSort;