// parent class
class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = "Loud Noise") {
    // provide default params for smooth working of our code
    console.log(sound);
  }

  get metaData() {
    // call the function as property if you use get keyword infront of function
    return `Type = ${this.type} & Legs = ${this.legs}`;
  }

  static myStaticFunc() {
    // we can call this function without creating instance
    return `Static keyword allows us to execute function without instance`;
  }
}

// Child class named 'Cat' inherits Parent Class named 'Animal'
class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs); // calling super method is important while inheriting parent constructor
    this.tail = tail;
  }
}

// console.log(Animal.myStaticFunc()); // run this line only for static function execution

//const x = new Animal("cat", 4);
// console.log(x.makeNoise());

//console.log(x.metaData);

const y = new Cat("sneha", 4, true);
y.makeNoise();
