// Просто функция внутри другой функции.

function createCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}

createCalcFunction(42); // Мы ничего не получим, потому что функция нам возвращает новую функцию

const calc = createCalcFunction(42); // тут 42 была замкнуто

calc(); // вернет 42 из за замыкания

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1); // Замкнуло 1
const addTen = createIncrementor(10); // Замкнуло 10

console.log(addOne(10));
console.log(addTen(20));

//  ############# Еще пример

function urlGenerator(domain) {
  return function (url) {
    return `www.${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com'); // замкнуло com

console.log(comUrl('google'));
console.log(comUrl('netflix'));

// ################ Задача

const obj = {
  name: 'Anar',
};

function getName(name) {
  return function (age) {
    return `${name}у ${age} лет`;
  };
}

const getObjNameAndAge = getName(obj.name);

console.log(getObjNameAndAge(23));

// bind

function bind(context, fn){
    return function(...args){
        fn.apply(context, args)
    }
}

function logPeson(){
    console.log(`Person ${this.name} ${this.age}`)
}

const person1 = {name: 'ANar', age: 23}

bind(person1, logPeson)();