// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar"); //imported caesar function
// All tests
describe("mariah's tests for caesar shift", () => {
  // Section for shift error tests
  describe("errors for shift", () => {
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
  describe("encoding", () => {
    it("first test", () => {
      //Write test here
      expect(something).to.be.something;
    });

    it("second test", () => {
      //Write test here
      expect(something).to.be.something;
    });
  });

  // Section for Decoding Tests
  describe("decoding", () => {
    it("first test", () => {
      expect(something).to.be.something;
    });

    it("second test", () => {
      expect(something).to.be.something;
    });
  });
});
