/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/no-unresolved
import fs from 'fs/promises';
import path from 'path';
import _ from 'lodash';

const root = '/Users/ilyakhlyzov/algorithms/src/projects/futuru/';
const file1 = 'cities-eng-v2.json';
const file2 = 'cities-rus-v2.json';

const changeCities = (json) => {
  for (const key in json) {
    if (Object.hasOwnProperty.call(json, key)) {
      const cities = json[key];
      cities.forEach((city) => {
        city.city = city.city.match(/^[^(|/]*/).toString().trim();
      });
    }
  }
  return json;
};

const main = async () => {
  const data1 = await fs.readFile(root + file1, 'utf-8');
  const data2 = await fs.readFile(root + file2, 'utf-8');
  const [json1, json2] = [data1, data2].map(JSON.parse);
  changeCities(json1);
  changeCities(json2);
  await fs.writeFile(path.join(root, '1.js'), JSON.stringify(json1, null, 2));
  await fs.writeFile(path.join(root, '2.js'), JSON.stringify(json2, null, 2));
};

main();
// console.log(1);
