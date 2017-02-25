"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The Dumpsta class', function() {
    is('undefined' != typeof Dumpsta, 'The Dumpsta object exists');
    is('function' == typeof Dumpsta, 'Dumpsta is a function');
    is('Dumpsta' == Dumpsta.NAME, 'NAME as expected');
    is('0.0.' == Dumpsta.VERSION.slice(0, 4), 'VERSION as expected');
    is(0 < Dumpsta.HOMEPAGE.indexOf('://dumpsta'), 'HOMEPAGE as expected');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The El class', function() {
    is('function' == typeof Dumpsta.El, '`Dumpsta.El` is a function');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The El.Border class', function() {
    is('function' == typeof Dumpsta.El.Border, '`Dumpsta.El.Border` is a function');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The El.Box class', function() {
    is('function' == typeof Dumpsta.El.Box, '`Dumpsta.El.Box` is a function');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The El.Button class', function() {
    is('function' == typeof Dumpsta.El.Button, '`Dumpsta.El.Button` is a function');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  test('The El.Label class', function() {
    is('function' == typeof Dumpsta.El.Label, '`Dumpsta.El.Label` is a function');
  });
});
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  'use strict';
  test('The El.Table class', function() {
    is('function' == typeof Dumpsta.El.Table, '`Dumpsta.El.Table` is a function');
  });
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.7 //\\//\\ http://ootility.oopish.com //\\//\\
