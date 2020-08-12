// Name: Tommy Cao
// Date: 8/11/20
// Description: This is the automated Mocha Chai unit test of the reverseOdd.js function.

const assert = require('chai').assert;
const reverseOdd = require('../reverseOdd').reverseOdd;

// Input unit test arrays
var inStrArray = [
    "Make sure uoy only esrever sdrow of ddo length", // => Make sure you only reverse words of odd length
    "Bananas", // => sananaB
    "One two three four", // => enO owt eerht four
    "I kniht  javascript gnimmargorp is nuf", // I think  javascript programming is fun
    "nraeL eht MERN kcats by building  an  noitacilppa", // Learn the MERN stack by building  an  application
    "m'I eht king of eht abmuR beat", // I'm the king of the Rumba beat
    "I want to go to the beach"
 ];

 // Assertion passing unit test array
 var outStrArray = [
    "Make sure you only reverse words of odd length",
    "sananaB",
    "enO owt eerht four",
    "I think  javascript programming is fun",
    "Learn the MERN stack by building  an  application",
    "I'm the king of the Rumba beat",
    "I want to go to eht hcaeb"
 ];

 // Assertion failing unit test array
 var outStrArrayFail = [
    "Make sure you only reverse words fo odd length",
    "sananoB",
    "enO owt eerht ruof",
    "I think  javascript programming is fun fun",
    "Learn eht MERN stack by building  an  application",
    "I'm the king of the Rumba taeb",
    "I want to og to eht hcaeb"
 ];

let result;

// Unit test
for (let i=0; i < inStrArray.length; i++) {
    describe('ReverseOdd unit test', function(){
        it('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArray[i], function(){
            result = reverseOdd(inStrArray[i]);
            assert.equal(result, outStrArray[i]);    
        });

        it('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ outStrArrayFail[i], function(){
            result = reverseOdd(inStrArray[i]);
            assert.notEqual(result, outStrArrayFail[i]);    
        });
    });
}