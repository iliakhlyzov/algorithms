const assert = require('assert');

function scan(matrix) {
  const result = { ceil: 0, floor: 0, both: 0 };

  const n = matrix[0].length;
  const m = matrix.length;


  // обработка случая, когда количество строк в матрице только 1
  if (m === 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (matrix[0][columnIndex] === 0) continue;
      if (matrix[0][columnIndex - 1]) continue;
      result.both += 1;
    }
    // console.log('result (m=1):', result);
    return result;
  }

  const exploredNodes = [];
  const unexploredNodes = [];

  let isBoth = false;
    result.ceil += 1;
    unexploredNodes.push([0, columnIndex]); // вершина с 1 
  // для каменной породы, которая свисает с потолка; цикл только для первой строчки
  // arr = [0, m - 1]
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (matrix[0][columnIndex] === 0) continue;
    if (exploredNodes.includes(`0${columnIndex}`)) continue;

    const lookAroundOf = ([i, j]) => {
      exploredNodes.push(`${i}${j}`);
      if (matrix[i][j + 1] && matrix[i][j + 1]) {
        if (!exploredNodes.includes(`${i}${j + 1}`)) {
          unexploredNodes.push([i, j + 1]);
        }
      }
      if (matrix[i][j - 1] && matrix[i][j - 1]) {
        if (!exploredNodes.includes(`${i}${j - 1}`)) {
          unexploredNodes.push([i, j - 1]);
        }
      }
      if (matrix[i + 1] && matrix[i + 1][j]) {
        if (!exploredNodes.includes(`${i + 1}${j}`)) {
          unexploredNodes.push([i + 1, j]);
        }
        if (i + 1 === m - 1 && !isBoth) {
          isBoth = true;
          result.ceil -= 1;
          result.both += 1;
        }
      }
      if (matrix[i - 1] && matrix[i - 1][j]) {
        if (!exploredNodes.includes(`${i - 1}${j}`)) {
          unexploredNodes.push([i - 1, j]);
        }
      }
    }

    
    
    while (unexploredNodes.length !== 0) {
      // console.log('while unexploredNodes', unexploredNodes)
      const point = unexploredNodes.pop();
      exploredNodes.push(point);
      lookAroundOf(point);
    }
  }

  // для каменной породы, которая идет снизу
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (matrix[m - 1][columnIndex] === 0) continue;
    if (exploredNodes.includes(`${m - 1}${columnIndex}`)) continue;

    result.floor += 1;
    unexploredNodes.push([0, columnIndex]);
    const lookAroundOf = ([i, j]) => {
      exploredNodes.push(`${i}${j}`);
      if (matrix[i][j + 1] && matrix[i][j + 1]) {
        if (!exploredNodes.includes(`${i}${j + 1}`)) {
          unexploredNodes.push([i, j + 1]);
        }
      }
      if (matrix[i][j - 1] && matrix[i][j - 1]) {
        if (!exploredNodes.includes(`${i}${j - 1}`)) {
          unexploredNodes.push([i, j - 1]);
        }
      }
      if (matrix[i + 1] && matrix[i + 1][j]) {
        if (!exploredNodes.includes(`${i + 1}${j}`)) {
          unexploredNodes.push([i + 1, j]);
        }
      }
      if (matrix[i - 1] && matrix[i - 1][j]) {
        if (!exploredNodes.includes(`${i - 1}${j}`)) {
          unexploredNodes.push([i - 1, j]);
        }
      }
    }
    while (unexploredNodes.length !== 0) {
      const point = unexploredNodes.pop();
      exploredNodes.push(point);
      lookAroundOf(point);
    }
  }
  // console.log(exploredNodes)
  return result;
}


assert.deepStrictEqual(scan([[0,0,0]]), { ceil: 0, floor: 0, both: 0 });
assert.deepStrictEqual(scan([[0,0,1]]), { ceil: 0, floor: 0, both: 1 });
assert.deepStrictEqual(scan([[1,0,1]]), { ceil: 0, floor: 0, both: 2 });
assert.deepStrictEqual(scan([[1,1,1]]), { ceil: 0, floor: 0, both: 1 });
assert.deepStrictEqual(scan([[0,1,0]]), { ceil: 0, floor: 0, both: 1 });

assert.deepStrictEqual(scan([[0], [0]]), { ceil: 0, floor: 0, both: 0 });
assert.deepStrictEqual(scan([[1], [0]]), { ceil: 1, floor: 0, both: 0 });
assert.deepStrictEqual(scan([[1], [1]]), { ceil: 0, floor: 0, both: 1 });
assert.deepStrictEqual(scan([[1, 1], [1, 1]]), { ceil: 0, floor: 0, both: 1 });
assert.deepStrictEqual(scan([[1, 0, 1], [1, 0, 1]]), { ceil: 0, floor: 0, both: 2 });
assert.deepStrictEqual(scan([[1, 0, 1], [1, 0, 1], [0, 0, 0]]), { ceil: 2, floor: 0, both: 0 });
const testMatrix = [
  [1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1]  
]
console.log(scan(testMatrix));

//  1 0 1 0 1
//  1 0 0 1 1
//  1 1 1 1 1
//  0 0 0 0 0
//  1 1 0 0 0 
//  1 1 0 0 0
