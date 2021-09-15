import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let poppy = "";
  let lolly = "";
  if(typeof(str) != "object") {
    str.toString();
  }
  
  
  if(options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  } 
  if( options.addition === undefined) {
    options.addition = "";
  } 
  if (options.addition == null){
    
    options.addition = "null";
  }
  
  if(options.repeatTimes == undefined) {
    return str + options.addition;
  }

  for(let i = 0;i < options.repeatTimes;i++) {
    for(let j = 1;j < options.additionRepeatTimes;j++) {
      lolly = lolly + options.addition + options.additionSeparator;
    }
    lolly = lolly + options.addition;
    if(i != options.repeatTimes - 1) {
      poppy = poppy + str + lolly + options.separator;
    } else {
      poppy = poppy + str + lolly;
    }
    lolly = "";
  }
  return poppy;
}
