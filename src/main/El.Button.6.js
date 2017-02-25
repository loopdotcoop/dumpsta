//// Dumpsta //// 0.0.* //// February 2017 //// http://dumpsta.loop.coop/ //////

!function (ROOT) { 'use strict'


ROOT.Dumpsta.El.Button = class extends ROOT.Dumpsta.El {

    constructor (config, app) {
        super(config, app)

        //// Record configuration.
        const defaults = {
            top:    0
          , left:   0
          , width:  null // if set in `config.width`, we switch off auto-width
          , auto:   true // auto-width overrides `width`
          , height: 3
          , text:   ''  // passed to Label’s constructor
          , char:   ' ' // passed to Box’s constructor
          , down:     null
          , focus:    null
          , hover:    null
          , inert:    null
          , mode:     'char'
          , click:    null
          , el:       this
        }
        Object.assign(this, defaults, config, { app })

        //// @todo clarify possible config.width vs config.auto conflicts
        if (null != this.width && ! config.auto) this.auto = false

        //// Set `width` based on the length of the text, in auto-width mode.
        if (this.auto) this.width = this.text.length + 4

        //// A Button is composed of a Box of spaces, a Border...
        this.box    = new ROOT.Dumpsta.El.Box(this, app)
        this.border = new ROOT.Dumpsta.El.Border(this, app)

        //// ...and a Label.
        this.label = new ROOT.Dumpsta.El.Label({
            top:    this.top   + Math.floor( (this.height-1) / 2 )
          , center: this.left  + Math.floor( (this.width) / 2 )
          , width:  this.width - 2
          , text:   this.text
          , el:     this.el
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
