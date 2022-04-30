const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directCode = true){
    this._reverseCode = !directCode;
  }
  encrypt(string,key) {
    // throw new NotImplementedError('Not implemented');
    if(string === undefined || key === undefined){
      throw new Error("Incorrect arguments!")
    }
    string.trim("");
    key.trim("");
    key = key.toUpperCase();
    string = string.toUpperCase();
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let arrStr = string.split("");
    let keyStr = [];
    let res = [];
    let k = 0;
    for(let i=0; i<arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        keyStr.push(key[k]);
        k++;
      }
      else {
        keyStr.push(" ");
      }
      if(k>=key.length){
        k=0;
      }
    }
    for(let i=0; i<arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        let index = arr.indexOf(arrStr[i]) + arr.indexOf(keyStr[i]);
        if(index>=26){
          index = index - 26;
        }
        res.push(arr[index]);
      }
      else {
        res.push(arrStr[i]);
      }
    }
    return this._reverseCode ? res.reverse().join("") : res.join("");
  }
  decrypt(string,key) {
    if(string === undefined || key === undefined){
      throw new Error("Incorrect arguments!")
    }
    // throw new NotImplementedError('Not implemented');
    string.trim("");
    key.trim("");
    key = key.toUpperCase();
    string = string.toUpperCase();
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let arrStr = string.split("");
    let keyStr = [];
    let res = [];
    let k = 0;
    for(let i=0; i<arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        keyStr.push(key[k]);
        k++;
      }
      else {
        keyStr.push(" ");
      }
      if(k>=key.length){
        k=0;
      }
    }
    for(let i=0; i<arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        let index = arr.indexOf(arrStr[i]) - arr.indexOf(keyStr[i]);
        if(index < 0){
          index = index + 26;
        }
        res.push(arr[index]);
      }
      else {
        res.push(arrStr[i]);
      }
    }
    return this._reverseCode ? res.reverse().join("") : res.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
