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

//    Удаление элементов с помощью splice().Splice() позволяет нам сделать именно это: удалить любое количество последовательных элементов из любого места массива.
// Мы инициализировали массив arr. Используйте splice() для удаления элементов из arr, чтобы он содержал только элементы, сумма которых равна 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let currentSum = 0;

for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > 10) {   
        currentSum = arr.reduce((acc, val) => acc + val, 0);
        arr.splice(i, 1);
    } else if (currentSum === 10) {
        break; 
    }
}
console.log('arrrrr=> ' + arr);

// Добавляйте элементы с помощью splice()



