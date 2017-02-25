"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  var box0 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 12,
    left: 40,
    width: 10,
    height: 4,
    char: '#'
  });
  var box1 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 10,
    left: 28,
    width: 15,
    height: 5,
    char: 'X'
  });
  var box2 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    char: '*'
  });
  var box3 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 23,
    left: 79,
    width: 1,
    height: 1,
    char: '_'
  });
  var box4 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 3,
    left: 70,
    width: 20,
    height: 2,
    char: 'right-'
  });
  var box5 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 3,
    left: -10,
    width: 20,
    height: 2,
    char: 'left-'
  });
  var box6 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 20,
    left: 40,
    width: 2,
    height: 8,
    char: 'bottom-'
  });
  var box7 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: -4,
    left: 40,
    width: 2,
    height: 8,
    char: 'top-'
  });
  var box8 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 12,
    left: 4,
    width: 3,
    height: 3,
    char: 8
  });
  var box9 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 12,
    left: 12,
    width: 2,
    height: 3,
    char: 9
  });
  var box10 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 12,
    left: 17,
    width: 1,
    height: 3,
    char: 10
  });
  var box11 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 12,
    left: 21,
    width: 0,
    height: 3,
    char: 11
  });
  var box12 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 16,
    left: 4,
    width: 3,
    height: 2,
    char: 12
  });
  var box13 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 19,
    left: 4,
    width: 3,
    height: 1,
    char: 13
  });
  var box14 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 21,
    left: 4,
    width: 3,
    height: 0,
    char: 14
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: box0,
    top: 14,
    left: 48
  });
  dumpsta.edit({
    id: box1,
    char: '0123456789'
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.6
