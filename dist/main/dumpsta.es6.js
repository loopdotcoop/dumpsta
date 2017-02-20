//\\//\\ src/main/App.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'

const NAME     = 'Dumpsta'
    , VERSION  = '0.0.2'
    , HOMEPAGE = 'http://dumpsta.loop.coop/'


//// `Dumpsta`
const Dumpsta = ROOT.Dumpsta = class {

    constructor (config={}) {

        //// Record configuration.
        const defaults = {
            width:  80      // width of the grid in chars
          , height: 24      // height of the grid in chars
          , format: 'plain' // 'plain', 'cli' or 'html'
          , char:   ' '     // fills the full-scale Box
          , trails: false   // ignore full-scale Box before `dump()`?
        }
        Object.assign(this, defaults, config)

        //// Prepare to record new Elements.
        this.id  = 0  // the first Element’s id will be `0`
        this.els = [] // iterate through Elements by z-index
        this.ids = {} // lookup Elements by id

        //// Initialise the grid by filling it with empty rows...
        this.grid = []
        for (let y=0; y<this.height; y++) {
            this.grid[y] = [] // create the row
            for (let x=0; x<this.width; x++)
                this.grid[y][x] = { c:' ' } // `c` stands for 'character'
        }

        //// ...and adding a full-scale Box (filled with spaces, by default).
        this.add({ el:Dumpsta.Box, char:this.char })
    }


    //// Renders each element to the grid, and then returns it as a string.
    dump (config={}) {

        //// Fill in missing configuration with defaults.
        let {
            top    = 0
          , left   = 0
          , width  = this.width
          , height = this.height
          , format = this.format
          , trails = !! this.trails
        } = config

        //// Tell each element to render itself, in z-index order.
        //// Usually we render Element 0 first, which wipes the grid clean.
        let el, i = trails ? 1 : 0
        while (el = this.els[i++]) el.render(config)

        //// Render each line to a string in an array...
        let out = []
        for (let y=top; y<height; y++) {
            let line = ''
            for (let x=left; x<width; x++)
                line += this.grid[y][x].c
            out.push(line) // create the output-row
        }

        //// ...and then return the array as a newline-delimited string.
        return out.join('\n')
    }


    //// Creates a new Element at the top layer.
    add (config={}) {
        const id = config.id = this.id++ // record the new ID in `config`
        const z  = config.z  = this.els.length // record the z-index in `config`
        this.ids[id] = this.els[z] = new config.el(config, this)
        return id
    }


    //// Modifies an Element.
    edit (config={}) {
        const el = this.ids[config.id]
        if (! el) return // no such element
        el.edit(config)
    }

}




//// Properties on the `Dumpsta` class.
Dumpsta.NAME     = NAME
Dumpsta.VERSION  = VERSION
Dumpsta.HOMEPAGE = HOMEPAGE




//// PRIVATE FUNCTIONS

////
// function NOOP () {}


}( 'object' == typeof global ? global : this ) // `window` in a browser




