//\\//\\ src/demo/El.Box-demo.6.js



if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Boxes overwrite them.
var dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Create a small Box filled with hash ('#') characters.
var box0 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    12
  , left:   40
  , width:  10
  , height: 4
  , char:   '#'
})

//// Overlay it with a Box filled with 'X' characters.
var box1 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    10
  , left:   28
  , width:  15
  , height: 5
  , char:   'X'
})

//// Create a 1x1 Box which is just a single asterisk ('*') character.
var box2 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    0
  , left:   0
  , width:  1
  , height: 1
  , char:   '*'
})

//// Create a 1x1 Box which is just a single underscore ('_') character.
var box3 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    23
  , left:   79
  , width:  1
  , height: 1
  , char:   '_'
})

//// Create a Box which extends beyond the right-edge, filled with 'right-'.
var box4 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    3
  , left:   70
  , width:  20
  , height: 2
  , char:   'right-'
})

//// Create a Box which extends beyond the left-edge, filled with 'left-'.
var box5 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    3
  , left:   -10
  , width:  20
  , height: 2
  , char:   'left-'
})

//// Create a Box which extends beyond the bottom-edge, filled with 'bottom-'.
var box6 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    20
  , left:   40
  , width:  2
  , height: 8
  , char:   'bottom-'
})

//// Create a Box which extends beyond the top-edge, filled with 'top-'.
var box7 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    -4
  , left:   40
  , width:  2
  , height: 8
  , char:   'top-'
})

//// Create 'Box Eight', which is 3x3.
var box8 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    12
  , left:   4
  , width:  3
  , height: 3
  , char:   8
})

//// Create 'Box Nine', which is 2x3.
var box9 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    12
  , left:   12
  , width:  2
  , height: 3
  , char:   9
})

//// Create 'Box Ten', which is 1x3.
var box10 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    12
  , left:   17
  , width:  1
  , height: 3
  , char:   10
})

//// Create 'Box Eleven', which is 0x3.
var box11 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    12
  , left:   21
  , width:  0
  , height: 3
  , char:   11
})

//// Create 'Box Twelve', which is 3x2.
var box12 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    16
  , left:   4
  , width:  3
  , height: 2
  , char:   12
})

//// Create 'Box Thirteen', which is 3x1.
var box13 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    19
  , left:   4
  , width:  3
  , height: 1
  , char:   13
})

//// Create 'Box Fourteen', which is 3x0.
var box14 = dumpsta.add({
    el:     window.Dumpsta.El.Box
  , top:    21
  , left:   4
  , width:  3
  , height: 0
  , char:   14
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move the first Box.
dumpsta.edit({
    id:     box0
  , top:    14
  , left:   48
})

//// Change the second Box’s fill to '0123456789'.
dumpsta.edit({
    id:     box1
  , char:   '0123456789'
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})




//\\//\\ built by Oopish Make 0.0.6
