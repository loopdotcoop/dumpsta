"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta();
  var box0 = dumpsta.addBox({
    top: 12,
    left: 40,
    width: 10,
    height: 4,
    char: '#'
  });
  var box1 = dumpsta.addBox({
    top: 10,
    left: 30,
    width: 15,
    height: 5,
    char: 'X'
  });
  var box2 = dumpsta.addBox({
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    char: '*'
  });
  var box3 = dumpsta.addBox({
    top: 23,
    left: 79,
    width: 1,
    height: 1,
    char: '_'
  });
  var box4 = dumpsta.addBox({
    top: 3,
    left: 70,
    width: 20,
    height: 2,
    char: 'r'
  });
  var box5 = dumpsta.addBox({
    top: 3,
    left: -10,
    width: 20,
    height: 2,
    char: 'l'
  });
  var box6 = dumpsta.addBox({
    top: 20,
    left: 40,
    width: 2,
    height: 8,
    char: 'b'
  });
  var box7 = dumpsta.addBox({
    top: -4,
    left: 40,
    width: 2,
    height: 8,
    char: 't'
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: box0,
    left: 10
  });
  dumpsta.edit({
    id: box1,
    char: '-'
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Dumpsta Make 0.0.1
