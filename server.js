//How Node Js Differ From Vanila Js
// 01. Node Js Runs On Server- not in browser

//02. The console is the terminal, not the browser console

//03. global object instead of window object
//04. Node Js has its own built-in modules like fs, os, path, etc.
//05.commonJs module system instead of ES6 modules
//06.Missing some Js Apis like fetch

const os = require("os");
const path = require("path");

const { add, divide, multiply, subtract } = require("./math");

//module means  a file or unit of code that can be reused in any file of node.js app.

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
