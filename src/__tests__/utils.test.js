import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it('Is true for words spelled the same forwards and backwards', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    it('Is false for words spelled differently forwards and backwards', () => {
        expect(isPalindrome("hello")).toBe(false);
    });
    it('Disregards character case', () => {
        expect(isPalindrome("Racecar")).toBe(true);
    });
    it('Returns false for an empty string', () => {
        expect(isPalindrome("")).toBe(false);
    });
});