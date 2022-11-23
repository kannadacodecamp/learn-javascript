import { Dog } from "exportClass"; // method_01
import { Dog as D } from "./exportClass"; // method_02

const x = new Dog();
x.bark(); // returns Bow Bow ..!

const x = new D();
x.bark(); // returns Bow Bow ..!
