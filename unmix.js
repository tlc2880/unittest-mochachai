// Every pair of characters has been swapped. 
// Help me undo this so I can understand my strings again.
module.exports = {
    unmix:  function(inStr) {
        var inStr = inStr.split('');
        var outStr = [];
        for ( var i=0; i < inStr.length; i=i+2 ) {
            outStr.push(inStr[i+1]);
            outStr.push(inStr[i]);
            //console.log(outStr);
        }
        return outStr.join('');     
    } 
}
// var inStrArray = [
//     "123456",                               // ➞ "214365"
//     "hTsii  s aimex dpus rtni.g",           // ➞ "This is a mixed up string."
//     "badce",                                // ➞ "abcde"
//     "oTmm y.HC oa",                         // ➞ "Tommy H. Cao"
//     " Iolevj vasarcpi trpgoarmmnig",        // I love javascript programming
//     "lPaeesh le pemu mnxit ehess rtnisg!",  // Please help me unmix these strings!
//     "hTyec la lemC bunaP te.e"              // They call me Cuban Pete.
// ];

// for (let i=0; i < inStrArray.length; i++) {
//     console.log(unmix(inStrArray[i]));
// }