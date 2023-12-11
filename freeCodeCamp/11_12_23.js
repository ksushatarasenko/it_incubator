function switchOfStuff(val) {
    let answer = "";
    switch (val){
        case 1:
            return 'apple';
            break;
        case 2:
            return 'bird';
            break;
        case 3:
            return 'cat';
            break;
        default:
            return 'stuff'
    }
        
    return answer;
  }
  
  switchOfStuff(1);
//   ===================
function sequentialSizes(val) {
    let answer = "";
        switch(val){
            case 1:
            case 2:
            case 3:
                return 'Low'
                break;
            case 4:
            case 5:
            case 6:
                return 'Mid';
                break;
            case 7:
            case 8:
            case 9:
                return 'High';
                break;
        }
    return answer;
  }
// =============
function chainToSwitch(val) {
    let answer = "";
    switch(val){
        case 'bob':
            return "Matley";
            break;
        case 42:
            return 'The Answer';
            break;
        case 1:
            return "There is no #1";
            break;
        case 99:
            return "Missed me by this much!";
            break;
        case 7:
            return "Ate Nine";
            break;
    }
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);  
  
  sequentialSizes(1);