const addressMaker = (city, state) => {
  // const newAddress = { newCity: city, newState: state }; // old way

  // "if the key is same as the value we pass in" then we can use like this
  const newAddress = { city, state }; // new way

  console.log(newAddress);
};

addressMaker("chitradurga", "davanagere");
