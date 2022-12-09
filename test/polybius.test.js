// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius"); //imported polybius function

describe("mariah's tests for polybius", () => {

  describe("mariah's encoding", () => {
    it("translate each letter into a 2 digit number coordinate", () => {
      const message = "boo";
      const actual = polybius(message);
      const expected = "214343";
      expect(actual).to.equal(expected);
    });
    it("i and j should encode to 42", () => {
      const message = "big jug";
      const actual = polybius(message);
      const expected = "214222 425422";
      expect(actual).to.equal(expected);
    });
    it("spaces should be left alone they didn't do anything wrong", () => {
      const message = "boo boo";
      const actual = polybius(message);
      const expected = "214343 214343";
      expect(actual).to.equal(expected);
    });
  });

  describe("mariah's decoding", () => {
    it("every pair of numbers should be translated into a letter", () => {
      const message = "214343";
      const actual = polybius(message, false);
      const expected = "boo";
      expect(actual).to.equal(expected);
    });

    it("42 should decode to i and j", () => {
      const message = "214222 425422";
      const actual = polybius(message, false);
      const expected = "b(i/j)g (i/j)ug";
      expect(actual).to.equal(expected);
    });

    it("leaves spaces alone they didn't do anything wrong", () => {
      const message = "214343 214343";
      const actual = polybius(message, false);
      const expected = "boo boo";
      expect(actual).to.equal(expected);
    });

    it("if the length of the number message is wrong, should return false", () => {
      const message = "2143434";
      const actual = polybius(message, false);
      expect(actual).to.equal(false);
    });
  });
});
