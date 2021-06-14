// 'use strict';

// let promise = new Promise((resolve, reject) => {

//   // через 1 секунду готов результат: result
//   setTimeout(() => resolve("result"), 1000);

//   // через 2 секунды — reject с ошибкой, он будет проигнорирован
//   setTimeout(() => reject(new Error("ignored")), 2000);

// });

// promise
//   .then(
//     result => console.log("Fulfilled: " + result), // сработает
//     error => console.log("Rejected: " + error) // не сработает
//   );

/* 
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

delay(1000)
  .then(() => console.log("Hello!"))
  */

 async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((value) => value;
}
f();