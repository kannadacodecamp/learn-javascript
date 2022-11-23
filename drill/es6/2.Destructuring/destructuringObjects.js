const personalInformation = {
  firstName: "James",
  lastName: "Korbin",
};

// Method One
const { firstName, lastName } = personalInformation;
console.log(`FirstName : ${firstName} & LastName: ${lastName}`);

// Method Two
const { firstName: fn, lastName: ln } = personalInformation;
console.log(`FirstName : ${fn} & LastName: ${ln}`);
