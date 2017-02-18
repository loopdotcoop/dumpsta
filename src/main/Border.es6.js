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
