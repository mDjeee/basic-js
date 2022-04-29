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
  calculateDepth(arr) {
    const that = this;
    // throw new NotImplementedError('Not implemented');
    return 1 + (Array.isArray(arr) ? arr.reduce((max,item) => Math.max(max, that.calculateDepth(item)), 0) : -1);
  }
}



module.exports = {
  DepthCalculator
};


// return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
//   return Math.max(max, that.calculateDepth(item));
// }, 0) : -1);


// if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => that.calculateDepth(t)))
// else return 0

// return arr.reduce((count,item) => Array.isArray(item) ? 1 + this.calculateDepth(item) : count, 1)

// return Array.isArray(arr) ? 1 + Math.max(...arr.map(item => this.calculateDepth(item))) : 0;

// calculateDepth = (arr) => arr.reduce((count,v) => !Array.isArray(v) ? count : 1 + this.calculateDepth(v),1)

// function doSth(arr){
//   return (condition) ? 1 + Math.max(...arr.map(doSth)) : 0;
// }

// class SomeClass {
//   someMethod(arr){
//     return (condition) ? 1 + Math.max(...arr.map(this.someMethod)) : 0;
//   }
// }