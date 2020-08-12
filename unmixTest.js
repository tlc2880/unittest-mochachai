// Name: Tommy Cao
// Date: 8/11/20
// Description: This is the automated Mocha Chai unit test of the unmix.js function.

const assert = require('chai').assert;
const unmix = require('../unmix.js').unmix;

// Input unit test arrays
var inStrArray = [
    "123456",                               // ➞ "214365"
    "hTsii  s aimex dpus rtni.g",           // ➞ "This is a mixed up string."
    "badce",                                // ➞ "abcde"
    "oTmm y.HC oa",                         // ➞ "Tommy H. Cao"
    " Iolevj vasarcpi trpgoarmmnig",        // I love javascript programming
    "lPaeesh le pemu mnxit ehess rtnisg!",  // Please help me unmix these strings!
    "hTyec la lemC bunaP te.e"              // They call me Cuban Pete.
];

 // Assertion passing unit test array
 var outStrArray = [
    "214365",
    "This is a mixed up string.",
    "abcde",
    "Tommy H. Cao",
    "I love javascript programming",
    "Please help me unmix these strings!",
    "They call me Cuban Pete."
 ];

 // Assertion failing unit test array
 var outStrArrayFail = [
    "214356",
    "This is  amixed up string.",
    "abcde ",
    "Tommy .H Cao",
    "I love  javascript programming",
    "Please help em unmix these strings!",
    "Theyc all me Cuban Pete."
 ];

let result;

// Unit testing
for (let i=0; i < inStrArray.length; i++) {
    describe('Unmix unit test', function(){
        // Passing test
        it('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArray[i], function(){
            result = unmix(inStrArray[i]);
            assert.equal(result, outStrArray[i]);    
        });

        // Failing test
        it('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArrayFail[i], function(){
            result = unmix(inStrArray[i]);
            assert.notEqual(result, outStrArrayFail[i]);    
        });
    });
}