const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  let filtered = [];

  for(let i=0;i<arr.length; i++){
    if(arr[i]!=-1){
      filtered.push(arr[i]);
    }
  }

  filtered = filtered.sort((a,b) => a-b);
  let res = [];

  for(let i=0; i<arr.length; i++){
    if(arr[i] != -1){
      res.push(filtered.shift());
    }
    else {
      res.push(-1);
    }
  }
  return res;
}


module.exports = {
  sortByHeight
};
