const posts = [
  { title: "postOne", body: "This is post one" },
  { title: "PostTwo", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} and ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something Went Wrong..!");
      }
    }, 1000);
  });
};


//////////////////////////////// Async / Await
async function maruthi() {
  await createPost({ title: "titleThree", body: "bodyThree" });
  getPosts();
}

maruthi();

//////////////////////////////// promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch(
//   "http://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });
