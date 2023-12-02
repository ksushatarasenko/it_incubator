let myArray = ["a", "b", "c", "d"];

myArray[1] = 'is not b'

console.log(myArray);
// Добавьте элементы в массив с помощью push() и unshift().

function mixedNumbers(arr) {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three')
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//   Удаление элементов из массива с помощью pop() и Shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));