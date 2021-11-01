function hello() {
  // This указывает на обьект в котором была вызвана эта функция.
  console.log('Hello', this.name);
}

const person = {
  name: 'Anar',
  age: 25,
  sayHello: hello,
  //   sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.log(`Name is ${this.name}`); // this является обьектом
    // peson
  },
};

person.sayHello();
// person.sayHelloWindow(); // С помощью bind мы поменяли контекст на
// window

person.logInfo(); // кличи будут браться у обьекта peson

const nani = {
  name: 'Nani',
  age: 18,
};

person.logInfo.bind(nani, 'Killer', '+70002281488')(); // возвращает новую функцию
person.logInfo.call(nani, 'Killer', '+70002281488'); // сразу же вызывает
person.logInfo.apply(nani, ['Killer', '+70002281488']); // сразу же вызывает но параметры массив

// ========================= Примеры

const arr = [1, 2, 3, 4, 5];

function multBy(n, array) {
  return array.map((i) => {
    return n * i;
  });
}

// console.log(multBy(15, arr)); выведет числа умноженные на 15

// Как сделать так что бы у массива сразу был этот метод

Array.prototype.multBy = function multBy(n) {
  return this.map((i) => {
    return n * i;
  });
};

console.log(arr.multBy(2));
