import fs from "fs";

console.log("Start");

fs.readFile(__filename, () => {
  console.log("I/O Done");
});

console.log("End");