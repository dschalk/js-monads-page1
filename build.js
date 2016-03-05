(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var monad = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var Monad = function Monad(z, g) {\n  var _this = this;\n\n  this.x = z;\n  if (arguments.length === 1) {\n    this.id = \'anonymous\';\n  } else {\n    this.id = g;\n  }\n\n  this.bnd = function (func, ...args) {\n     return func(_this.x, ...args);\n  };\n\n  this.ret = function (a) {\n    window[_this.id] = new Monad(a, _this.id);\n    return window[_this.id]\n  };\n};\n');

var functions1 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\nvar cube = function(v) {\n  var mon = new Monad(v*v*v);\n  return mon;\n}\n\nvar add = function(a, b) {\n  var mon = new Monad(a+b);\n  return mon;\n}\n\nvar ret = function ret(v) {\n  var mon = new Monad(v);\n  return mon;\n}\n');

var test3 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n');

var test4 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n');

var test5 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n');

exports['default'] = { monad: monad, functions1: functions1 };
module.exports = exports['default'];

},{"snabbdom":9,"snabbdom/h":3}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var _cowJs = require('./cow.js');

var _cowJs2 = _interopRequireDefault(_cowJs);

var patch = _snabbdom2['default'].init([require('snabbdom/modules/class'), // makes it easy to toggle classes
require('snabbdom/modules/props'), // for setting properties on DOM elements
require('snabbdom/modules/style'), // handles styling on elements with support for animations
require('snabbdom/modules/eventlisteners')]);

// attaches event listeners
var oldVnode = document.getElementById('placeholder');

var style2 = { backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '22px' };
var style1 = { backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '22px' };
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%', width: '100%', color: '#FFE4C4', fontSize: '22px', textAlign: 'left' };
var styleM = { color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '28px' };
var styleMI = { color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '22px' };
var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function view(m1, m2, m3, m4, m5, m6, m7, m8) {
  return (0, _snabbdomH2['default'])('div', { style: style3 }, [(0, _snabbdomH2['default'])('div', { style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '24px' } }, [(0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#BBFFFF' } }, 'JS Monads Part 1'), (0, _snabbdomH2['default'])('span', { style: { marginLeft: '18px' } }, 'The code for this single-page site is at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/js-monads-page1' }, style: { color: '#EECCFF' } }, 'js-monads-page1'), (0, _snabbdomH2['default'])('p', ' Here is how the Monad class is defined:'), _cowJs2['default'].monad, (0, _snabbdomH2['default'])('p', 'And here are the functions we will use in this brief demonstration: '), _cowJs2['default'].functions1, (0, _snabbdomH2['default'])('p', ' Here we create an anonymous monad with value 0 (ret(0)), add 3 to it, cube the value. We then put the value in a monad named "mM5". mM5.x is displayed in the right column. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update7e, mouseleave: update7l, click: updateDemo1 }, style: style7 }, 'mM5.ret(ret(0).bnd(add,3).bnd(cube))'), (0, _snabbdomH2['default'])('p', 'Here is another way to assign "mM5" to a new monad. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update7e, mouseleave: update7l, click: updateDemo4 }, style: style7 }, 'ret(0).bnd(add,3).bnd(cube).bnd(v => mM5.ret(v))'), (0, _snabbdomH2['default'])('p', 'The following computation yields the same result: '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update8e, mouseleave: update8l, click: updateDemo2 }, style: style8 }, 'ret(0).bnd(x => add(x,3).bnd(cube).bnd(x => mM6.ret(x)));'), (0, _snabbdomH2['default'])('p', 'Notice how x was handed to mM6 in the above computation. In the next computation, we send x even further down the line and combine it with mM2\'s value to get the result.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: update2 }, style: style5 }, 'mM1.ret(6).bnd(x => mM2.ret(7).bnd(y => mM3.ret(x * y)))'), (0, _snabbdomH2['default'])('p', ' The bnd method provides the means to incorporate lambda expressions into a chain of monads. '), (0, _snabbdomH2['default'])('p', 'The following relationships help explain why I call Monad instances "monads": '), (0, _snabbdomH2['default'])('pre', 'ret(v).bnd(f) = f(v)\nret(v).bnd(ret) = ret(v)\n'), (0, _snabbdomH2['default'])('p', 'They can be derived from the definitions or "ret" and "Monad". Here, we show that they hold in a specific example. The monads are distinct and not equal under "===", but 64 === 64 and "cow" === "cow". The results are placed in mM1 and mM2 respectively. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update9e, mouseleave: update9l, click: updateDemo5 }, style: style9 }, 'mM1.ret(ret(4).bnd(cube).x === cube(4).x)'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateDemo6 }, style: style4 }, 'mM2.ret(ret(\'cow\').bnd(ret).x === ret(\'cow\').x)'), (0, _snabbdomH2['default'])('p', 'The value of a monad can be any javascript value, even an object containing arrays of monads and functions. There are no limitations. For any Javascript value v and function f such that f(v) = z, there is a monad m with value v and a function f\' such that "new Monad(v).bnd(f\')" returns a monad with value z. It follows that that just about anything that is possile in javascript can be done inside the monads. For example, "ret(0).bnd(x => add(x,3).bnd(cube).bnd(x => mM6.ret(x)))" (above) is a computation in monads whose result is exposed in the final step as "mM6.x" (right column). '), (0, _snabbdomH2['default'])('p'), (0, _snabbdomH2['default'])('h3', 'Next: Websocket interractions with MonadIter instances. '), (0, _snabbdomH2['default'])('p', 'In the next section, "JS-monads-part2", we will see how MonadIter facilitates building chains and trees of sometimes asynchronous computations. It utilyzes a Haskell websockets server. '), (0, _snabbdomH2['default'])('span', 'The open source code for this page is at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/JS-monads-part1' }, style: { color: '#EECCFF' } }, 'JS-monads-part1'), (0, _snabbdomH2['default'])('span', '  Demonstrations of this and the next pages in "Javascript Monads" project can be found at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net' }, style: { color: '#EECCFF' } }, 'schalk.net'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('div', { style: { height: '300px' } })]), (0, _snabbdomH2['default'])('div', { style: { width: '20%', position: 'fixed', top: '60px', right: '15px', color: '#CCFDDA', fontSize: '26px' } }, [(0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM1.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM2.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM3.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m3), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM4.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m4), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM5.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m5), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM6.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m6), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM7.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m7), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM8.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m8), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR }, 'RE-SET')])]);
}

function update0() {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateR(event) {
  mM1.ret(0);
  mM2.ret(0);
  mM3.ret(0);
  mM4.ret(0);
  mM5.ret(0);
  mM6.ret(0);
  mM7.ret(0);
  mM8.ret(0).bnd(update);
}

function update(event) {
  mM2.bnd(function (v) {
    return add(v, mM2, 5).bnd(cube);
  });
  update0();
}

function update2() {
  mM1.ret(6).bnd(function (x) {
    return mM2.ret(7).bnd(function (y) {
      return mM3.ret(x * y);
    });
  });
  update0();
}
// ((((((((((***********************************************************

function updateDemo3() {
  mM3.ret(2).bnd(function (x) {
    return mM4.ret(21).bnd(function (y) {
      return mM5.ret(x * y);
    });
  });
  update0();
}

function updateAnon() {
  new Monad(0).bnd(add, 3).bnd(cube).bnd(function (x) {
    return mM1.ret(x);
  });
  update0();
}

function updateDemo1() {
  ret(0).bnd(add, 3).bnd(cube).bnd(function (x) {
    return mM5.ret(x);
  });
  update0();
}

function updateDemo2() {
  ret(0).bnd(function (x) {
    return add(x, 3).bnd(cube).bnd(function (x) {
      return mM6.ret(x);
    });
  });
  update0();
}

function updateDemo4() {
  ret(0).bnd(add, 3).bnd(cube).bnd(function (v) {
    return mM5.ret(v);
  });
  update0();
}

function updateDemo5() {
  var w = ret(4).bnd(cube).x === cube(4).x;
  mM1.ret(w);
  update0();
}

function updateDemo6() {
  var w = ret('cow').bnd(ret).x === ret('cow').x;
  mM2.ret(w);
  update0();
}

function updateDemo7() {
  mM1.bnd(function (val) {
    return add(mM1.x, mM1, v).bnd(cube);
  });
  update0();
}

function updateDemo8() {
  mM1.bnd(add, 1).bnd(cube);
  update0();
}

function updateDemo9() {

  update0();
}

function update3e(event) {
  style0 = style1;
  update0();
}

function update3l(event) {
  style0 = style2;
  update0();
}

function update4e(event) {
  style4 = style1;
  update0();
}

function update4l(event) {
  style4 = style2;
  update0();
}

function update5e(event) {
  style5 = style1;
  update0();
}

function update5l(event) {
  style5 = style2;
  update0();
}

function update6e(event) {
  style6 = style1;
  update0();
}

function update6l(event) {
  style6 = style2;
  update0();
}

function update7e(event) {
  style7 = style1;
  update0();
}

function update7l(event) {
  style7 = style2;
  update0();
}

function update8e(event) {
  style8 = style1;
  update0();
}

function update8l(event) {
  style8 = style2;
  update0();
}

function update9e(event) {
  style9 = style1;
  update0();
}

function update9l(event) {
  style9 = style2;
  update0();
}

function updateRe(event) {
  styleR = style1;
  update0();
}

function updateRl(event) {
  styleR = style2;
  update0();
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x));

var update = function update(v) {
  var mon = ret(5);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
};

},{"./cow.js":1,"snabbdom":9,"snabbdom/h":3,"snabbdom/modules/class":5,"snabbdom/modules/eventlisteners":6,"snabbdom/modules/props":7,"snabbdom/modules/style":8}],3:[function(require,module,exports){
var VNode = require('./vnode');
var is = require('./is');

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (arguments.length === 3) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (arguments.length === 2) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  return VNode(sel, data, children, text, undefined);
};

},{"./is":4,"./vnode":10}],4:[function(require,module,exports){
module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};

},{}],5:[function(require,module,exports){
function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};

},{}],6:[function(require,module,exports){
var is = require('../is');

function arrInvoker(arr) {
  return function() { arr[0](arr[1]); };
}

function fnInvoker(arr) {
  return function(ev) { arr[0](ev); };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = [cur];
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (old.length === 2) {
      old[0] = cur[0]; // Deliberately modify old array since it's
      old[1] = cur[1]; // captured in closure created with `arrInvoker`
      on[name]  = old;
    } else {
      old[0] = cur;
      on[name] = old;
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};

},{"../is":4}],7:[function(require,module,exports){
function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};

},{}],8:[function(require,module,exports){
var raf = requestAnimationFrame || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0;
  var applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};

},{}],9:[function(require,module,exports){
// jshint newcap: false
/* global require, module, document, Element */
'use strict';

var VNode = require('./vnode');
var is = require('./is');

function isUndef(s) { return s === undefined; }

function emptyNodeAt(elm) {
  return VNode(elm.tagName, {}, [], undefined, elm);
}

var emptyNode = VNode('', {}, [], undefined, undefined);

var insertedVnodeQueue;

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (!isUndef(key)) map[key] = i;
  }
  return map;
}

