const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n + '';
  let maxNum = 0;
  [...str].forEach((_, i) => {
    const currNum = parseInt(str.slice(0, i) + str.slice(i + 1));
    maxNum = Math.max(currNum, maxNum);
  });
  return maxNum;
}

module.exports = {
  deleteDigit,
};
