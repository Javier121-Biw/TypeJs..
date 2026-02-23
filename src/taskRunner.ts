

console.log("taskRunner");

function syntask() {
  console.log("syntask");
}

function microtask() {
    Promise.resolve().then(() => {
        console.log("microtask");
    });
}

function macrotask() {
    setTimeout(() => {
        console.log("macrotask");
    }, 0);
}
syntask();
microtask();
macrotask();
console.log("end");

function synask() {
    process.nextTick(() => {
        console.log("synask");
    });
}
synask();