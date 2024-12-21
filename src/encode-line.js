const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let count = 1;
    for (let j = i + 1; j <= str.length; j += 1) {
      if (str[i] !== str[j]) {
        result += (count > 1 ? count : '') + str[i];
        i = j;
        count = 1;
      } else count += 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
