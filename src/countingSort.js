// a - unsorted array
// b - sorted array
// c - 

const array = [3,4,1,0,5,0,3,1,3];


const countingSort = (a, b = [], k = 5) => {
  const c = [];
  for (let i = 0; i <= k; i+= 1) {
    c[i] = 0;
  }
  for (const el of a) {
    c[el] += 1;
  }
  for (let i = 1; i <= k; i += 1) {
    c[i] = c[i] + c[i - 1];
  }
  for (let j = a.length - 1; j >= 0; j -= 1) {
    b[c[a[j]]] = a[j];
    c[a[j]] -= 1;
  }
  return b;
}

console.log(countingSort(array).flat());

export default countingSort;