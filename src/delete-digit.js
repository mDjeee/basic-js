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
function deleteDigit( n ) {
  n = n.toString();
  let arr = n.split('');
  let digits = [];
  for(let i=0;i<n.length; i++){
    arr.splice(i,1);
    digits.push(arr.join(""));
    arr = n.split("");
  }
  let max = 0;
  for(let i=0;i<digits.length; i++){
    if(max < digits[i]){
      max = digits[i];
    }
  }
  return Number(max)
}

module.exports = {
  deleteDigit
};
