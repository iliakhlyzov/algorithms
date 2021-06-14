/* eslint no-console: "off", max-len: "off" */

// Даны два списка чисел, которые могут содержать до 10000 чисел каждый.
// Выведите все числа, которые входят как в первый, так и во второй список в порядке возрастания.
// Примечание. И даже эту задачу на Питоне можно решить в одну строчку.
// Формат ввода

// Вводятся два списка целых чисел. Все числа каждого списка находятся на отдельной строке.
// Формат вывода

import fs from 'fs';

const fileContent = fs.readFileSync('./input.txt', 'utf8');

const [arr1, arr2] = fileContent.toString().split('\n').map((el) => el.split(' '));
const set1 = new Set(arr1);
const set2 = new Set(arr2);

const getIntersection = (array1, array2) => {
  const result = [];
  array1.forEach((element) => {
    // console.log('element', element)
    if (array2.has(element)) {
      result.push(+element);
    }
  });
  return result;
};

const sortedArray = getIntersection(set1, set2).sort((x, y) => x - y);
// console.log('set1, set2, sortedArray', ...set1, ...set2, sortedArray);

fs.writeFileSync('./output.txt', sortedArray.join(' '));
