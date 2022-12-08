// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    return encode ? encodeFunction(input) : decodeFunction(input);
  }

  function encodeFunction(input) {
    let lookup = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    const split = input.split(""); //array example [h, e, l, l, o, " " w, o, r, l, d]
    const mappedCoordinates = split.map((letter) => {
      if (letter === " ") return letter;
      return lookup[letter];
    });
    return mappedCoordinates.join("");
  }

  function decodeFunction(input) {
    let lookup = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    //if length of string odd minus space return false
    if (input.split(" ").join("").length % 2 !== 0) {
      return false;
    }
    const split = input.split(""); //[2, 3, 4, 5,' ', 2, 3, 5, 1, 3, 4, 3, 4, 1, 1, 2, 2, 5, 1,]
    //loop through split
    let coordinates = [];
    for (let i = 0; i < split.length; i += 2) {
      if (split[i] === " ") {
        coordinates.push(split[i]);
        i++;
      }
      coordinates.push(split[i] + split[i + 1]);
    }
    // console.log(coordinates);
    //loop through coordinates //[32,51,13,13,43]
    const mappedCharacters = coordinates.map((coordinate) => {
      if (coordinate === " ") {
        return coordinate;
      }
      return lookup[coordinate];
    });
    // console.log(mappedCharacters.join(""));
    return mappedCharacters.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
