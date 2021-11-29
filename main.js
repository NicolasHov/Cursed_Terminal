const {Screen} = require('./screen.js');

let screen = new Screen()

let Time = { content:Date.now}
screen.addWidget(Time);

screen.addWidget(Memory);
