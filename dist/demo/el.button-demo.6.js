//\\//\\ src/demo/El.Button-demo.6.js



if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Buttons overwrite them.
let dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Create an auto-width Button with the text 'Button Zero'.
let button0 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    10
  , left:   36
  , text:   'Button Zero'
})

//// Create a Button with extra width, containing the text 'Button One'.
let button1 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    7
  , left:   10
  , width:  20
  , text:   'Button One'
})

//// Create a 1x1 Button in the top left corner.
let button2 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    0
  , left:   0
  , width:  1
  , height: 1
})

//// Create a 1x1 Button near the bottom right corner.
let button3 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    22
  , left:   77
  , width:  1
  , height: 1
})

//// Create 'Button Four' which extends beyond the right-edge.
let button4 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    7
  , left:   66
  , width:  20
  , height: 2
  , text:   'Button Four'
})

//// Create 'Button Five' which extends beyond the left-edge.
let button5 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    1
  , left:   -7
  , width:  20
  , height: 2
  , text:   'Button Five'
})

//// Create 'Button Six' which extends beyond the bottom-edge.
let button6 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    20
  , left:   14
  , width:  40
  , height: 8
  , text:   'Button Six'
})

//// Create 'Button Seven' which extends beyond the top-edge.
let button7 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    -2
  , left:   14
  , width:  40
  , height: 6
  , text:   'Button Seven'
})

//// Create 'Button Eight', which is 3x3.
let button8 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    12
  , left:   4
  , width:  3
  , height: 3
  , text:   'Button Eight'
})

//// Create 'Button Nine', which is 2x3.
let button9 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    12
  , left:   12
  , width:  2
  , height: 3
  , text:   'Button Nine'
})

//// Create 'Button Ten', which is 1x3.
let button10 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    12
  , left:   17
  , width:  1
  , height: 3
  , text:   'Button Ten'
})

//// Create 'Button Eleven', which is 0x3.
let button11 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    12
  , left:   21
  , width:  0
  , height: 3
  , text:   'Button Eleven'
})

//// Create 'Button Twelve', which is 4x2.
let button12 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    16
  , left:   4
  , width:  4
  , height: 2
  , text:   'Button Twelve'
})

//// Create 'Button Thirteen', which is 3x1.
let button13 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    19
  , left:   4
  , width:  3
  , height: 1
  , text:   'Button Thirteen'
})

//// Create 'Button Fourteen', which is 3x0.
let button14 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    22
  , left:   4
  , width:  3
  , height: 0
  , text:   'Button Fourteen'
})

//// Create 'Button Fifteen', which is truncates the text.
let button15 = dumpsta.add({
    class:  window.Dumpsta.El.Button
  , top:    16
  , left:   65
  , width:  8
  , height: 5
  , text:   'Button Fifteen'
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move 'Button Zero'.
dumpsta.edit({
    id:     button0
  , left:   28
  , top:    8
})

//// Change the 'Button One' text.
dumpsta.edit({
    id:     button1
  , text:   'Button One!'
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})




//\\//\\ built by Oopish Make 0.0.6
