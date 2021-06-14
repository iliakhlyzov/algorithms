const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

rl.on('line', (input) => {
  data.push(input);
  if (data.length == 2) {
    const [troom, tcond] = data[0].split(' ').map(Number);
    const mode = data[1];

    getFinalTemperature(troom, tcond, mode); 
    rl.close();
  }
});

const getFinalTemperature = (troom, tcond, mode) => {
  // console.log('data', troom, tcond, mode)
  const modes = {
    freeze: () => troom > tcond ? tcond : troom,
    heat: () => troom < tcond ? tcond: troom,
    auto: () => tcond,
    fan: () => troom,
  };

  process.stdout.write(`${modes[mode]()}`);
}


