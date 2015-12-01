Description
===========

tualo-datamatrix is a small and simple datamatrix library written in javascript.
This library creates simple text representation of the datamatrix for the given string.

Requirements
============

* [node.js](http://nodejs.org/) -- v0.8.0 or newer


Installation
============

    npm install tualo-datamatrix

How to Use
==========

From nodejs:

    var Datamatrix = require('tualo-datamatrix').Datamatrix;
    var dm = new Datamatrix();
    var ascii = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:false});
    console.log(ascii);
    var ascii2 = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:true});
    console.log(ascii2);

In a Browser:

    <script src="lib/datamatrix.js" type="text/javascript"></script>
    <script type="text/javascript">
        var dm = new Datamatrix();
        var ascii = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:false});
        console.log(ascii);
        var ascii2 = dm.getDigit('http://tualo.de',{rectangular:false,addFNC1:true});
        console.log(ascii2);
        
        var ascii3 = dm.getDigit('http://tualo.de',{
          rectangular:false,
          addFNC1:false,
          length:144 // DataMatrix 44x44
        });
        console.log(ascii3);
    </script>

The output will be with addFNC1 = false:

    00000000000000000000
    01010101010101010100
    01011011100010110010
    01110000011011011000
    01101111011110000110
    01100011110100011000
    01111001000000010010
    01000010100101000000
    01100110101110011110
    01001001110000001000
    01010100100010111110
    01110011101111110100
    01110011100101110110
    01010111001000011100
    01100000111001001010
    01101001010111010000
    01000111101101101110
    01001100110110001000
    01111111111111111110
    00000000000000000000

The output will be with addFNC1 = true:

    00000000000000000000
    01010101010101010100
    01011011100111110010
    01101011011100110100
    01001110010001001110
    01100001101101101000
    01011101101000000010
    01001110000001100000
    01100101001100110110
    01001101010001010000
    01011100110101100110
    01110111011100010100
    01101101110101110010
    01011100010111001100
    01001010100001010010
    01110000001011001000
    01100100010000111010
    01011100111010101100
    01111111111111111110
    00000000000000000000
