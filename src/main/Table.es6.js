//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.Table = class {

    constructor (config, app) {

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   0
          , width:  null   // auto-width
          , height: null   // auto-height
          , auto:   true   // override `width` and `height` @todo clarify
          , char:   ' '    // passed to Box’s constructor
          , title:  ''     // passed to Border’s constructor
          , header:  false // whether to treat first row `row[0]` as a header
          , rows:    []
        }
        Object.assign(this, defaults, config, { app })

        //// @todo clarify possible config.width/height vs config.auto conflicts
        if (null != this.width  && ! config.auto) this.auto = false
        if (null != this.height && ! config.auto) this.auto = false

        //// Set `height` based on the number of rows, in auto-height mode.
        if (this.auto)
            this.height = this.rows.length + 2
        else
            this.rows = this.rows.slice(0, this.height - 2)

        ////
        const { top, left, width, height, auto, rows } = this
        const maxs = []
        const lefts  = [ left + 1 ]
        let row, val;

        //// Convert all values to strings. @todo record types
        for (let r=0; r<rows.length; r++)
            for (let row=rows[r],c=0; c<row.length; c++)
                row[c] = null == row[c] ? '' : row[c]+''

        //// Find the number of columns.
        const cols = rows.reduce( (acc, val) => Math.max(acc, val.length), 0 )

        //// Fill missing cells.
        for (let c=0,r=0; c<cols; c++,r=0)
            while (row=rows[r++]) row[c] = null == row[c] ? '' : row[c]

        //// Calculate maximum string-length for each column.
        for (let c=0,r=0; c<cols; c++,r=0) {
            maxs[c] = 0
            while (row=rows[r++])
                maxs[c] = Math.max(maxs[c], row[c].length)
        }

        //// Calculate column-left positions, plus the final column-right pos.
        for (let c=0,l=left; c<maxs.length; c++)
            lefts[c+1] = (l += maxs[c]) + 1

        //// Set `width` based on the width of the data, in auto-width mode.
        if (this.auto) this.width = lefts[lefts.length-1] - this.left + 1

        //// A Table is composed of a Box of spaces, a Border...
        this.box    = new ROOT.Dumpsta.Box(this, app)
        this.border = new ROOT.Dumpsta.Border(this, app)

        //// ...and a grid of Labels:
        this.labels = []
        for (let r=0,row; row=rows[r]; r++)
            for (let c=0; c<cols; c++)
                this.labels.push( new ROOT.Dumpsta.Label({
                    top:    this.top   + 1 + r
                  , left:   lefts[c]
                  , width:  maxs[c]
                  , text:   rows[r][c]
                }, app) )
    }

    render (config) {
        if (1 > this.width || 1 > this.height) return // invisible
        this.box.render()
        this.border.render()
        this.labels.forEach( label => label.render() )
    }

    edit (config) {
        for (let key in config) this[key] = config[key]
        this.box.edit(config)
        this.border.edit(config)
        // this.labels.forEach( label =>
        //     label.edit({
        //         top:    this.top   + Math.floor( (this.height-1) / 2 )
        //       , center: this.left  + Math.floor( (this.width) / 2 )
        //       , width:  this.width - 2
        //       , text:   '@todo'
        //     })
        // )
    }

}


}( 'object' == typeof global ? global : this ) // `window` in a browser
