import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let poppy = [];
  poppy.push[str[0]];
  let count = 1;
  for(let i = 0;i < str.length;i++) {
    
    if (str[i] == str[i - 1]) {
     count++;
     poppy[poppy.length - 1] = count + str[i];
    } else if (str[i] != str[i - 1]) {
      count = 1;
      poppy.push(str[i]);
    }
    
  }
  return poppy.join("");
}
