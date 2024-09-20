export function isPalindrome(word) {
    if (!word) return false;
    if (typeof word != 'string') throw new Error('The submission must be of type \'string\'');
    if (!/^[A-Za-z]+$/.test(word)) throw new Error('The submission must not contain spaces, numbers, or special characters')
    const wordArr = word.toLowerCase().split('');
    return wordArr.join('') === wordArr.reverse().join('');
  };