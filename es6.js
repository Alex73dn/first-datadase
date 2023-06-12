const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5])); // вззвращает значение всех эл-ов массива, здесь [ 1, 2, 3, 4, 5 ]

const increment = (number, value=1) => number + value; //increase variable,preview value=1,если в консоль вывести (4,3)=7,то 1 игнорируется

const sum = (...args) => {
    return args.reduce((total, current) => total + current, 0);
  }; // rest parameter - (...args)вызывает reduce -функцию обратного вызова (callback); total - аккумулятор,current-текущий эл-т массива

  function removeFirstTwo(list) {
       const [, , ...shorterList] = list; 
       return shorterList;
  } // диструкция убирает 2 первых элемента массива и функция возвращает некий массив без первых 2х элементов!!!
    const source = [1, 2, 3, 4, 5];
  const sourceWithoutFirstTwo = removeFirstTwo(source); // = [3,4,5]

  const stats = {
    max: 56.78,
    median: 34.54,
    min: -0.75,
    average: 35.85
  };
  const half = ({ max, min }) => (max + min) / 2.0;
  console.log(half(stats)); // Output: 28.015 создаём диструктивную функцию half, ср.значение amidst max и min

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
   const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      const listItem = `<li class="text-warning">${arr[i]}</li>`; // template literal - ${arr[i]} в список li добавляет эл-ты
      failureItems.push(listItem);
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure); // функцией создаётся массив из элементов const result

  class Vegetable {
    constructor(name) {
      this.name = name;
    }
    takeOff() {
      console.log("This is " + this.name + "!");
    }
  }
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

  const add = (x, y) => {
    return x + y;
  }
    export { add }; // можно вызывать в любой другой точки

    import { uppercaseString } from './string_functions.js';  
    uppercaseString("hello");

    import * as stringFunctions from "./string_functions.js";
      stringFunctions.uppercaseString("hello");
      stringFunctions.lowercaseString("WORLD!");

  const makeServerRequest = new Promise((resolve, reject) => {
        let responseFromServer = true;
          if(responseFromServer) {
          resolve("We got the data");
        } else {  
          reject("Data not received");
        }
        makeServerRequest.then(result => {
        console.log(result);
    });
   }); // метод Промис Then, или если Promise сработал, сразу отрабатывает then

   const makeServerRequest1 = new Promise((resolve, reject) => {
    let responseFromServer = false;
      if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest1.catch(error => {
    console.log(error );
  }); // тоже что и выше, только с параметром error