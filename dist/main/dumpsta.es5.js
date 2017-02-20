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
!function(ROOT) {
  'use strict';
  ROOT.Dumpsta.Table = ($traceurRuntime.createClass)(function(config, app) {
    var defaults = {
      top: 0,
      left: 0,
      width: null,
      height: null,
      auto: true,
      char: ' ',
      title: '',
      header: false,
      rows: []
    };
    Object.assign(this, defaults, config, {app: app});
    if (null != this.width && !config.auto)
      this.auto = false;
    if (null != this.height && !config.auto)
      this.auto = false;
    if (this.auto)
      this.height = this.rows.length + 2;
    else
      this.rows = this.rows.slice(0, this.height - 2);
    var $__3 = this,
        top = $__3.top,
        left = $__3.left,
        width = $__3.width,
        height = $__3.height,
        auto = $__3.auto,
        rows = $__3.rows;
    var maxs = [];
    var lefts = [left + 1];
    var row,
        val;
    for (var r = 0; r < rows.length; r++)
      for (var row$__12 = rows[r],
          c = 0; c < row$__12.length; c++)
        row$__12[c] = null == row$__12[c] ? '' : row$__12[c] + '';
    var cols = rows.reduce(function(acc, val) {
      return Math.max(acc, val.length);
    }, 0);
    for (var c$__13 = 0,
        r$__14 = 0; c$__13 < cols; c$__13++, r$__14 = 0)
      while (row = rows[r$__14++])
        row[c$__13] = null == row[c$__13] ? '' : row[c$__13];
    for (var c$__15 = 0,
        r$__16 = 0; c$__15 < cols; c$__15++, r$__16 = 0) {
      maxs[c$__15] = 0;
      while (row = rows[r$__16++])
        maxs[c$__15] = Math.max(maxs[c$__15], row[c$__15].length);
    }
    for (var c$__17 = 0,
        l = left; c$__17 < maxs.length; c$__17++)
      lefts[c$__17 + 1] = (l += maxs[c$__17]) + 1;
    if (this.auto)
      this.width = lefts[lefts.length - 1] - this.left + 1;
    this.box = new ROOT.Dumpsta.Box(this, app);
    this.border = new ROOT.Dumpsta.Border(this, app);
    this.labels = [];
    for (var r$__18 = 0,
        row$__19 = void 0; row$__19 = rows[r$__18]; r$__18++)
      for (var c$__20 = 0; c$__20 < cols; c$__20++)
        this.labels.push(new ROOT.Dumpsta.Label({
          top: this.top + 1 + r$__18,
          left: lefts[c$__20],
          width: maxs[c$__20],
          text: rows[r$__18][c$__20]
        }, app));
  }, {
    render: function(config) {
      if (1 > this.width || 1 > this.height)
        return;
      this.box.render();
      this.border.render();
      this.labels.forEach(function(label) {
        return label.render();
      });
    },
    edit: function(config) {
      for (var key in config)
        this[key] = config[key];
      this.box.edit(config);
      this.border.edit(config);
    }
  }, {});
}('object' == (typeof global === 'undefined' ? 'undefined' : $traceurRuntime.typeof(global)) ? global : this);
//# sourceURL=<compile-source>




//\\//\\ built by Oopish Make 0.0.5
