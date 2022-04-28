const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  let stack = [];
  let stack2 = [];
  let stack3 = [];
  for(let i=0; i< names.length; i++){
    stack2.push(names[i]);
    if(stack.includes(names[i])){
      let k = stack2.filter(item => item == names[i]).length;
      stack3.push(names[i] + `(${k-1})`);
      if(stack3.includes(names[i])){
        let n = stack2.filter(item => item == names[i]).length;
        stack.push(names[i] + `(${n})`);
      }
      else {
        stack.push(names[i] + `(${k-1})`);
      }
    }
    else {
      stack.push(names[i]);
    }
  }
  return stack;
}

module.exports = {
  renameFiles
};
