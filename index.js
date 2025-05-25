const logEvents = require("./logEvents");

const EventEmitter = require("events");

//initialize the object
const myEmitter = new EventEmitter();

//add a listener for the log event

myEmitter.on("log", (message) => {
  logEvents(message);
});

setTimeout(() => {
  //emit the log event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
