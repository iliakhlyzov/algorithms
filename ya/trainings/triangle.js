// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами.
// Если это возможно, выведите строку YES, иначе выведите строку NO.
// Треугольник — это три точки, не лежащие на одной прямойa

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

const isTriangle = ([dot1, dot2, dot3]) => {
  if (dot1 < 1 || dot2 < 1 || dot3 < 1) return false;

  const sum12 = dot1 + dot2;
  const sum23 = dot2 + dot3;
  const sum13 = dot1 + dot3;
  // console.log(sum12, sum23, sum13)
  return (sum12 > dot3 && sum23 > dot1 && sum13 > dot2)
    ? true : false;
};

rl.on('line', (input) => {
  data.push(Number(input));
  if (data.length == 3) {
    rl.close();
	const answer = isTriangle(data) ? 'YES' : 'NO';
    process.stdout.write(answer);
  }
});
