const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const list = [];
  const instructions = new Set([
    '--double-prev',
    '--double-next',
    '--discard-prev',
    '--discard-next',
  ]);

  for (let i = 0; i < arr.length; i += 1) {
    const currVal = arr[i];
    const prevVal = i > 0 ? arr[i - 1] : null;
    const nextVal = i < arr.length - 1 ? arr[i + 1] : null;

    if (currVal === '--double-prev' && prevVal != null) list.push(prevVal);
    if (currVal === '--double-next' && nextVal != null) list.push(nextVal);
    if (currVal === '--discard-prev' && prevVal != null) list.pop();
    if (currVal === '--discard-next' && nextVal != null) i += 2;
    if (!instructions.has(currVal)) list.push(currVal);
  }

  return list;
}

module.exports = {
  transform,
};
