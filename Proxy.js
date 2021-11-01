// Прокси это - некоторый класс в js который позволяет делать ловушки
// для обьектов классов итд

// Objects
const person = {
  name: 'Anar',
  age: 23,
  job: 'Webdev',
};
// Запроксируем
const ObjProxy = new Proxy(person, {
  get(target, prop) {
    console.log('Target', target);
    console.log(`Getting prop ${prop}`);
    console.log('Prop', prop);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`no ${prop} field in target`);
    }
  },
});
// Все повторяет полностью обьект но мы модем переписывать некоторый
// функционал. Помимо значения мы получаем те консоль логи которые мы
// указали в get.
