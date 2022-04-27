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

  throw new NotImplementedError('Not implemented');
  if(data == undefined){
    return 'Unable to determine the time of year!';
  } 

  if (isNaN(data.getTime())) {
    throw new Error("Invalid Date!")
  }
  
  if (Object.prototype.toString.call(data) === "[object Date]") {
    // it is a date
    if (isNaN(data.getTime())) {
      throw new Error("Invalid Date!")
    } else {
      // date object is valid
    }
  } else {
    throw new Error("Invalid Date!")
  }

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

module.exports = {
  getSeason
};
