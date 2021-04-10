const array = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43,
  1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12,
   19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

let count = 0;

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j -= 1) {
      count += 1;
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

console.log(insertionSort(array), `\ncount of operations: ${count}`);
