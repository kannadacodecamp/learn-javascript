console.log(1 < 2 < 3); // true
console.log(1 > 2 > 3); // false

console.log([{ name: "john" }, { name: "john" }].indexOf({ name: "john" })); // -1
console.log([[1], [2], [3], [4]].indexOf([3])); // -1

function person(name, age) {
  this.name = name || "John";
  this.age = age || 24;
  this.displayName = function () {
    return this.name;
  };
}
person.displayName();
