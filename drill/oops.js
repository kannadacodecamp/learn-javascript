class CoffeeMachine {
  isCoffeeHot = true; // public
  _waterAmount = 0; // protected
  #isDrinkable = "yes"; // protected

  get waterAmount() {
    return this._waterAmount;
  }
  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  drinkCoffee() {
    return `can i drink coffe : ${this.#isDrinkable}`;
  }
  addWaterAmount(value) {
    this.waterAmount(value);
  }

  static greet() {
    return "Hi i am a static method and can called from by class name and not by instance";
  }
}

let coffeeMachine = new CoffeeMachine(100);

// %%%%%%%%%%% public %%%%%%%%%%%%
coffeeMachine.isCoffeeHot = false; // this works

// %%%%%%%%%%% protected %%%%%%%%%%%%
coffeeMachine.waterAmount = 10;
console.log(coffeeMachine.waterAmount);

coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
console.log(coffeeMachine.waterAmount);

// %%%%%%%%%%% private %%%%%%%%%%%%
// coffeeMachine.#isDrinkable = "no"; // this does not work

// %%%%%%%%%% access static methods %%%%%%%%%555
console.log(coffeeMachine.greeet()); // this does not work, we can not call greet() method on instance
console.log(CoffeeMachine.greet()); // Hi i am a static method and can called from by class name and not by instance
