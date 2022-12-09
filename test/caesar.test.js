// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar"); //imported caesar function
// All tests
describe("mariah's tests for caesar shift", () => {
  // Section for shift error tests
  describe("errors for shift", () => {
    
    it("if we get a shift amount above 25, return false", () => {
      const message = "boo boo";
      const shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
     it("if we get a shift amount below -25, return false", () => {
       const message = "boo boo";
       const shift = -26;
       const actual = caesar(message, shift);
       expect(actual).to.be.false;
     });

    it("if we get a shift value of zero, we should return false", () => {
      const message = "boo boo";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("if we don't have shift value, we should return false", () => {
      const message = "boo boo";
      const actual = caesar(message);
      expect(actual).to.be.false;
    });
  });

  // Section for encoding tests
  describe("mariah's encoding", () => {
    it("encode a message by shifting letters", () => {
      const message = "booboo";
      const shift = 3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "errerr";
      expect(actual).to.equal(expected);
    });

    it("keep spaces and symbols in output", () => {
      const message = "bo cho.";
      const shift = 3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "er fkr.";
      expect(actual).to.equal(expected);
    });
    it("disregard capitol letters", () => {
      const message = "Mariah";
      const shift = 3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "pduldk";
      expect(actual).to.equal(expected);
    });
    it("when reaching the end of the alphabet, should wrap around the other side", () => {
      const message = "zebra";
      const shift = 3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "cheud";
      expect(actual).to.equal(expected);
    });
    it("will allow negative shift that will go left", () => {
      const message = "Mar";
      const shift = -3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "jxo";
      expect(actual).to.equal(expected);
    });
  });

  // Section for Decoding Tests
  describe("mariah's decoding", () => {
    it("shifting letter in the other direction", () => {
      const message = "jxo";
      const shift = -3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "mar";
      expect(actual).to.equal(expected);
    });

    it("leave spaces and other symbols alone they didn't hurt anybody", () => {
      const message = "jxo jxo.";
      const shift = -3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "mar mar.";
      expect(actual).to.equal(expected);
    });

    it("ignore capitol letters", () => {
      const message = "Jxo";
      const shift = -3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "mar";
      expect(actual).to.equal(expected);
    });

    it("when reaching the end of the alphabet, should wrap around the other side", () => {
      const message = "z";
      const shift = -3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "c";
      expect(actual).to.equal(expected);
    });

    it("will allow negative shift that will go left", () => {
      const message = "Mar";
      const shift = -3;
      const encode = true;
      const actual = caesar(message, shift, encode);
      const expected = "jxo";
      expect(actual).to.equal(expected);
    });
  });
});
