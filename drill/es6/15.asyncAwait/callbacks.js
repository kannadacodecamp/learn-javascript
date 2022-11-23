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

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 1000);
};

createPost({ title: "postThree", body: "This is post three" }, getPosts);
