if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Tables overwrite them.
let dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Attach mouse-listeners to the overlay.
$('#dump-ui').on('mousemove mousedown mouseup'
  , e => {
        const eventLookup = {
                mousemove: 'hover'
              , mousedown: 'down'
              , mouseup:   'hover'
            }
          , bounds = e.target.getBoundingClientRect()
          , buttons = e.originalEvent.buttons
          , oType = e.originalEvent.type
          , type = 'mousemove' === oType && 1 === buttons ? 'mousedown' : oType
          , mode = eventLookup[type]
          , x = (e.clientX - bounds.left) / (bounds.right - bounds.left)
          , y = (e.clientY - bounds.top ) / (bounds.bottom - bounds.top)
          , click = 'mouseup' === type
          , cursor = dumpsta.trigger({ mode, x, y, click })
        $('body')
           .removeClass('cursor-pointer cursor-default') //@todo remove all possible cursors
           .addClass('cursor-' + cursor)
        $('#dump').html( dumpsta.dump() )
    }
)
$('#dump-ui').on( 'mouseout'
  , e => $('body').removeClass('cursor-pointer cursor-default') //@todo remove all possible cursors
)

//// Attach keyboard-listeners to the window.
$(window).on('keydown'
  , e => {
        const keyLookup = {
                  Tab:   'tab'
                , Enter: 'enter'
              }
            , key = keyLookup[ e.originalEvent.key ]
        if (! key) return // not a keypress we’re interested in
        e.preventDefault()
        dumpsta.trigger({ key, shift:e.originalEvent.shiftKey })
        $('#dump').html( dumpsta.dump() )
    }
)


//// Create 'Border Zero'.
let border0 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    4
  , left:   3
  , width:  16
  , height: 4
  , title:  'Border Zero'
})

//// Create 'Box Zero'.
let box0 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    4
  , left:   21
  , width:  16
  , height: 4
  , char:   'Box Zero'
  , down:   'box zero'
  , focus:  'bOX zERO'
  , hover:  'BOX ZERO'
  , inert:  '- '
  , click:  function () { alert('Clicked '+this.char) }
})

//// Create 'Button Zero'.
let button0 = dumpsta.add({
    el:     window.Dumpsta.El.Button
  , top:    4
  , left:   40
  , text:   'Button Zero'
  , click:  function () { alert('Clicked '+this.text) }
})

//// Create 'Button One' (has no click-function).
let button1 = dumpsta.add({
    el:     window.Dumpsta.El.Button
  , top:    8
  , left:   40
  , text:   'Button One'
  , click:  null
})

//// Create 'Button Two'.
let button2 = dumpsta.add({
    el:     window.Dumpsta.El.Button
  , top:    12
  , left:   40
  , text:   'Button Two'
  , click:  function () { alert('Clicked '+this.text) }
})

//// Create 'Label Zero'.
let label0 = dumpsta.add({
    el:     window.Dumpsta.El.Label
  , top:    10
  , left:   3
  , width:  16
  , text:   'Label Zero'
})

//// Create 'Table Zero'.
let table0 = dumpsta.add({
    el:     window.Dumpsta.El.Table
  , top:    4
  , left:   60
  , width:  16
  , height: 4
  , title:  'Table Zero'
})

//// Render.
$('#dump').html( dumpsta.dump() )

})
