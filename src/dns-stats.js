const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};
  domains.forEach((domain, i) => {
    const nodes = domain.split('.');
    for (i = nodes.length - 1; i >= 0; i -= 1) {
      const dns = '.' + nodes.slice(i).reverse().join('.');
      if (!dnsStats[dns]) dnsStats[dns] = 0;
      dnsStats[dns] += 1;
    }
  });
  return dnsStats;
}

module.exports = {
  getDNSStats,
};
