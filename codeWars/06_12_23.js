
// Вам будет предоставлен массив и предельное значение. Вы должны убедиться, что все значения в массиве ниже или равны предельному значению. Если да, верните true. В противном случае верните false.
function smallEnough(a, limit){
    return a.every(function(element) {
      return element <= limit;
    });
  }
//   ============
// Тролли атакуют ваш раздел комментариев!Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу. Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.
function disemvowel(str) {
    // Используем регулярное выражение для поиска и удаления всех гласных (букв a, e, i, o, u, а также их заглавных версий)
    return str.replace(/[aeiouAEIOU]/g, '');
  }
  
  // Пример использования
  var trollComment = "Тролли атакуют ваш раздел комментариев!";
  var disemvoweledComment = disemvowel(trollComment);
  
  console.log(disemvoweledComment);
// =========================
  