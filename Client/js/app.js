const form = document.querySelector("#new-posts-form");

form.addEventListener("submit", submitPost);

getAllPosts();

//index
function getAllPosts() {
  fetch("http://localhost:3000/books")
    .then((r) => r.json)
    .then(appenPosts)
    .catch(console.warn);
}

function submitPost(e) {
  e.preventDefault();

  const postData = {
    title: e.target.title.value,
    message: e.target.message.value,
    link: e.target.link.value,
    date: e.target.date.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:3000/posts", options)
    .then((r) => r.json())
    .then(appendPost)
    .then(() => e.target.reset())
    .catch(console.warn);
}

function appendPosts(data) {
  data.posts.forEach(appendPost);
}

function appendPost(postData) {}
