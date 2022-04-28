const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  str = String(str);
  let param = new function(){
    this.repeatTimes = options.repeatTimes || 1;
    this.separator = options.separator || '+';
    let x = String(options.addition) == 'undefined' ? undefined : String(options.addition);
    this.addition = x ? x : 'mdjeee';
    this.additionRepeatTimes = options.additionRepeatTimes || 1;
    this.additionSeparator = options.additionSeparator || '|';
  }

  let arrAdd = [];
  let arrStr = [];

  

  if(param.addition == 'mdjeee'){
    let ex = [];

    for(let i=0; i< param.repeatTimes; i++){
      ex.push(str);
    }
    return ex.join(param.separator);
  }

  if(param.addition){
    if(param.addition == 'mdjeee'){
      param.addition = '';
    }
    for(let i=0; i<param.additionRepeatTimes; i++){
      arrAdd.push(param.addition);
    }
  }
  let add;
  if(arrAdd.join(`${param.additionSeparator}`)!= undefined){
    add = arrAdd.join(`${param.additionSeparator}`)
  }
  else {
    add = '';
  }
  str = str + add;
  for(let i=0; i<param.repeatTimes; i++){
    arrStr.push(str);
  }
  let res = arrStr.join(`${param.separator}`);

  return res;

}

module.exports = {
  repeater
};
