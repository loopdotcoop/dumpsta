//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'

const NAME     = 'Dumpsta'
    , VERSION  = '0.0.9'
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
        this.id    = 0  // the first Element’s id will be `0`
        this.els   = [] // iterate through Elements by z-index
        this.ids   = {} // lookup Elements by id
        this.focus = 0  // id of the Element which currently has focus

        //// Initialise the grid by filling it with empty rows...
        this.grid = []
        for (let y=0; y<this.height; y++) {
            this.grid[y] = [] // create the row
            for (let x=0; x<this.width; x++)
                this.grid[y][x] = { c:' ' } // `c` stands for 'character'
        }

        //// ...and adding a full-scale Box (filled with spaces, by default).
        this.add({ class:Dumpsta.El.Box, char:this.char })
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
        this.ids[id] = this.els[z] = new config.class(config, this)
        return id
    }


    //// Modifies an Element.
    edit (config={}) {
        const el = this.ids[config.id]
        if (! el) return // no such element
        el.edit(config)
    }

    //// Triggers events on Elements.
    trigger (config) {
        const { ids, id } = this

        //// Deal with a ‘Tab’ trigger, eg `{ key:'tab', shift:false }`.
        if ('tab' == config.key) {
            if (ids[this.focus]) ids[this.focus].mode = 'char'
            const modifier = config.shift ? id-1 : 1
            for (let i=0; i<id; i++) {
                this.focus = (this.focus + modifier) % id
                if (ids[this.focus].click) break // got a clickable Element
            }
            if (ids[this.focus]) ids[this.focus].mode = 'focus'

        //// Deal with ‘Enter’ or ‘Return’ being pressed, eg `{ key:'enter' }`.
        } else if ('enter' == config.key) {
            if (ids[this.focus] && ids[this.focus].click)
                ids[this.focus].click()

        //// Deal with a direct call to focus on an Element.
        } else if (null != config.focus) {
            if (ids[config.focus] && ids[config.focus].click) {
                if (ids[this.focus]) ids[this.focus].mode = 'char'
                this.focus = config.focus
                ids[this.focus].mode = 'focus'
            }

        //// Deal with a mouse event.
        } else if (config.mode) {

            this.els.forEach( el => el.mode = 'focus' == el.mode ? 'focus' : 'char' ) // reset all modes
            const x  = Math.floor(this.width  * config.x)
                , y  = Math.floor(this.height * config.y)
                , el = this.grid[y][x].el
            if (! el) return // not interactive
            el.mode = 'focus' == el.mode ? 'focus' : config.mode
            if (el.click) {
                if (config.click) {
                    el.click() // note that clicking switches focus
                    if (ids[this.focus]) ids[this.focus].mode = 'char'
                    this.focus = el.id
                    el.mode = 'focus'
                }
                return 'pointer'
            } else {
                return 'default'
            }

        }
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
