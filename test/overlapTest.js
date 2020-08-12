// Name: Tommy Cao
// Date: 8/11/20
// Description: This is the Mocha Chai unit test of the overlap.js function.

const assert = require('chai').assert;
const overlap = require('../overlap.js').overlap;

// Input unit test array
var inStrArray = [
    ["abcdfksdh", "a"],                 // a
    ["abcdfksdh", "axyz"],              // a
    ["abcdfksdh", "bxyz"],              // b
    ["abcdfksdh", "mnopqrtuvwxyzh"],    // h

    ["abcdfksdh", "abxyz"],             // ab
    ["abcdfksdh", "wxabyz"],            // ab
    ["abcdfksdh", "xyzab"],             // ab
    ["xyzab", "abcdfksdh"],             // ab

    ["abcdfksdh", "mnopqrtuvwxyzabc"],  // abc
    ["abcdfksdh", "mnopqabcrtuvwxyz"],  // abc
    ["abcdfksdh", "mnopqabcrtuvwxyzab"],// abc
    ["mnopqabcrtuvwxyzab", "abcdfksdh"],// abc

    ["I love JavaScript", "mnlovexyzab"], // love
    ["I love JavaScript", "love"],        // love
    ["mnlovexyzab", "I love JavaScript"], // love

    ["Web pages are not the only place where JavaScript is used", "Many desktop and server programs use JavaScript"],
    ["abcdfksdh", "mnopqrtuvwxyz"],       // null
    ["abcdfksdh", "dsjkfabcd"],           // abcd
];

 // Assertion passing unit test array
 var outStrArray = [
    'a',
    'a',
    'b',
    'h',
    'ab',
    'ab',
    'ab',
    'ab',
    'abc',
    'abc',
    'abc',
    'abc',
    'love',
    'love',
    'love',
    'e JavaScript',
    null,
    'abcd'
 ];

 // Assertion failing unit test array
 var outStrArrayFail = [
    'aa',
    'b',
    'a',
    ' ',
    'ba',
    'ab ',
    'abc',
    'aaa',
    'bbb',
    'cba',
    '   ',
    '123',
    'evol',
    'loev',
    'olve',
    'JavaScript e',
    'null',
    'dcba'
 ];


let result;

// Unit test
for (let i=0; i < inStrArray.length; i++) {
    describe('Overlap unit test:', function(){
        // Passing test
        it('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArray[i], function(){
            result = overlap(inStrArray[i]);
            assert.equal(result, outStrArray[i]);    
        });
        
        // Failing test
        it('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArrayFail[i], function(){
            result = overlap(inStrArray[i]);
            assert.notEqual(result, outStrArrayFail[i]);    
        });
    });
}