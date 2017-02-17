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
  test('The Box class', function() {
    is('function' == typeof Dumpsta.Box, '`Dumpsta.Box` is a function');
  });
});
//# sourceURL=<compile-source>




//\\//\\ built by Dumpsta Make 0.0.1
