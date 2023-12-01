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


