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
    }

    dump (config) {
        const { top, left, width, height, char } = this
        const grid = this.app.grid

        //// Draw the Box.
        for (let y=top; y<top+height; y++)
            if (grid[y]) // skip the row if missing
                for (let x=left; x<left+width; x++)
                    if (grid[y][x]) // skip the grid-position if missing
                        grid[y][x] = { c:char } // draw the character
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser
