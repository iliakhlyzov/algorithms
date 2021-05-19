const f = () => console.log('hey!');
console.log('before timeout');
// В браузере идентификатор таймера это числовое значение
// В node.js это объект
const timerId = setTimeout(f, 1000);
console.log('after timeout');
console.log(clearTimeout(timerId))