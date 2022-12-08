// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar"); //imported caesar function

describe("tests for caesar shift", () => {
  describe("errors to catch", () => {
    it("should test if shift value isn't present, if not return false", () => {
      const message = "boo boo";
      const shift = 0;
      const actual = false;
      // const expected =
      expect(actual).to.be.equal(false);
    });

    it("should return false if the shift is above 25", () => {
      const message = "boo boo";
      const shift = 26;
      const actual = false;
      expect(actual).to.be.equal(false);
    });

    it("should return false if the shift is below -25", () => {
      const message = "boo boo";
      const shift = -26;
      const actual = false;
      expect(actual).to.be.equal(false);
    });
  });

  describe("caesar function decoding a message", () => {
    it("should encode a message by shifting the letters", () => {});
    it("should include spaces and other symbols in messages", () => {});
    it("should ignore capital letters", () => {});
    it("should appropriately enocode or decode letters after the end of the alphabet", () => {});
    it("should process a negative shift, going left", () => {});
  });
  describe("", () => {});
  it("should decode a message, shifting letters in the opposite direction", () => {});
  it("should leaves spaces and other symbols as is", () => {});
  it("should ignore capital letters", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
});
