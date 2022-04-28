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
  throw new NotImplementedError('Not implemented');
  let stack1 = [];
  let stack2 = [];
  for(let i=0;i<names.length; i++){
    let x = names[i];
    stack1.push(x);
    if(!stack2.includes(x)){
      stack2.push(x);
    }
    else {
      let k = 0;
      stack1.forEach(item => {
        if(item == x){
          k++;
        }
      })
      if(k>1){
        stack2.push(x + `(${k-1})`);
      }
    }
  }
  return stack2;
}

module.exports = {
  renameFiles
};
