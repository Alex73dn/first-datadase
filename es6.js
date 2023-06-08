const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5])); // вззвращает значение всех эл-ов массива, здесь [ 1, 2, 3, 4, 5 ]

const increment = (number, value=1) => number + value; //increase variable,preview value=1,если в консоль вывести (4,3)=7,то 1 игнорируется

const sum = (...args) => {
    return args.reduce((total, current) => total + current, 0);
  }; // rest parameter - (...args)вызывает reduce -функцию обратного вызова (callback); total - аккумулятор,current-текущий эл-т массива