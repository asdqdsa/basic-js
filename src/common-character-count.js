const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const listS1 = s1.split('');
  const listS2 = s2.split('');

  return listS1.reduce((count, char) => {
    listS2.includes(char) &&
      (listS2.splice(listS2.indexOf(char), 1), (count += 1));
    return count;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
