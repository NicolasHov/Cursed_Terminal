const {Widget} = require('./widget.js');
var blessed = require('blessed');


// Create a screen object.
var screen = blessed.screen({
    smartCSR: true
  });
   
  screen.title = 'Cursed Terminal';

  
class Screen {
    constructor() {
        //
    }
    addWidget(obj) {
        // Append our box to the screen.
        screen.append(Widget.createBox(obj))
        // Render the screen.
        screen.render();
    }
}

module.exports = {Screen}