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
  // throw new NotImplementedError('Not implemented');
  let arr = [];
  let obj = {};
  let arr2 = [];

  const sumObjectsByKey = (...objs) => {
    const res = objs.reduce((a, b) => {
       for (let k in b) {
          if (b.hasOwnProperty(k))
          a[k] = (a[k] || 0) + b[k];
       }
       return a;
    }, {});
    return res;
 }

  for(let i=0; i<domains.length; i++){
    arr.push(domains[i].split('.').reverse());
  }
  for(let i=0; i<arr.length; i++){
    let x = '';
    let obj2 = {};
    for(let j=0; j<arr[i].length; j++){
      x += `.${arr[i][j]}`;
      obj2[x] = 1;
    }
    arr2.push(obj2);
  }

  obj = sumObjectsByKey(...arr2);

  return obj;
}

module.exports = {
  getDNSStats
};
