// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (
      !alphabet ||
      alphabet.length > 26 ||
      alphabet.length < 26 ||
      hasDuplicateCharacters(alphabet)
    ) {
      return false;
    }
    const lookup = "abcdefghijklmnopqrstuvwxyz";
    return encode //if we are encoding, lookup to alphabet
      ? mapOldToNew(input, lookup, alphabet)
      : mapOldToNew(input, alphabet, lookup);
  }

  function mapOldToNew(input, oldAlphabet, newAlphabet) {
    const splitInput = input.split(""); // => ['m', 'y', ' ', 'm','e', 's', 's', 'a','g', 'e']
    //mapping input from lookup, into alphabet
    const mappedAlphabet = splitInput.map((character) => {
      if (!oldAlphabet.includes(character)) {
        return character;
      }
      const index = oldAlphabet.indexOf(character); // returns each element as an index string
      //into alphabet, which is a string
      return newAlphabet[index];
    });
    return mappedAlphabet.join("");
    // index(alphabet) // returns an index
  }

  function hasDuplicateCharacters(alphabet) {
    //alphabet is a string
    //loop through a string
    //store current character in memory then compare to other interations
    for (let i = 0; i < alphabet.length - 1; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return true;
        }
      }
    }
    return false;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
