const preMovie = async () => {
  const ticketPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("---> ticket promise");
      let ticketError = false;
        if (!ticketError) {
            resolve("Got Ticket");
        } else {
            reject('Got an error, exiting ..')
        };
      }, 2000);
  });

  const popcornPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("---> popcorn promise");
      resolve("popcorn 😊✔");
    }, 1000);
  });

  const butterPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("----> butter promise");
      resolve("butter 😊✔");
    }, 3000);
  });

  let ticket = await ticketPromise;
  console.log(`I have the ${ticket}`);

  let popcorn = await popcornPromise;
  console.log(`I've got some ${popcorn}`);

  let butter = await butterPromise;
  console.log(`I've got some ${butter}`);

  return ticket;
};

preMovie().then((m) => console.log(m)).catch(err => console.log(err));

