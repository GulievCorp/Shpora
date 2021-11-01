// GET SET

const person = Object.create(
  {
    // Тут мы пишем методы которые будут доступны этому методу
    calculateAger() {
      console.log('Age', new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: 'Anar',
      writable: true, // разарешеает изменять это свойство
      configurable: true, // разрешает удалять это свойство
    },
    surname: {
      value: 'Guliev',
      enumerator: true, // Заставляет видеть это свойство
    },
    birthYear: {
      value: 1998,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set() {
        document.body.style.background = 'red'; // Изменим цвет
        console.log('set age', value);
      },
    },
  },
);

console.log(person); // В обьекте есть особенности. Поля name бледного цвета
// При переборе циклом У обьекта персон не будет ключей.

person.surname = 'Dibrov'; // все равно будет Guliev

for (let elem in person) {
  if (person.hasOwnProperty(elem)) {
    console.log('ley', key, person[key]);
  }
  console.log(elem);
}

console.log(person.age); // получим то что в get
console.log(person);
