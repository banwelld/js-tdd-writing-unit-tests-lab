export function isPalindrome(word) {
    if (!word) return false;
    const wordArr = word.toLowerCase().split('');
    return wordArr.join('') === wordArr.reverse().join('');
};