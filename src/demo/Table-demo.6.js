if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
//// Fill the grid with dots, so we can see how the Tables overwrite them.
let dumpsta = new window.Dumpsta({
    char: ': · · · · ' // note the use of a multi-character fill
})

//// Create an auto-width Table with the text 'Table Zero'.
let table0 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    10
  , left:   36
  , title:  'Table Zero'
  , rows:   [
        [ 'Header ', 'Goes   ' ,'In     ', 'Here   ' ]
      , [ 55.3,      14.404,    -17.6,     4e3       ]
    ]
})

//// Create a Table with extra width, containing the text 'Table One'.
let table1 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    7
  , left:   10
  , auto:   true
  , title:  'Table One'
  , rows:   []
})

//// Create a 1x1 Table in the top left corner.
let table2 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    0
  , left:   0
  , width:  1
  , height: 1
})

//// Create a 1x1 Table near the bottom right corner.
let table3 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    22
  , left:   77
  , width:  1
  , height: 1
})

//// Create 'Table Four' which extends beyond the right-edge.
let table4 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    7
  , left:   66
  , width:  20
  , height: 2
  , title:  'Table Four'
})

//// Create 'Table Five' which extends beyond the left-edge.
let table5 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    1
  , left:   -7
  , width:  20
  , height: 2
  , title:  'Table Five'
})

//// Create 'Table Six' which extends beyond the bottom-edge.
let table6 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    20
  , left:   14
  , width:  40
  , height: 8
  , title:  'Table Six'
})

//// Create 'Table Seven' which extends beyond the top-edge.
let table7 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    -2
  , left:   14
  , width:  40
  , height: 6
  , title:  'Table Seven'
})

//// Create 'Table Eight', which is 3x3.
let table8 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    12
  , left:   4
  , width:  3
  , height: 3
  , title:  'Table Eight'
})

//// Create 'Table Nine', which is 2x3.
let table9 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    12
  , left:   12
  , width:  2
  , height: 3
  , title:  'Table Nine'
})

//// Create 'Table Ten', which is 1x3.
let table10 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    12
  , left:   17
  , width:  1
  , height: 3
  , title:  'Table Ten'
})

//// Create 'Table Eleven', which is 0x3.
let table11 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    12
  , left:   21
  , width:  0
  , height: 3
  , title:  'Table Eleven'
})

//// Create 'Table Twelve', which is 4x2.
let table12 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    16
  , left:   4
  , width:  4
  , height: 2
  , title:  'Table Twelve'
})

//// Create 'Table Thirteen', which is 3x1.
let table13 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    19
  , left:   4
  , width:  3
  , height: 1
  , title:  'Table Thirteen'
})

//// Create 'Table Fourteen', which is 3x0.
let table14 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    22
  , left:   4
  , width:  3
  , height: 0
  , title:  'Table Fourteen'
})

//// Create 'Table Fifteen', which is truncates the text.
let table15 = dumpsta.add({
    el:     window.Dumpsta.Table
  , top:    16
  , left:   65
  , width:  12
  , height: 5
  , title:  'Table Fifteen'
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move 'Table Zero'.
dumpsta.edit({
    id:     table0
  , left:   28
  , top:    15
  , rows:   [
        [ 'Header ', 'Goes  ' ,'In   ', 'Here ' ]
      , [ 15.3,      4.404,    -7.6,     1e3       ]
    ]
})

//// Change the 'Table One' text.
dumpsta.edit({
    id:     table1
  , title:  'Table One!'
  , rows:   [
        [  1 ,  2 ,  3  ]
      , [ 'A', 'B', 'C' ]
      , [ null, undefined, true, false ]
    ]
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})
