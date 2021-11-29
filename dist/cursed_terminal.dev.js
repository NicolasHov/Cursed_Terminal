"use strict";

var blessed = require('blessed');

var os = require('os');

var util = require('util'); // Create a screen object.


var screen = blessed.screen({
  smartCSR: true
});
screen.title = 'Cursed Terminal';
var date_ob = new Date();

var getTime = function getTime() {
  return dateTime = new Date().toLocaleString('fr', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

getTotalRAM = function getTotalRAM() {
  // Get the number of total memory in Byte
  var totalRAM = os.totalmem(); // Print the result in MB

  return Math.floor(totalRAM / (1024 * 1024));
};

getFreeRAM = function getFreeRAM() {
  // Get the number of available memory in Byte
  var freeRAM = os.freemem(); // Print the result in MB

  return Math.floor(freeRAM / (1024 * 1024));
}; // Create a box for time


var TimeBox = blessed.box({
  top: 0,
  left: 0,
  width: '50%',
  height: '50%',
  content: "".concat(getTime()),
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    // bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {//   bg: 'green'
    }
  }
}); // Create a box for time

var MemoryBox = blessed.box({
  top: 0,
  right: 0,
  width: '30%',
  height: '30%',
  content: "".concat(getFreeRAM()),
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'green',
    border: {
      fg: '#f0f0f0'
    },
    hover: {// ...
    }
  }
});
var AnotherStrangeBox = blessed.box({
  parent: screen,
  bottom: 0,
  right: 0,
  width: '50%',
  height: '50%',
  style: {
    bg: 'red'
  },
  keys: true,
  vi: true,
  alwaysScroll: true,
  scrollable: true,
  scrollbar: {
    style: {
      bg: 'yellow'
    }
  }
}); // Append our box to the screen.

screen.append(TimeBox);
screen.append(MemoryBox);

for (var i = 0; i < 20; i++) {
  AnotherStrangeBox.insertLine(0, 'texting ' + i);
  AnotherStrangeBox.screen.render();
}

setInterval(function () {
  TimeBox.setContent(getTime());
  MemoryBox.setContent(util.format('%sMb / %sMb', getFreeRAM(), getTotalRAM())); // Render the screen.

  screen.render();
}, 1000); // // If our box is clicked, change the content.
// TimeBox.on('click', function(data) {
//   TimeBox.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
//   screen.render();
// });
// If box is focused, handle `enter`/`return` and give us some more content.
// TimeBox.key('enter', function(ch, key) {
//   TimeBox.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   TimeBox.setLine(1, 'bar');
//   TimeBox.insertLine(1, 'foo');
//   screen.render();
// });
// Quit on Escape, q, or Control-C.

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
}); // Focus our element.
// TimeBox.focus();