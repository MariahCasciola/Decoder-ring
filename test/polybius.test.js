// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius"); //imported polybius function

describe("mariah's tests for polybius", () => {
  describe("mariah's encoding", () => {
    it("translate each letter into a 2 digit number coordinate", () => {
      const message = "boo boo";
      const actual = polybius(message);
      const expected = "";
      expect(actual).to.equal(expected);
    });
    it("i and j should encode to 42", () => {
      const message = "boo boo";
      const actual = polybius(message);
      const expected = "";
      expect(actual).to.equal(expected);
    });
    it("spaces should be left alone they didn't do anything wrong", () => {
      const message = "boo boo";
      const actual = polybius(message);
      const expected = "";
      expect(actual).to.equal(expected);
    });
  });
  describe("mariah's decoding", () => {
it("every pair of numbers should be translated into a letter", () => {
  const message = "boo boo";
  const actual = polybius(message);
  const expected = "";
  expect(actual).to.equal(expected);
});

it("42 should decode to i and j", () => {
  const message = "boo boo";
  const actual = polybius(message);
  const expected = "";
  expect(actual).to.equal(expected);
});

it("leaves spaces alone they didn't do anything wrong", () => {
  const message = "boo boo";
  const actual = polybius(message);
  const expected = "";
  expect(actual).to.equal(expected);
});

it("if the length of the number message is wrong, should return false", () => {
  const message = "boo boo";
  const actual = polybius(message);
  const expected = "";
  expect(actual).to.equal(expected);
});
  });
});