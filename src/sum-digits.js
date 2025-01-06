const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n >= 10) {
    let sum = 0;
    const numStr = String(n);
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i], 10);
    }
    n = sum;
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
