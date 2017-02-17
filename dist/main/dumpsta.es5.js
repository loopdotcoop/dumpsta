"use strict";
!function(ROOT) {
  'use strict';
  var NAME = 'Dumpsta',
      VERSION = '0.0.1',
      HOMEPAGE = 'http://dumpsta.loop.coop/';
  var Dumpsta = ROOT.Dumpsta = ($traceurRuntime.createClass)(function() {
    var config = arguments[0] !== (void 0) ? arguments[0] : {};
    var defaults = {
      width: 80,
      height: 24,
      format: 'plain',
      trails: false
    };
    Object.assign(this, defaults, config);
    this.id = 0;
    this.els = [];
    this.ids = {};
    this.grid = [];
    for (var y = 0; y < this.height; y++) {
      this.grid[y] = [];
      for (var x = 0; x < this.width; x++)
        this.grid[y][x] = {c: ' '};
    }
    this.addBox();
  }, {
    dump: function() {
      var $__4,
          $__5,
          $__6,
          $__7,
          $__8,
          $__9;
      var config = arguments[0] !== (void 0) ? arguments[0] : {};
      var $__3 = config,
          top = ($__4 = $__3.top) === void 0 ? 0 : $__4,
          left = ($__5 = $__3.left) === void 0 ? 0 : $__5,
          width = ($__6 = $__3.width) === void 0 ? this.width : $__6,
          height = ($__7 = $__3.height) === void 0 ? this.height : $__7,
          format = ($__8 = $__3.format) === void 0 ? this.format : $__8,
          trails = ($__9 = $__3.trails) === void 0 ? !!this.trails : $__9;
      var el,
          i = trails ? 1 : 0;
      while (el = this.els[i++])
        el.dump(config);
      var out = [];
      for (var y = top; y < height; y++) {
        var line = '';
        for (var x = left; x < width; x++)
          line += this.grid[y][x].c;
        out.push(line);
      }
      return out.join('\n');
    },
    addBox: function() {
      var config = arguments[0] !== (void 0) ? arguments[0] : {};
      var id = config.id = this.id++;
      var z = config.z = this.els.length;
      this.ids[id] = this.els[z] = new Dumpsta.Box(config, this);
      return id;
    },
    editBox: function() {
      var config = arguments[0] !== (void 0) ? arguments[0] : {};
      var el = this.ids[config.id];
      if (!el)
        return;
      for (var key in config)
        el[key] = config[key];
    }
  }, {});
  Dumpsta.NAME = NAME;
  Dumpsta.VERSION = VERSION;
  Dumpsta.HOMEPAGE = HOMEPAGE;
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
!function(ROOT) {
  'use strict';
  ROOT.Dumpsta.Box = ($traceurRuntime.createClass)(function(config, app) {
    var defaults = {
      top: 0,
      left: 0,
      width: app.width,
      height: app.height,
      char: ' '
    };
    Object.assign(this, defaults, config, {app: app});
  }, {dump: function(config) {
      var $__3 = this,
          top = $__3.top,
          left = $__3.left,
          width = $__3.width,
          height = $__3.height,
          char = $__3.char;
      var grid = this.app.grid;
      for (var y = top; y < top + height; y++)
        if (grid[y])
          for (var x = left; x < left + width; x++)
            if (grid[y][x])
              grid[y][x] = {c: char};
    }}, {});
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
//# sourceURL=<compile-source>




//\\//\\ built by Dumpsta Make 0.0.1
