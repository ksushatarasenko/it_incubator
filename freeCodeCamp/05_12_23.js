//  Замените два оператора if одним оператором, используя оператор &&, который вернет строку Yes, если val меньше или равно 50 и больше или равно 25. В противном случае будет возвращена строка No.
function testLogicalAnd(val) {
  
  if (val <= 50 && val >=25) {
   
      return "Yes";
    
  }
 return "No"
 
}

testLogicalAnd(10);
// Объедините два оператора if в один, который возвращает строку Outside, если значение val не находится в диапазоне от 10 до 20 включительно. В противном случае верните строку Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);