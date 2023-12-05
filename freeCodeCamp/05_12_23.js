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

function testSize(num) {
  if (num <5){
    return 'Tiny'
  } else if (num < 10){
    return 'Small'
  } else if (num < 15){
    return 'Medium'
  } else if (num < 20){
    return 'Large'
  } else if( num >= 20){
    return 'Huge'
  } else{
    return "Change Me";
  }
  
}

testSize(7);
// Вашей функции будут переданы аргументы par и Strokes. Верните правильную строку в соответствии с этой таблицей, в которой штрихи перечислены в порядке приоритета; сверху (самый высокий) вниз (самый низкий):
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
  if (strokes === 1) {
    return names[0]; 
  } else if (strokes <= par - 2) {
    return names[1]; 
  } else if (strokes === par - 1) {
    return names[2]; 
  } else if (strokes === par) {
    return names[3]; 
  } else if (strokes === par + 1) {
    return names[4]; 
  } else if (strokes === par + 2) {
    return names[5]; 
  } else {
    return names[6]; 
  }
} 

golfScore(5, 4);
//  SWITH
function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case '1':
      return answer = 'alpha';
      break;
    case '2':
      return answer = 'beta';
      break;
    case '3':
      return answer = 'gamma';
      break;
    case '4':
      return answer = 'delta';
      break;
    
  }
  return answer
}
caseInSwitch(1);
