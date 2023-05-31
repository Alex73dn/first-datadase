function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
  }
  testElseIf(7);
  // if and else several times if it need

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  orderMyLogic(7);
  // return Less than 10 but if it would be 4 and the 1th statement was Less than 10 in "function" return Less than 10

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
// возвращает прозвища игроков в гольф в зависимости от кол-ва попадания в лунки. 

function caseInSwitch(val) {
    let answer = "";
       switch (val) {
            case 1:
            answer = "alpha";
                break;
            case 2:
            answer = "beta";
                break;
            case 3:
            answer = "gamma";
                break;
            case 4:
            answer = "delta";
                break;
     }
        return answer;
  }
    caseInSwitch(1);
    // switch можно использовать вместо if при ===. Т.е. в примере если val===1 то ответ alpha итд.

    function switchOfStuff(val) {
        let answer = "";
          switch (val) {
            case "a":
              answer = "apple";
              break;
            case "b":
              answer = "bird";
              break;
            case "c":
              answer = "cat";
              break;
            default:
              answer = "stuff";
              break;
          }
        return answer;
      }
      switchOfStuff(1);
    // пример switch/default, abc - возвращают значения, default d строку "stuff"

    function isEqual(a, b) {
          return a===b;
        }
      isLess(10, 15);
    // вместо фун-ии if/else for boolean data ЛУЧШЕ использовать данную функцию (или > или < ...)!!!

    function abTest(a, b) {
        if (a<0 || b<0) {
        return undefined;
      } 
        else {
         return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
      }
      }
      abTest(2,2);
      // здесь если a либо b <0 возвращается формула или значение undefined - не определенно!

      let count = 0;
function cc(card) {
   if (card <= 6) {
    count += 1;
  } else if (card >= 10 || typeof card === 'string') {
    count -= 1;
  }
  return count > 0 ? count + " Bet" : count + " Hold";
 // если счёт не 0, то выводится count и ставка/держать, и если не цифра то тип становится строка! и работает -.
}