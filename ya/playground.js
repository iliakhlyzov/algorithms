'use strict';

((global) => {
    const timeout = 20;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeout);
    };

    const Folder = function (a = []) {
        if (!new.target) {
            return new Folder(a);
        }

        this.read = (index, cb) => _async(() => a[index], cb);
        this.size = (cb) => _async(() => a.length, cb);
    };

    Object.freeze(Folder);
    global.Folder = Folder;
})(typeof window === 'undefined' ? global : window);

const input = Folder([
    'file',
    'ffffile',
    Folder([
        'file',
    ]),
    Folder([
        'fiiile',
    ]),
    Folder([
        {},
        null,
        'file',
        'ffiillee',
        'ffiillee',
    ]),
    Folder([
        Folder([
            'filllle',
            'file',
            null,
        ]),
        {},
        Folder([])
    ]),
]);

// проверка решения
solution(input).then(result => {
    console.log('solution.then', result);
    const answer = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});

async function solution(input) {
    // ... решение задачи
    // пример вызова read
    const state = {
      arr: [],
    };
    const init = (input) => {
      let a = 0;
      input.size((i) => { a = i; });
      console.log('a', a);
      input.size((size) => {
        // console.log(files)
        if (size === 0) return;
        for (let i = 0; i < size; i += 1) {
          input.read(i, (file) => {
            if (file instanceof Folder) {
              init(file);
              return;
            }
            if (typeof file === 'string') {
              if (file.match(/(\w)\1/)) {
                state.arr.push(file);
                console.log(state.arr)
              }
            }
            return;
          });
        }
      });
    };
    // const brokenFiles = init(input, []);
    init(input);
    return Promise.resolve(state.arr);
    // input.read(1, (file) => console.log(file));

    // пример вызова size
    // input.size((size) => console.log(size));
}

// function hello() {

// };

// () => {};
