//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Box = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:      0
          , left:     0
          , width:    app.width
          , height:   app.height
          , char:     ' '
          , down:     null
          , focus:    null
          , hover:    null
          , inert:    null
          , mode:     'char'
          , click:    null
          , me:       this
        }
        Object.assign(this, defaults, config, { app })

        //// Convert `char`, `down`, `focus`, `hover` and `inert` to strings.
        this.char  += ''
        this.down  = (this.down  || this.char)+''
        this.focus = (this.focus || this.char)+''
        this.hover = (this.hover || this.char)+''
        this.inert = (this.inert || this.char)+''
    }

    render (config) {
        const { top, left, width, height, mode, me } = this
        const grid   = this.app.grid
        const c      = this[ this.mode ]
        const length = c.length // `c[i % length]` allows multi-char fills

        if (1 > width || 1 > height) return // invisible

        //// Draw the Box.
        for (let y=top; y<top+height; y++)
            if (grid[y]) // skip the row if missing
                for (let x=left,i=0; x<left+width; x++,i++)
                    if (grid[y][x]) // skip the grid-position if missing
                        grid[y][x] = {
                            c: c[i % length] // draw `char` or `hover`
                          , me               // backref for mouse-events
                        }
    }

    edit (config) { //@todo inherit from Element
        for (let key in config) this[key] = config[key]
        this.hover = this.hover || this.char
        this.char  += ''
        this.hover += ''
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser
