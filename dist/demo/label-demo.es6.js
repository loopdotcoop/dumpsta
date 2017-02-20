//\\//\\ src/demo/Label-demo.es6.js



if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Borders overwrite them.
let dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Create a left-aligned auto-width Label with the text 'Label Zero.
let label0 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    11
  , text:   'Label Zero'
})

//// Overlay it with 'Label One'.
let label1 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    11
  , left:   9
  , text:   'Label One'
})

//// Create a left-aligned 1x1 Label showing the 'L' of 'Label Two'.
let label2 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    0
  , left:   0
  , width:  1
  , text:   'Label Two'
})

//// Create a right-aligned 1x1 Label showing the '!' of 'Label Three!'.
let label3 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    23
  , right:  80
  , width:  1
  , text:   'Label Three!'
})

//// Create 'Label Four' which extends one character beyond the right-edge.
let label4 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    3
  , right:  81
  , text:   'Label Four'
})

//// Create 'Label Five' which extends one character beyond beyond the left-edge.
let label5 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    3
  , left:   -1
  , text:   'Label Five'
})

//// Create 'Label Six' which is hidden below the bottom-edge.
let label6 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    24
  , text:   'Label Six'
})

//// Create 'Label Seven' which is hidden above the top-edge.
let label7 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    -1
  , text:   'Label Seven'
})

//// Create 'Label Eight', centered in the middle of the grid.
let label8 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    11
  , center: 40
  , text:   'Label Eight'
})

//// Create 'Label Nine', aligned right against the right-edge of the grid.
let label9 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    11
  , right:  80
  , text:   'Label Nine'
})

//// Create 'Label Ten', which is left aligned and truncated.
let label10 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    15
  , left:   0
  , width:  8
  , text:   'Label Ten'
})

//// Create 'Label Eleven', which is center aligned and truncated.
let label11 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    15
  , center: 40
  , width:  10
  , text:   'Label Eleven'
})

//// Create 'Label Twelve', which is right aligned and truncated.
let label12 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    15
  , right:  80
  , width:  10
  , text:   'Label Twelve'
})

//// Create 'Label Thirteen', which is left aligned and padded.
let label13 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    20
  , left:   0
  , width:  20
  , text:   'Label Thirteen'
})

//// Create 'Label Fourteen', which is center aligned and padded.
let label14 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    20
  , center: 40
  , width:  20
  , text:   'Label Fourteen'
})

//// Create 'Label Fifteen', which is right aligned and padded.
let label15 = dumpsta.add({
    el:     window.Dumpsta.Label
  , top:    20
  , right:  80
  , width:  20
  , text:   'Label Fifteen'
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move 'Label Zero'.
dumpsta.edit({
    id:     label0
  , left:   10
  , top:    12
})

//// Change the 'Label One' text.
dumpsta.edit({
    id:     label1
  , text:   'Label One!'
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})




//\\//\\ built by Oopish Make 0.0.4
