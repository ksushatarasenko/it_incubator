// Wilson primes - В теории чисел простое число Вильсона — это простое число. 
// 

// function ageVisiting (age) {
//     let min = Math.trunc(age - (0.10 * age));
//     let max = Math.trunc(age + (0.10 * age));
//     if(age !== 14){
//         return [min, max];
//     }

// }
function ageVisiting(age) {
    if (age > 14) {
        let min = Math.trunc(age / 2 + 7);
        let max = Math.trunc((age - 7) * 2);
        return `${min}-${max}`;
    } else if (age <=14 ){
        let min = Math.trunc(age - 0.10 * age)
        let max = Math.trunc(age + 0.10 * age)
        return `${min}-${max}`;
    }
}

console.log(ageVisiting(17));  // Вывод: "15-27"
console.log(ageVisiting(40));  // Вывод: "27-66"
console.log(ageVisiting(10));  // Вывод: "9-13"
console.log(ageVisiting(14));  // Вывод: "9-13"

// =========================
// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?
// "apple ban" --> ["apple 5", "ban 3"]



function addStr(str){
    const worlds = str.split(' ');
    const result = worlds.map((elem) => {
        return `${elem} ${elem.length}`;
    })
    return result;
}
const inputString = "apple ban";
const resultArray = addStr(inputString);
console.log(resultArray);  
// =================================
// ((P-1)! + 1) / (P * P)
// должен дать целое число.
// Ваша задача — создать функцию, которая возвращает true, если заданное число является простым числом Вильсона.
function isWilsonPrime(p) {
    function factorialMod(p) {
        let result = 1;
        for (let i = 1; i <= p - 1; i++) {
            result = (result * i) % (p * p);
        }
        return result;
    }

    return (factorialMod(p) + 1) % (p * p) === 0;
}

// Пример использования
console.log(isWilsonPrime(5));  // Вывод: true, так как 4! + 1 = 25, и 5 * 5 = 25
console.log(isWilsonPrime(6));  // Вывод: false

// ======================================================
// Вы забыли посчитать количество тостов, которые вы туда положили, вы не знаете, положили ли вы в тостеры ровно шесть тостов.
// Определите функцию, которая подсчитывает, сколько еще (или меньше) кусков тостов вам понадобится в тостерах. Даже если вам нужно больше или меньше, число все равно будет положительным, а не отрицательным.
// Примеры:
// Вы должны вернуть количество тостов, которое вам нужно положить (или вынуть). В случае, если 5вы все еще можете положить 1тост:


function sixToast(num) {
    if(num < 6){
        return 6 - num;
    } else if (num > 6){
        return num - 6;
    } else {
        return 0;
    }
  }

  console.log(sixToast(6));
  console.log(sixToast(17));
  console.log(sixToast(3));
