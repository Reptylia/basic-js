import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let poppy = [];
  for(let i = 0;i < arr.length;i++) {
   if(arr[i] == "--discard-next" && arr[i + 1] != undefined && typeof(arr[i + 1]) == "number") {
     poppy.splice(i,1);
   } else if(arr[i] == "--discard-prev" && poppy[poppy.length - 1] != undefined && typeof(poppy[poppy.length - 1]) == "number") {
     poppy.splice(poppy.length - 1, 1);
   } else if(arr[i] == "--double-next" && arr[i + 1] != undefined && typeof(arr[i + 1]) == "number") {
    poppy.push(arr[i + 1]);
   } else if(arr[i] == "--double-prev" && arr[i - 1] != undefined && typeof(arr[i - 1]) == "number") {
     poppy.push(arr[i - 1]);
   } else if (typeof(arr[i]) == "number") {
     poppy.push(arr[i]);
   }
  }
  return poppy;
}

