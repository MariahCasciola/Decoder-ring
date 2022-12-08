// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const lookup = "abcdefghijklmnopqrstuvwxyz";
  //          a b c d e f g h i j k    l   m   n  o   p  q  r   s   t  u   v  w  x  y  z
  //          0 1 2 3 4 5 6 7 8 9 10  11  12  13  14 15 16 17   18  19 20 21  22 23 24 25
  //          x o y q m c g r u k s w a f l n t h d j p i be v
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) return false;
    if (!encode) shift *= -1;
    const lowerCaseInput = input.toLowerCase();
    const splitInput = lowerCaseInput.split(""); //have new array
    // console.log(splitInput)
    //loops through new array
    const mappedArray = splitInput.map((letter) => {
      if (!lookup.includes(letter)) {
        return letter;
      }
      const indexOfInput = lookup.indexOf(letter); //returns number
      // console.log(indexOfInput)
      const shiftedIndex = indexOfInput + shift; //returns number+shift
      // console.log(lookup[(shiftedIndex + lookup.length) % lookup.length]);
      //makes sure we are do not throw an out of bounds error
      return lookup[(shiftedIndex + lookup.length) % lookup.length]; //returns a letter
    });
    return mappedArray.join(""); //returns string encoded/decoded message
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
