//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'

const NAME     = 'Dumpsta'
    , VERSION  = '0.0.1'
    , HOMEPAGE = 'http://dumpsta.loop.coop/'


//// `Dumpsta`
const Dumpsta = ROOT.Dumpsta = class {

    constructor (config={}) {

        //// Record configuration.
        const defaults = {
            width:  80      // width of the grid in chars
          , height: 24      // height of the grid in chars
          , format: 'plain' // 'plain', 'cli' or 'html'
          , trails: false   // ignore full-scale spaces box before `dump()`?
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

        //// ...and adding a full-scale box filled with spaces.
        this.addBox()
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
        while (el = this.els[i++]) el.dump(config)

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


    ////
    addBox (config={}) {
        const id = config.id = this.id++ // record the new ID in `config`
        const z  = config.z  = this.els.length // record the z-index in `config`
        this.ids[id] = this.els[z] = new Dumpsta.Box(config, this) // top layer
        return id
    }


    ////
    editBox (config={}) {
        const el = this.ids[config.id]
        if (! el) return // no such element
        for (let key in config) el[key] = config[key]
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
