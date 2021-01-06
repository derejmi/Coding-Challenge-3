// ********************************************
// SETUP
const form = document.querySelector('#new-posts-form');
const postsList = document.querySelector('div');

// Bind event listeners
form.addEventListener('submit', submitPost);

// Fetch all cats as soon as app is loaded
getAllPosts();

// ********************************************

// DOGS FLOW
// index
function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

// create
function submitPost(e){
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        author: e.target.author.value,
        message: e.target.message.value,
        link: e.target.link.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};

// helpers
function appendPosts(data){
    data.posts.forEach(appendPost);
};

function appendPost(postData){
    const newDiv = document.createElement('div');
    const postLi = formatPostDiv(postData, newDiv)
    postsList.append(newDiv);
};


function formatPostDiv(post, div){
    const titleH1 = document.createElement('h1');
    const authorH2 = document.createElement('h2');
    const messageP = document.createElement('p');
    const linkDiv = document.createElement('div');
    titleH1.textContent =post.title
    authorH2.textContent = post.author
    messageP.textContent = post.message
    linkDiv.textContent = post.link

    div.append(titleH1)
    div.append(authorH2)
    div.append(messageP)
    div.append(linkDiv)

    return div
}
// ********************************************