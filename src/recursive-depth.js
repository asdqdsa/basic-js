const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, max = 1) {
    if (arr.length < 1) return max;

    const [head, ...rest] = arr;
    if (Array.isArray(head)) {
      const headDepth = this.calculateDepth(head, max + 1);
      const restDepth = this.calculateDepth(rest, max);
      return Math.max(headDepth, restDepth);
    } else return this.calculateDepth(rest, max);
  }
}

module.exports = {
  DepthCalculator,
};
