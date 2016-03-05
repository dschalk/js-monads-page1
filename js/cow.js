import snabbdom from 'snabbdom';
import h from 'snabbdom/h';


const monad = h('pre', {style: {color: '#AFEEEE' }}, `  class Monad {
    var _this = this;
    constructor(z,g) {

      this.x = z;
      if (arguments.length === 1) {this.id = 'anonymous'}
      else {this.id = g}

      this.bnd = function (func, ...args) {
        return func(_this.x, ...args);
      };

      this.ret = function (a) {
        _this.x = a;
        return _this;
      };
    };
  };
` );  
  
const steps = h('pre', {style: {color: '#AFEEEE' }}, `
    mM1.ret(0)
     .bnd(x => mM2.ret(x)
     .bnd(() => mM3.ret(0()
     .bnd(x => mM4.ret(x)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) ))))
     update0();
` );  

const test = h('pre', {style: {color: '#AFEEEE' }}, 
`mM8.ret('test');
mM2.ret(mM8.x);
mM3.fmap(_ => mM8.x);
mM8.bnd(mM4.ret);` );  

const functions1 = h('pre', {style: {color: '#AFEEEE' }}, 
`
var cube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var add = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
}

var ret = function ret(v) {
  var mon = new Monad(v);
  return mon;
}
` );  

const lambdas  = h('pre', {style: {color: '#AFEEEE' }}, 
`
    mM3.ret(2)
     .bnd(() => mM2
     .ret(7)
     .bnd(() => mM1
     .ret(3)
     .bnd(x => mM2
     .bnd(y => mM3
     .bnd(z => mM4
     .ret(x*y*z) 
     .bnd(() => mM5.ret('Lambda!')           
        ))))))
` );  

const test3 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test4 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test5 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test6 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test7 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const next = h('div', {style: {fontSize: '28px', color: 'FFFF00'}}, 'mMI2.release()'  );


export default {monad, steps, next, test, functions1, lambdas};


