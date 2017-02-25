"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  var table0 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 10,
    left: 36,
    title: 'Table Zero',
    rows: [['Header ', 'Goes   ', 'In     ', 'Here   '], [55.3, 14.404, -17.6, 4e3]]
  });
  var table1 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 7,
    left: 10,
    auto: true,
    title: 'Table One',
    rows: []
  });
  var table2 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 0,
    left: 0,
    width: 1,
    height: 1
  });
  var table3 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 22,
    left: 77,
    width: 1,
    height: 1
  });
  var table4 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 7,
    left: 66,
    width: 20,
    height: 2,
    title: 'Table Four'
  });
  var table5 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 1,
    left: -7,
    width: 20,
    height: 2,
    title: 'Table Five'
  });
  var table6 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 20,
    left: 14,
    width: 40,
    height: 8,
    title: 'Table Six'
  });
  var table7 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: -2,
    left: 14,
    width: 40,
    height: 6,
    title: 'Table Seven'
  });
  var table8 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 12,
    left: 4,
    width: 3,
    height: 3,
    title: 'Table Eight'
  });
  var table9 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 12,
    left: 12,
    width: 2,
    height: 3,
    title: 'Table Nine'
  });
  var table10 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 12,
    left: 17,
    width: 1,
    height: 3,
    title: 'Table Ten'
  });
  var table11 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 12,
    left: 21,
    width: 0,
    height: 3,
    title: 'Table Eleven'
  });
  var table12 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 16,
    left: 4,
    width: 4,
    height: 2,
    title: 'Table Twelve'
  });
  var table13 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 19,
    left: 4,
    width: 3,
    height: 1,
    title: 'Table Thirteen'
  });
  var table14 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 22,
    left: 4,
    width: 3,
    height: 0,
    title: 'Table Fourteen'
  });
  var table15 = dumpsta.add({
    class: window.Dumpsta.El.Table,
    top: 16,
    left: 65,
    width: 12,
    height: 5,
    title: 'Table Fifteen'
  });
  $('#dump').html(dumpsta.dump());
  dumpsta.edit({
    id: table0,
    left: 28,
    top: 15,
    rows: [['Header ', 'Goes  ', 'In   ', 'Here '], [15.3, 4.404, -7.6, 1e3]]
  });
  dumpsta.edit({
    id: table1,
    title: 'Table One!',
    rows: [[1, 2, 3], ['A', 'B', 'C'], [null, undefined, true, false]]
  });
  $('#dump').html(dumpsta.dump({trails: true}));
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.7 //\\//\\ http://ootility.oopish.com //\\//\\
