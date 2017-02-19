"use strict";
!function(ROOT) {
  'use strict';
  var NAME = 'Dumpsta',
      VERSION = '0.0.3',
      HOMEPAGE = 'http://dumpsta.loop.coop/';
  var Dumpsta = ROOT.Dumpsta = ($traceurRuntime.createClass)(function() {
    var config = arguments[0] !== (void 0) ? arguments[0] : {};
    var defaults = {
      width: 80,
      height: 24,
      format: 'plain',
      char: ' ',
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
    this.add({
      el: Dumpsta.Box,
      char: this.char
    });
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
        el.render(config);
      var out = [];
      for (var y = top; y < height; y++) {
        var line = '';
        for (var x = left; x < width; x++)
          line += this.grid[y][x].c;
        out.push(line);
      }
      return out.join('\n');
    },
    add: function() {
      var config = arguments[0] !== (void 0) ? arguments[0] : {};
      var id = config.id = this.id++;
      var z = config.z = this.els.length;
      this.ids[id] = this.els[z] = new config.el(config, this);
      return id;
    },
    edit: function() {
      var config = arguments[0] !== (void 0) ? arguments[0] : {};
      var el = this.ids[config.id];
      if (!el)
        return;
      el.edit(config);
    }
  }, {});
  Dumpsta.NAME = NAME;
  Dumpsta.VERSION = VERSION;
  Dumpsta.HOMEPAGE = HOMEPAGE;
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
!function(ROOT) {
  'use strict';
  ROOT.Dumpsta.Border = ($traceurRuntime.createClass)(function(config, app) {
    var defaults = {
      top: 0,
      left: 0,
      width: app.width,
      height: app.height,
      title: ''
    };
    Object.assign(this, defaults, config, {app: app});
  }, {
    render: function(config) {
      var $__3 = this,
          top = $__3.top,
          left = $__3.left,
          width = $__3.width,
          height = $__3.height,
          title = $__3.title;
      if (1 > width || 1 > height)
        return;
      var grid = this.app.grid;
      var right = left + width - 1;
      var bottom = top + height - 1;
      if (grid[top]) {
        grid[top][left] = {c: "."};
        for (var x = left + 1; x < right; x++)
          grid[top][x] = {c: "-"};
        grid[top][right] = {c: "."};
      }
      for (var y = top + 1; y < bottom; y++)
        if (grid[y])
          grid[y][left] = {c: "|"}, grid[y][right] = {c: "|"};
      if (grid[bottom]) {
        grid[bottom][left] = {c: "'"};
        for (var x$__10 = left + 1; x$__10 < right; x$__10++)
          grid[bottom][x$__10] = {c: "="};
        grid[bottom][right] = {c: "'"};
      }
      if (grid[top]) {
        var len = Math.min(title.length, width - 2);
        var x$__11 = Math.ceil(left + width / 2) - Math.ceil(len / 2);
        for (var i = 0; i < len; i++, x$__11++)
          grid[top][x$__11] = {c: title[i]};
      }
    },
    edit: function(config) {
      for (var key in config)
        this[key] = config[key];
    }
  }, {});
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
    this.char += '';
  }, {
    render: function(config) {
      var $__3 = this,
          top = $__3.top,
          left = $__3.left,
          width = $__3.width,
          height = $__3.height,
          char = $__3.char;
      var grid = this.app.grid;
      var length = char.length;
      if (1 > width || 1 > height)
        return;
      for (var y = top; y < top + height; y++)
        if (grid[y])
          for (var x = left,
              i = 0; x < left + width; x++, i++)
            if (grid[y][x])
              grid[y][x] = {c: char[i % length]};
    },
    edit: function(config) {
      for (var key in config)
        this[key] = config[key];
      this.char += '';
    }
  }, {});
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
!function(ROOT) {
  'use strict';
  ROOT.Dumpsta.Button = ($traceurRuntime.createClass)(function(config, app) {
    var defaults = {
      top: 0,
      left: 0,
      width: null,
      auto: true,
      height: 3,
      char: ' ',
      text: ''
    };
    Object.assign(this, defaults, config, {app: app});
    if (null != this.width && !config.auto)
      this.auto = false;
    if (this.auto)
      this.width = this.text.length + 4;
    var Dumpsta = ROOT.Dumpsta;
    this.box = new ROOT.Dumpsta.Box(this, app);
    this.border = new ROOT.Dumpsta.Border(this, app);
    this.label = new ROOT.Dumpsta.Label({
      top: this.top + Math.floor((this.height - 1) / 2),
      center: this.left + Math.floor((this.width) / 2),
      width: this.width - 2,
      text: this.text
    }, app);
  }, {
    render: function(config) {
      if (1 > this.width || 1 > this.height)
        return;
      this.box.render();
      this.border.render();
      this.label.render();
    },
    edit: function(config) {
      for (var key in config)
        this[key] = config[key];
      if (this.auto)
        this.width = this.text.length + 4;
      this.box.edit(config);
      this.border.edit(config);
      this.label.edit({
        top: this.top + Math.floor((this.height - 1) / 2),
        center: this.left + Math.floor((this.width) / 2),
        width: this.width - 2,
        text: this.text
      });
    }
  }, {});
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
!function(ROOT) {
  'use strict';
  ROOT.Dumpsta.Label = ($traceurRuntime.createClass)(function(config, app) {
    var defaults = {
      top: 0,
      left: null,
      center: null,
      right: null,
      width: null,
      auto: true,
      text: ''
    };
    Object.assign(this, defaults, config, {app: app});
    if (null != this.width && !config.auto)
      this.auto = false;
    if (this.auto)
      this.width = this.text.length;
  }, {
    render: function(config) {
      var $__3 = this,
          top = $__3.top,
          left = $__3.left,
          center = $__3.center,
          right = $__3.right,
          width = $__3.width,
          auto = $__3.auto,
          text = $__3.text;
      var grid = this.app.grid;
      var length = text.length;
      var w = auto ? length : width;
      if (1 > w)
        return;
      var begin = null != left ? left : null != center ? center - Math.floor(w / 2) : null != right ? right - w : 0;
      var pos = null != left ? 0 : null != center ? Math.floor((length - w) / 2) : null != right ? length - w : 0;
      if (grid[top])
        for (var x = begin,
            c = void 0; x < begin + w; x++, pos++)
          if (grid[top][x])
            if (c = text[pos])
              grid[top][x] = {c: c};
    },
    edit: function(config) {
      for (var key in config)
        this[key] = config[key];
      if (this.auto)
        this.width = this.text.length;
    }
  }, {});
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.3
