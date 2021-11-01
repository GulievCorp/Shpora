class Animal {
  static type = 'ANIMAL';

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }
  voice() {
    console.log('i m animal');
  }
}

const animal = new Animal({
  name: 'Motya',
  age: 5,
  hasTail: true,
});

console.log(animal);

class Cat extends Animal {
  constructor(options) {
    super(options), // этой строчкой вызываем конструктор из Animal
      (this.color = options.colors);
  }

  voice() {
    super.voice(); // Вызваем метод voice из родителського класса
    console.log(`im cat, my name is ${this.name}`);
  }

  get ageInfo() {
    return this.age * 7;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: 'Nani',
  age: 7,
  hasTail: true,
});

cat.voice();

console.log(cat.ageInfo);

// ###################### Практический пример

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }
  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red',
});

const box2 = new Box({
  selector: '#box2',
  size: 100,
  color: 'black',
});
