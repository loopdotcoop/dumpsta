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
