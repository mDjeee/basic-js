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
  try {
    if(data === undefined) return 'Unable to determine the time of year!';

    let month = data.getMonth();

    if(month < 1 || month ===1){
      return 'winter';
    }
    else if (month < 5){
      return 'spring';
    }
    else if (month < 8){
      return 'summer';
    }
    else if (month < 11){
      return 'autumn';
    }
  }
  catch(error){
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
