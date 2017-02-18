"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  var border = dumpsta.add({el: window.Dumpsta.Border});
  var border0 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 6,
    left: 20,
    width: 15,
    height: 4,
    title: 'Border Zero'
  });
  var border1 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 4,
    left: 9,
    width: 15,
    height: 4,
    title: 'Border One'
  });
  var border2 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 0,
    left: 0,
    width: 1,
    height: 1
  });
  var border3 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 22,
    left: 77,
    width: 1,
    height: 1
  });
  var border4 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 7,
    left: 66,
    width: 20,
    height: 2,
    title: 'Border Four'
  });
  var border5 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 1,
    left: -7,
    width: 20,
    height: 2,
    title: 'Border Five'
  });
  var border6 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 20,
    left: 14,
    width: 40,
    height: 8,
    title: 'Border Six'
  });
  var border7 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: -4,
    left: 14,
    width: 40,
    height: 8,
    title: 'Border Seven'
  });
  var border8 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 12,
    left: 4,
    width: 3,
    height: 3,
    title: 'Border Eight'
  });
  var border9 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 12,
    left: 12,
    width: 2,
    height: 3,
    title: 'Border Nine'
  });
  var border10 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 12,
    left: 17,
    width: 1,
    height: 3,
    title: 'Border Ten'
  });
  var border11 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 12,
    left: 21,
    width: 0,
    height: 3,
    title: 'Border Eleven'
  });
  var border12 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 16,
    left: 4,
    width: 3,
    height: 2,
    title: 'Border Twelve'
  });
  var border13 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 19,
    left: 4,
    width: 3,
    height: 1,
    title: 'Border Thirteen'
  });
  var border14 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 21,
    left: 4,
    width: 3,
    height: 0,
    title: 'Border Fourteen'
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: border0,
    left: 28,
    top: 8
  });
  dumpsta.edit({
    id: border1,
    title: 'Border One!'
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Dumpsta Make 0.0.1
