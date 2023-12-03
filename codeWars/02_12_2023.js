// Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения. Второй параметр функции скажет, должна ли она возвращать значение или индекс.

function min(arr, toReturn) {

  if (arr.length === 0) {
    return null; 
}
    minValue = arr[0];
    minIndex = 0;

    for(let i = 0; i <arr.length; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
        minIndex = arr[i]
      }
    }
    if(toReturn === 'value'){
      return minValue
    } else if (toReturn === 'index'){
      return minIndex;
    } else {
      return null
    }
  }

const myArray = [1,2,3,4,5];
console.log(min(myArray, 'value')); 
console.log(min(myArray, 'index')); 
// =====================================


function stringy(size) {

  let str = '';

     for(let i = 0; i < size; i++){
      str += i % 2 === 0 ? '1' : '0'
     }

     return str
}

console.log(stringy(5))
// ==================================
function ifChuckSaysSo(){
  return !true;
}

console.log(ifChuckSaysSo());
// ====================
function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();
  
  return item;
  
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// =======================
function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return trueOrFalse;
  }
  return false;
}