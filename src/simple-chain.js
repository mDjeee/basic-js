const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    let str = '';
    if (value === undefined) value = '';
    value = str + value;
    this.array.push(value);
    return this;
  },

  removeLink(position) {
    try {
      if(!isNaN(position) && Number.isInteger(position) && position > 0 && position <= this.array.length) {
        this.array.splice(position - 1,1);
        return this;
      }
      else {
        this.array = [];
        throw new Error("You can't remove incorrect link!");
      }
      // return this;
    }
    catch(error){
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },


  finishChain() {
    let arr = this.array;
    arr = arr.map(item => `( ${item} )`);
    this.array = [];
    return arr.join('~~');
  }
};

module.exports = {
  chainMaker
};
