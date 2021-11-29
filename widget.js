
class Widget {
    constructor(display, timeRendering) {
        this.display = display
        this.timeRendering = timeRendering
        this.defaultValue = defaultValue
    }

    createBox() {
        // Create a box for time
        var TimeBox = blessed.box({
            top: 0,
            left: 0,
            width: '50%',
            height: '50%',
            content: getTime(),
            tags: true,
            border: {
            type: 'line'
            },
            style: {
            fg: 'white',
            bg: 'magenta',
            border: {
                fg: '#f0f0f0'
            },
            hover: {
                bg: 'green'
            }
            }
        });
        
    }
}

module.exports = {Widget}