//\\//\\ src/main/Border.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Border = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   0
          , width:  app.width
          , height: app.height
          , title:  ''
        }
        Object.assign(this, defaults, config, { app })
    }

    render (config) { //@todo don’t draw outside the left or right bounds
        const { top, left, width, height, title } = this

        if (1 > width || 1 > height) return // invisible

        //// Handy constants.
        const grid   = this.app.grid
        const right  = left + width  - 1
        const bottom = top  + height - 1

        //// Draw the top border.
        if (grid[top]) {
            grid[top][left] = { c:"." }
            for (let x=left+1; x<right; x++)
                grid[top][x] = { c:"-" }
            grid[top][right] = { c:"." }
        }

        //// Draw the left and right borders.
        for (let y=top+1; y<bottom; y++)
            if (grid[y])
                grid[y][left]  = { c:"|" }
              , grid[y][right] = { c:"|" }

        //// Draw the bottom border.
        if (grid[bottom]) { // don’t fall off the bottom of the grid
            grid[bottom][left] = { c:"'" }
            for (let x=left+1; x<right; x++)
                grid[bottom][x] = { c:"=" }
            grid[bottom][right] = { c:"'" }
        }

        //// Draw the title.
        if (grid[top]) {
            const len = Math.min(title.length, width-2)
            let x = Math.ceil(left + width / 2) - Math.ceil(len / 2)
            for (let i=0; i<len; i++, x++)
                grid[top][x] = { c:title[i] }
        }

    }

    edit (config) { //@todo inherit from Element
        for (let key in config) this[key] = config[key]
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser




//\\//\\ src/main/Box.es6.js



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




//\\//\\ src/main/Button.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Button = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   0
          , width:  null // if set in `config.width`, we switch off auto-width
          , auto:   true // auto-width overrides `width`
          , height: 3
          , char:   ' ' // passed to Box’s constructor
          , text:   ''  // passed to Label’s constructor
        }
        Object.assign(this, defaults, config, { app })

        //// @todo clarify possible config.width vs config.auto conflicts
        if (null != this.width && ! config.auto) this.auto = false

        //// Set `width` based on the length of the text, in auto-width mode.
        if (this.auto) this.width = this.text.length + 4

        //// A Button is composed of a Box of spaces, a Border...
        const Dumpsta = ROOT.Dumpsta
        this.box    = new ROOT.Dumpsta.Box(this, app)
        this.border = new ROOT.Dumpsta.Border(this, app)

        //// ...and a Label.
        this.label = new ROOT.Dumpsta.Label({
            top:    this.top   + Math.floor( (this.height-1) / 2 )
          , center: this.left  + Math.floor( (this.width) / 2 )
          , width:  this.width - 2
          , text:   this.text
        }, app)
    }

    render (config) {
        if (1 > this.width || 1 > this.height) return // invisible
        this.box.render()
        this.border.render()
        this.label.render()
    }

    edit (config) {
        for (let key in config) this[key] = config[key]
        if (this.auto) this.width = this.text.length + 4
        this.box.edit(config)
        this.border.edit(config)
        this.label.edit({
            top:    this.top   + Math.floor( (this.height-1) / 2 )
          , center: this.left  + Math.floor( (this.width) / 2 )
          , width:  this.width - 2
          , text:   this.text
        })
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser




//\\//\\ src/main/Label.es6.js



//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Label = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   null // set this to align left
          , center: null // set this to align center
          , right:  null // set this to align right
          , width:  null // if set in `config.width`, we switch off auto-width
          , auto:   true // auto-width overrides `width`
          , text:   ''
        }
        Object.assign(this, defaults, config, { app })

        //// @todo clarify possible config.width vs config.auto conflicts
        if (null != this.width && ! config.auto) this.auto = false

        //// Set `width` to the length of the text, in auto-width mode.
        if (this.auto) this.width = this.text.length
    }

    render (config) {
        const { top, left, center, right, width, auto, text } = this
        const grid   = this.app.grid
        const length = text.length

        const w = auto ? length : width // auto-width ignores `this.width`
        if (1 > w) return // invisible

        //// Set `begin`, the grid x-position of the leftmost character.
        const begin =
            null != left   ? left
          : null != center ? center - Math.floor( w / 2 )
          : null != right  ? right - w
          : 0

        //// Truncate the Label if width is less than text length (+ve `pos`),
        //// or pad the Label if width is greater than text length (-ve `pos`).
        //// If the Label’s width is the same as its text length, `pos` will be
        //// zero whatever the alignent.
        let pos =
            null != left   ? 0
          : null != center ? Math.floor( (length-w) / 2 )
          : null != right  ? length - w
          : 0

        //// Draw each character.
        if (grid[top]) // not outside the top or bottom bounds
            for (let x=begin,c; x<begin+w; x++,pos++)
                if (grid[top][x]) // not outside the left or right bounds
                    if (c = text[pos])
                        grid[top][x] = {c} // effectively `{ c:text[pos] }`

    }

    edit (config) { //@todo inherit from Element
        for (let key in config) this[key] = config[key]
        if (this.auto) this.width = this.text.length
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser




//\\//\\ built by Oopish Make 0.0.4
