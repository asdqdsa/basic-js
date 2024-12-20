const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity)) return false;

  // ln(2) = 0.693;
  const RADIOACTIVE_DECAY = 0.693;
  const DECAY_CONSTANT = RADIOACTIVE_DECAY / HALF_LIFE_PERIOD;
  const activityRatio = MODERN_ACTIVITY / parseFloat(sampleActivity);
  const age = Math.log(activityRatio) / DECAY_CONSTANT;

  if (age === Infinity) return false;

  return Math.ceil(age) > 0 ? Math.ceil(age) : false;
}

module.exports = {
  dateSample,
};
