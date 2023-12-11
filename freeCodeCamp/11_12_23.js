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
  
  sequentialSizes(1);