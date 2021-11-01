const person = {
  name: 'Anar',
  age: '23',
  greet: () => {
    console.log('greet');
  },
};

console.log(person.name);
console.log(person.age);
person.greet();

// person.sayHi(); Ошибка
person.toString(); // нет ошибки

console.log(person); //есть свойство __proto__ название родительского
// класса от которого наследуется обьект

const person1 = new Object({
  name: 'Игорь',
  age: '22',
});

console.log(person1);
Object.prototype.sayHello = () => {
    console.log('hello');
} // созадли sayHello для всех обьектов

person1.sayHello();
person.sayHello();

// Prototype - это обьект который есть у цепочки обьектов. 