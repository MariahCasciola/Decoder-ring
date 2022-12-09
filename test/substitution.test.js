// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests written by Mariah", () => {
  describe("errors by Mariah", () => {
    
    it("if the alphabet is missing return false", () => {
      const message = "bobo";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
   
    it("if the alphabet is more or less than 26 characters long return false", () => {
      const message = "";
      const alphabet = "qwertyuiopasdfghjklzxcvbn";
      const actual = substitution(message, alphabet);
      const expected = "";
      expect(actual).to.be.false;
    });
    
    it("if the alphabet does not have unique characters return false", () => {
      const message = "boo";
      const alphabet = "qwertyuiopasdfghjklzxcvbnn";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding by Mariah", () => {
    it("encode a message using the given alphabet", () => {
      const message = "abcdef";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, true);
      const expected = "qwerty";
      expect(actual).to.equal(expected);
    });


    it("work with any key with unique characters", () => {
      const message = "abcd";
      const alphabet = "!@#$%^&*()_+{}:?/-=`~,><[]";
      const actual = substitution(message, alphabet, true);
      const expected = "!@#$";
      expect(actual).to.equal(expected);
    });


    it("leave spaces be", () => {
      const message = "ab cd";
      const alphabet = "!@#$%^&*()_+{}:?/-=`~,><[]";
      const actual = substitution(message, alphabet, true);
      const expected = "!@ #$";
      
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding by Mariah", () => {
    it("decode a message using the given alphabet", () => {
      const message = "qwerty";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "abcdef";
      expect(actual).to.equal(expected);
    });

    it("work with key with unique characters", () => {
      const message = "][<>";
      const alphabet = "!@#$%^&*()_+{}:?/-=`~,><[]";
      const actual = substitution(message, alphabet, false);
      const expected = "zyxw";


      expect(actual).to.equal(expected);
    });


    it("keep spaces", () => {
      const message = "qwe rty";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "abc def";

      expect(actual).to.equal(expected);
    });
  });
});
