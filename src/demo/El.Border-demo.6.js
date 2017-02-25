if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Borders overwrite them.
let dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Create a default Border.
let border = dumpsta.add({ el:window.Dumpsta.El.Border })

//// Create a Border with the title 'Border Zero'.
let border0 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    6
  , left:   20
  , width:  15
  , height: 4
  , title:  'Border Zero'
})

//// Overlay it with 'Border One'.
let border1 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    4
  , left:   9
  , width:  15
  , height: 4
  , title:  'Border One'
})

//// Create a 1x1 Border in the top left corner.
let border2 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    0
  , left:   0
  , width:  1
  , height: 1
})

//// Create a 1x1 Border near the bottom right corner.
let border3 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    22
  , left:   77
  , width:  1
  , height: 1
})

//// Create 'Border Four' which extends beyond the right-edge.
let border4 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    7
  , left:   66
  , width:  20
  , height: 2
  , title:  'Border Four'
})

//// Create 'Border Five' which extends beyond the left-edge.
let border5 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    1
  , left:   -7
  , width:  20
  , height: 2
  , title:  'Border Five'
})

//// Create 'Border Six' which extends beyond the bottom-edge.
let border6 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    20
  , left:   14
  , width:  40
  , height: 8
  , title:  'Border Six'
})

//// Create 'Border Seven' which extends beyond the top-edge.
let border7 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    -4
  , left:   14
  , width:  40
  , height: 8
  , title:  'Border Seven'
})

//// Create 'Border Eight', which is 3x3.
let border8 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    12
  , left:   4
  , width:  3
  , height: 3
  , title:  'Border Eight'
})

//// Create 'Border Nine', which is 2x3.
let border9 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    12
  , left:   12
  , width:  2
  , height: 3
  , title:  'Border Nine'
})

//// Create 'Border Ten', which is 1x3.
let border10 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    12
  , left:   17
  , width:  1
  , height: 3
  , title:  'Border Ten'
})

//// Create 'Border Eleven', which is 0x3.
let border11 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    12
  , left:   21
  , width:  0
  , height: 3
  , title:  'Border Eleven'
})

//// Create 'Border Twelve', which is 3x2.
let border12 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    16
  , left:   4
  , width:  3
  , height: 2
  , title:  'Border Twelve'
})

//// Create 'Border Thirteen', which is 3x1.
let border13 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    19
  , left:   4
  , width:  3
  , height: 1
  , title:  'Border Thirteen'
})

//// Create 'Border Fourteen', which is 3x0.
let border14 = dumpsta.add({
    el:     window.Dumpsta.El.Border
  , top:    21
  , left:   4
  , width:  3
  , height: 0
  , title:  'Border Fourteen'
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move 'Border Zero'.
dumpsta.edit({
    id:     border0
  , left:   28
  , top:    8
})

//// Change the 'Border One' title.
dumpsta.edit({
    id:     border1
  , title:  'Border One!'
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})
