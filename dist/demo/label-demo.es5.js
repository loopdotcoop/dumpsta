"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  var label0 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 11,
    text: 'Label Zero'
  });
  var label1 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 11,
    left: 9,
    text: 'Label One'
  });
  var label2 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 0,
    left: 0,
    width: 1,
    text: 'Label Two'
  });
  var label3 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 23,
    right: 80,
    width: 1,
    text: 'Label Three!'
  });
  var label4 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 3,
    right: 81,
    text: 'Label Four'
  });
  var label5 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 3,
    left: -1,
    text: 'Label Five'
  });
  var label6 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 24,
    text: 'Label Six'
  });
  var label7 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: -1,
    text: 'Label Seven'
  });
  var label8 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 11,
    center: 40,
    text: 'Label Eight'
  });
  var label9 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 11,
    right: 80,
    text: 'Label Nine'
  });
  var label10 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 15,
    left: 0,
    width: 8,
    text: 'Label Ten'
  });
  var label11 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 15,
    center: 40,
    width: 10,
    text: 'Label Eleven'
  });
  var label12 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 15,
    right: 80,
    width: 10,
    text: 'Label Twelve'
  });
  var label13 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 20,
    left: 0,
    width: 20,
    text: 'Label Thirteen'
  });
  var label14 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 20,
    center: 40,
    width: 20,
    text: 'Label Fourteen'
  });
  var label15 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 20,
    right: 80,
    width: 20,
    text: 'Label Fifteen'
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: label0,
    left: 10,
    top: 12
  });
  dumpsta.edit({
    id: label1,
    text: 'Label One!'
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.4
