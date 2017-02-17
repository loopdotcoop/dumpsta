//\\//\\ src/example/1-creating-boxes.es6.js



if ('function' != typeof jQuery) throw Error('jQuery not found')
jQuery( function($) {


//// Create a Dumpsta instance with default configuration.
var dumpsta = new window.Dumpsta()

//// Create a small box filled with hash ('#') characters.
var box0 = dumpsta.addBox({
    top:    12
  , left:   40
  , width:  10
  , height: 4
  , char:   '#'
})

//// Overlay it with a box filled with 'X' characters.
var box1 = dumpsta.addBox({
    top:    10
  , left:   30
  , width:  15
  , height: 5
  , char:   'X'
})

//// Create a 1x1 box which is just a single asterisk ('*') character.
var box2 = dumpsta.addBox({
    top:    0
  , left:   0
  , width:  1
  , height: 1
  , char:   '*'
})

//// Create a 1x1 box which is just a single underscore ('_') character.
var box3 = dumpsta.addBox({
    top:    23
  , left:   79
  , width:  1
  , height: 1
  , char:   '_'
})

//// Create a box which extends beyond the right-edge, filled with 'r'.
var box4 = dumpsta.addBox({
    top:    3
  , left:   70
  , width:  20
  , height: 2
  , char:   'r'
})

//// Create a box which extends beyond the left-edge, filled with 'l'.
var box5 = dumpsta.addBox({
    top:    3
  , left:   -10
  , width:  20
  , height: 2
  , char:   'l'
})

//// Create a box which extends beyond the bottom-edge, filled with 'b'.
var box6 = dumpsta.addBox({
    top:    20
  , left:   40
  , width:  2
  , height: 8
  , char:   'b'
})

//// Create a box which extends beyond the top-edge, filled with 't'.
var box7 = dumpsta.addBox({
    top:    -4
  , left:   40
  , width:  2
  , height: 8
  , char:   't'
})

//// Render.
$('#dump').html( dumpsta.dump() )

//// Move the first box.
dumpsta.editBox({
    id:     box0
  , left:   10
})

//// Change the second box’s fill to the hyphen ('-') character.
dumpsta.editBox({
    id:     box1
  , char:   '-'
})

//// Render, without wiping the previous render.
$('#dump').html( dumpsta.dump({ trails:true }) )


})




//\\//\\ built by Dumpsta Make 0.0.1
