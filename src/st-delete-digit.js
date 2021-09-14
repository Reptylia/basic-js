import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let poppy = n.toString();
  let min = 9;
  let result = "";
  let count = 0;
  for(let i = 0;i < poppy.length;i++) {
    if(poppy[i] < min) {
      min = poppy[i];
    }
  }

  for(let j = 0;j < poppy.length;j++) {
    
    if(poppy[j] == min && count > 0) {
      result = result + poppy[j];
    } else if(poppy[j] == min) {
      count++;
    } else if (poppy[j] != +min) {
      result = result + poppy[j];
    }
    
  }
  return +result;
}
