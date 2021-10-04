import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  
  let stack = [];
  let poppy = [];
  let word = ".";
  for(let i = 0;i < domains.length;i++) {
    for(let j = 0;j < domains[i].length;j++) {
      if(domains[i][j] == ".") {
        poppy.push(word);
        word = ".";
      } else {
        word = word + domains[i][j];
      }
    }
    poppy.push(word);
    word = ".";
    stack.push(poppy);
    poppy = [];
  }

  let result = [];

for(let k = 0;k < stack.length;k++) {
  for(let l = stack[k].length - 1;l > 0;l--) {
    let count = 1;
   if(!result.includes(stack[k][l]) && count == 1) {
     result.push(stack[k][l]);
     count++;
   } else if (!result.includes(stack[k][l]) && count == 2) {
    result.push(stack[k][l + 1] + stack[k][l]);
    count++;
   } else if (!result.includes(stack[k][l]) && count == 3) {
    result.push(stack[k][l + 2] + stack[k][l + 1] + stack[k][l]);
   }

  }
}

  return stack;
}
