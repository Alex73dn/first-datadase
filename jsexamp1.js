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

const myDog = {
    "name": "Sunny",
    "legs": 4,
    "tails": 1,
    "friends": ["Dogs", "Master" , 2]
  }; // так можно отображать properties 

  const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  const hatValue = testObj.hat;      // берёт данные из const testObj поле hat Can AS: const hatValue = testObj ["hat"];
  const shirtValue = testObj.shirt; // берёт данные из const testObj поле shirt        const shirtValue = testObj["shirt"]; 

  const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
    myDog1.name = "Happy Coder"; // в объекте myDog1 мы поменяли поле "name"!или так - myDog["name"] = "Happy Coder";

    const myDog3 = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
      };
        myDog3.bark = "woof"; // add properties bark to myDog3! или удаление delete myDog3.tails;

        function phoneticLookup(val) {
            let result = "";
            const lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "Frank",
            }
             result = lookup[val];
             return result;
          }
          phoneticLookup("charlie"); // функция возвращает из объекта lookup соответствующие значения в функцию

          function checkObj(obj, checkProp) {
            if (obj.hasOwnProperty(checkProp)) {
             return  obj[checkProp];
             }
             else {
              return "Not Found";
             }
          }// встроенная функция hasOwnProperty проверяет на true/fault значение из функции checkObj - значение свойство объекта checkProp 
          // возвращается объекту obj если есть совпадения

          const myPlants = [
            {
              type: "flowers",
              list: [
                "rose",
                "tulip",
                "dandelion"
              ]
            },
            {
              type: "trees",
              list: [
                "fir",
                "pine",
                "birch"
              ]
            }
          ];
            const secondTree = myPlants[1].list[1]; // вывод второго элемента массива и второго элемента из второго массива - "pine"

  const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (value === '') {
    // If value is an empty string, delete the given prop property from the album
    delete records[id][prop];
  } else if (prop !== 'tracks') {
    // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop
    records[id][prop] = value;
  } else {
    // If prop is tracks and value isn't an empty string
    if (!records[id].hasOwnProperty('tracks')) {
      // If the album does not have a tracks property, assign it an empty array
      records[id].tracks = [];
    }
    // Add the value as the last item in the album's tracks array
    records[id].tracks.push(value);
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
myArray; // [5, 4, 3, 2, 1, 0]

const myArray1 = [];
for (let i = 1; i <6 ; i++) {
  myArray1.push(i);
} // result [1, 2, 3, 4, 5]

const myArray2 = [];
for (let i=1; i<11; i +=2) {
  myArray2.push(i);
} // [1, 3, 5, 7, 9] !!!! важно, что не до 9, а до 11, т.к. шаг 2!!!!!!

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  if (total >= 20) {
    break;
  }
  total += myArr[i];
  console.log(myArr[i]);
} // завязываем total на сумму элементов массива и делаем пока из общая суммы не достигнет 20!!!

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);// = 5040, result - multiplication all elements of Array

function sum(arr, n) {
  if (n<=0) {
    return 0;
  } else {
    return sum(arr,n-1) + arr[n-1];
  }
} // рекрусивная функция возвращает сама себя, складыая соответствующий элемент с элементом созданного массива

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
   for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    } // пробегаю все элементы массива с помощью функции "for" если функция находит введённый контакт (он === contacts[i].firstName)
  } // функция присваевает либо свойство либо НЕТ ТАКОГО СВОЙСТВА, иначе НЕТ ТАКОГО КОНТАКТА
  return "No such contact";
}

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
} // Результат = округлённое до целого значения (Math.floor) случайно сгенерированного десятичного числа (Math.random) от 0 до 9!

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} // возвращает случайное целое число в заданном диапазоне между myMin и myMax, включая оба конца диапазона.

function convertToInteger(str) {
  const a = parseInt(str);
  return a;
  } // parseInt() return целое число, например 007 - вернёт 7!!!!  parseInt(str,2) вернёт двоичное число и т.д. 16, 64 ...

  function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else if (endNum === startNum) {
      return [startNum];
    } else {
      const newArray = rangeOfNumbers(startNum, endNum - 1);
      newArray.push(endNum);
      return newArray;
    }
  }// рекрусивная ф-ция даёт rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5] или rangeOfNumbers(4, 4) should return [4].