function createRmCb(parentElm, childElm, listeners) {
  return function() {
    if (--listeners === 0) parentElm.removeChild(childElm);
  };
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules) {
  var i, j, cbs = {};
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function createElm(vnode) {
    var i, data = vnode.data;
    if (!isUndef(data)) {
      if (!isUndef(i = data.hook) && !isUndef(i = i.init)) i(vnode);
      if (!isUndef(i = data.vnode)) vnode = i;
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (!isUndef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = !isUndef(data) && !isUndef(i = data.ns) ? document.createElementNS(i, tag)
                                                                : document.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          elm.appendChild(createElm(children[i]));
        }
      } else if (is.primitive(vnode.text)) {
        elm.appendChild(document.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (!isUndef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = document.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      parentElm.insertBefore(createElm(vnodes[startIdx]), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i = vnode.data, j;
    if (!isUndef(i)) {
      if (!isUndef(i = i.hook) && !isUndef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (!isUndef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (!isUndef(ch)) {
        invokeDestroyHook(ch);
        listeners = cbs.remove.length + 1;
        rm = createRmCb(parentElm, ch.elm, listeners);
        for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
        if (!isUndef(i = ch.data) && !isUndef(i = i.hook) && !isUndef(i = i.remove)) {
          i(ch, rm);
        } else {
          rm();
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode);
        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode);
        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          parentElm.insertBefore(createElm(newStartVnode), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode);
          oldCh[idxInOld] = undefined;
          parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode) {
    var i, hook;
    if (!isUndef(i = vnode.data) && !isUndef(hook = i.hook) && !isUndef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    if (!isUndef(i = oldVnode.data) && !isUndef(i = i.vnode)) oldVnode = i;
    if (!isUndef(i = vnode.data) && !isUndef(i = i.vnode)) vnode = i;
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (!isUndef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (!isUndef(i) && !isUndef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (!isUndef(oldCh) && !isUndef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch);
      } else if (!isUndef(ch)) {
        addVnodes(elm, null, ch, 0, ch.length - 1);
      } else if (!isUndef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
    } else if (oldVnode.text !== vnode.text) {
      elm.textContent = vnode.text;
    }
    if (!isUndef(hook) && !isUndef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
    return vnode;
  }

  return function(oldVnode, vnode) {
    var i;
    insertedVnodeQueue = [];
    if (oldVnode instanceof Element) {
      oldVnode = emptyNodeAt(oldVnode);
    }
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    patchVnode(oldVnode, vnode);
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    insertedVnodeQueue = undefined;
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};

},{"./is":4,"./vnode":10}],10:[function(require,module,exports){
module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};

},{}]},{},[2]);
