"use strict";
if ('function' != typeof jQuery)
  throw Error('jQuery not found');
jQuery(function($) {
  var dumpsta = new window.Dumpsta({char: ': · · · · '});
  $('#dump-ui').on('mousemove mousedown mouseup', function(e) {
    var eventLookup = {
      mousemove: 'hover',
      mousedown: 'down',
      mouseup: 'hover'
    },
        bounds = e.target.getBoundingClientRect(),
        buttons = e.originalEvent.buttons,
        oType = e.originalEvent.type,
        type = 'mousemove' === oType && 1 === buttons ? 'mousedown' : oType,
        mode = eventLookup[type],
        x = (e.clientX - bounds.left) / (bounds.right - bounds.left),
        y = (e.clientY - bounds.top) / (bounds.bottom - bounds.top),
        click = 'mouseup' === type,
        cursor = dumpsta.trigger({
          mode: mode,
          x: x,
          y: y,
          click: click
        });
    $('body').removeClass('cursor-pointer cursor-default').addClass('cursor-' + cursor);
    $('#dump').html(dumpsta.dump());
  });
  $('#dump-ui').on('mouseout', function(e) {
    return $('body').removeClass('cursor-pointer cursor-default');
  });
  $(window).on('keydown', function(e) {
    var keyLookup = {
      Tab: 'tab',
      Enter: 'enter'
    },
        key = keyLookup[e.originalEvent.key];
    if (!key)
      return;
    e.preventDefault();
    dumpsta.trigger({
      key: key,
      shift: e.originalEvent.shiftKey
    });
    $('#dump').html(dumpsta.dump());
  });
  var border0 = dumpsta.add({
    el: window.Dumpsta.Border,
    top: 4,
    left: 3,
    width: 16,
    height: 4,
    title: 'Border Zero'
  });
  var box0 = dumpsta.add({
    el: window.Dumpsta.Box,
    top: 4,
    left: 21,
    width: 16,
    height: 4,
    char: 'Box Zero',
    down: 'box zero',
    focus: 'bOX zERO',
    hover: 'BOX ZERO',
    inert: '- ',
    click: function() {
      alert('Clicked ' + this.char);
    }
  });
  var button0 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 4,
    left: 40,
    text: 'Button Zero',
    click: function() {
      alert('Clicked ' + this.text);
    }
  });
  var button1 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 8,
    left: 40,
    text: 'Button One',
    click: null
  });
  var button2 = dumpsta.add({
    el: window.Dumpsta.Button,
    top: 12,
    left: 40,
    text: 'Button Two',
    click: function() {
      alert('Clicked ' + this.text);
    }
  });
  var label0 = dumpsta.add({
    el: window.Dumpsta.Label,
    top: 10,
    left: 3,
    width: 16,
    text: 'Label Zero'
  });
  var table0 = dumpsta.add({
    el: window.Dumpsta.Table,
    top: 4,
    left: 60,
    width: 16,
    height: 4,
    title: 'Table Zero'
  });
  $('#dump').html(dumpsta.dump());
});
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.5
