"use strict";
console.log(1);
setTimeout(() => { console.log(2); }, 0);
process.nextTick(() => {
    console.log(3);
});
Promise.resolve().then(() => {
    console.log(4);
});

