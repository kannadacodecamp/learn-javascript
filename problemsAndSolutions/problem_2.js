// write a function to flatten object

const obj = {
  name: "maruthi",
  age: 30,
  details: {
    education: "Mtech",
    rank: 3,
    inDepthDetails: {
      married: true,
      stack: "javascript",
    },
  },
};

let newobj = {};

const getFlattenObj = (obj) => {
  Object.keys(obj).forEach((key) => (typeof obj[key] == "object" ? getFlattenObj(obj[key]) : (newobj[key] = obj[key])));
  return newobj;
};

console.log(getFlattenObj(obj)); // {name: 'maruthi', age: 30, education: 'Mtech', rank: 3, married: true, stack: 'javascript' }
