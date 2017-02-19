"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  var button0 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 10,
    left: 36,
    text: 'Button Zero'
  });
  var button1 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 7,
    left: 10,
    width: 20,
    text: 'Button One'
  });
  var button2 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 0,
    left: 0,
    width: 1,
    height: 1
  });
  var button3 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 22,
    left: 77,
    width: 1,
    height: 1
  });
  var button4 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 7,
    left: 66,
    width: 20,
    height: 2,
    text: 'Button Four'
  });
  var button5 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 1,
    left: -7,
    width: 20,
    height: 2,
    text: 'Button Five'
  });
  var button6 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 20,
    left: 14,
    width: 40,
    height: 8,
    text: 'Button Six'
  });
  var button7 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: -2,
    left: 14,
    width: 40,
    height: 6,
    text: 'Button Seven'
  });
  var button8 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 12,
    left: 4,
    width: 3,
    height: 3,
    text: 'Button Eight'
  });
  var button9 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 12,
    left: 12,
    width: 2,
    height: 3,
    text: 'Button Nine'
  });
  var button10 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 12,
    left: 17,
    width: 1,
    height: 3,
    text: 'Button Ten'
  });
  var button11 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 12,
    left: 21,
    width: 0,
    height: 3,
    text: 'Button Eleven'
  });
  var button12 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 16,
    left: 4,
    width: 4,
    height: 2,
    text: 'Button Twelve'
  });
  var button13 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 19,
    left: 4,
    width: 3,
    height: 1,
    text: 'Button Thirteen'
  });
  var button14 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 22,
    left: 4,
    width: 3,
    height: 0,
    text: 'Button Fourteen'
  });
  var button15 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 16,
    left: 65,
    width: 8,
    height: 5,
    text: 'Button Fifteen'
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: button0,
    left: 28,
    top: 8
  });
  dumpsta.edit({
    id: button1,
    text: 'Button One!'
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.3
