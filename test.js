// Sample Text
var Datamatrix = require('./lib/datamatrix').Datamatrix;
var dm = new Datamatrix();
var ascii = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:false});
console.log(ascii);
var ascii2 = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:true});
console.log(ascii2);
var ascii3 = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:false,length:144 /* 44x44 Matrix */});
console.log(ascii3);