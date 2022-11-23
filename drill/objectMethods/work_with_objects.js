let person = {
  name: "maruthi",
  age: "30",
  admin: true,
};

let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'admin']

let vals = Object.values(person);
console.log(vals); // ['maruthi', '30', true]

let entries = Object.entries(person);
console.log(entries); // [['name', 'maruthi'], ['age', '30'], ['admin', true]]
console.log(Object.fromEntries(entries)); // { name: 'maruthi', age: 30, admin: true }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% object.assign() %%%%%%%%%%%%%%%%%%%%%%%%%%5
let course = {
  name: "web design",
};
let grade = {
  score: 92,
};
console.log(Object.assign(course, grade)); // { name: 'web design', score: 92 }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% object.create() %%%%%%%%%%%%%%%%%%%%%%%%%%%%
let obj = {
  name: "xehra",
};

let obj2 = Object.create(obj, {});
console.log(obj2);
console.log(obj2.name); // xehra

// %%%%%%%%%%%%%%%%%%%%%%%%%%% property descriptors %%%%%%%%%%%%%%%%%%%%%%%%%%
let me = {
  name: "maruthi",
  age: 30,
};

Object.defineProperty(me, "admin", {
  value: true, // [default = undefined]
  writable: true, // change the value [default = true]
  configurable: true, // change the property descriptors [default = true]
  enumerable: true, // if you set this to false then admin: true will not show up [default = true]
});

Object.defineProperty(me, "married", {
  configurable: true,
  enumerable: true,
  get: () => this.value,
  set: (_val) => {
    this.value = `YES, ${_val}`;
  },
});

me.married = "married"; // if you forget this then element becomes undefined

for (let x in me) {
  console.log(`(Key: ${x}, Value: ${me[x]})`);
}
