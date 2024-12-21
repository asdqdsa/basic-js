const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const generateSubString = (str, config) => {
    const repeatTimes = config?.repeatTimes || 1;
    const separator = config?.separator;
    const tempStr = str === false || str === null ? String(str) : str || '';
    return [...Array(repeatTimes)].map((val) => tempStr).join(separator);
  };

  const additionalStr = generateSubString(options?.addition, {
    repeatTimes: options?.additionRepeatTimes,
    separator: options?.additionSeparator || '|',
  });

  const mainStr = generateSubString(str + additionalStr, {
    repeatTimes: options?.repeatTimes,
    separator: options?.separator || '+',
  });

  return mainStr;
}

module.exports = {
  repeater,
};
