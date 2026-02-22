console.log('Hello, world!');
setTimeout(() => {  console.log('This is a delayed message.');},0);
process.nextTick(() => {
    console.log('This is a next tick message.');
});
Promise.resolve().then(() => {
    console.log('This is a resolved promise message.');
}
);
console.log('This is a synchronous message.');