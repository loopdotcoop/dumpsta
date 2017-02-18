//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Box = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   0
          , width:  app.width
          , height: app.height
          , char:   ' '
        }
        Object.assign(this, defaults, config, { app })

        //// Convert `char` to a string.
        this.char += ''
    }

    render (config) {
        const { top, left, width, height, char } = this
        const grid   = this.app.grid
        const length = char.length // `char[i % length]` allows multi-char fills

        if (1 > width || 1 > height) return // invisible

        //// Draw the Box.
        for (let y=top; y<top+height; y++)
            if (grid[y]) // skip the row if missing
                for (let x=left,i=0; x<left+width; x++,i++)
                    if (grid[y][x]) // skip the grid-position if missing
                        grid[y][x] = { c:char[i % length] } // draw the char
    }

    edit (config) { //@todo inherit from Element
        for (let key in config) this[key] = config[key]
        this.char += ''
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser
