import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it('Returns true for words spelled the same forwards and backwards', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    it('Returns false for words spelled differently forwards and backwards', () => {
        expect(isPalindrome("hello")).toBe(false);
    });
    it('Returns false for an empty string', () => {
        expect(isPalindrome("")).toBe(false);
    });
    it('Doesn\'t discriminate between uppercase and lowercase', () => {
        expect(isPalindrome("RaCecar")).toBe(true);
    });
    it('Throws an error if the string contains non-alphabetic characters', () => {
        expect(() => isPalindrome("hello, world!")).toThrowError();
    });
    it('Throws an error if the argument is not a string', () => {
        const dadArray = ["d","a","d"];
        expect(() => isPalindrome(dadArray)).toThrowError();
    });
});