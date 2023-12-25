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
  let encoded = '';
  let i = 0;
  let n = 1;

  while (i < str.length) {
    while (str[i] === str[i + n]) n += 1;
    encoded += n === 1 ? str[i] : `${n}${str[i]}`;
    i += n;
    n = 1;
  }
  return encoded;
}

module.exports = {
  encodeLine
};
