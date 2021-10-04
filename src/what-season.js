import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  
 let poppy = date;
 let month = poppy.getMonth();
 if(month >= 0 && month < 2) {
   return 'winter';
 } else if (month > 2 && month < 6) {
   return 'spring';
 } else if (month > 5 && month < 9) {
  return 'summer';
} else if (month > 8 && month < 12) {
  return 'autumn';
} else if (month > 11 && month < 13) {
  return 'winter';
}  
}
