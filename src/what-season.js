const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {

  // throw new NotImplementedError('Not implemented');
  try{
    if(data == undefined){
      return 'Unable to determine the time of year!';
    } 
    
    if (Object.prototype.toString.call(data) === "[object Date]") {
      // it is a date
      if (isNaN(data.getTime())) {
        throw new Error("Invalid Date!")
      }
      else {
        let ch = data.getMonth();
        switch (ch) {
          case 0:
            return 'winter';
          case 1:
            return 'winter';
          case 2:
            return 'spring';
          case 3:
            return 'spring'
          case 4:
            return 'spring'
          case 5:
            return 'summer';
          case 6:
            return 'summer';
          case 7:
            return 'summer';
          case 8:
            return 'autumn';
          case 9:
            return 'autumn';
          case 10:
            return 'autumn';
          default:
            return 'winter';
        }
      }
    } else {
      throw new Error("Invalid Date!")
    }
  
    
  }
  catch(error){
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};



// try {
//   if(data === undefined) return 'Unable to determine the time of year!';

//   let month = data.getMonth();

//   if(month < 1 || month ===1){
//     return 'winter';
//   }
//   else if (month < 5){
//     return 'spring';
//   }
//   else if (month < 8){
//     return 'summer';
//   }
//   else if (month < 11){
//     return 'autumn';
//   }
// }
// catch(error){
//   throw new Error("Invalid date!");
// }