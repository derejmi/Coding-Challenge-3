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
    fetch('http://localhost:3000/blogs')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

// create
function submitPost(e){
    e.preventDefault();

    let title = e.target.title.value
    let messages = e.target.messages.value

    const checkedTitle = title ? title : null;
    const checkedMessage = messages ? messages : null;
    
    const postData = {
        title: checkedTitle,
        messages: checkedMessage,
        link: e.target.link.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/blogs', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};

// helpers
function appendPosts(data){
    data.forEach(appendPost);
};

function appendPost(postData){
    const newDiv = document.createElement('div');
    const postLi = formatPostDiv(postData, newDiv)
    postsList.append(newDiv);
};


function formatPostDiv(post, div){
    const titleH1 = document.createElement('h1');
    const messageP = document.createElement('p');
    const linkDiv = document.createElement('div');
    const dateSub = document.createElement('sub')
    const iframe = document.createElement('iframe');
    iframe.src=post.link

    titleH1.textContent =post.title
    messageP.textContent = post.messages
    dateSub.textContent = post.date


    div.append(titleH1)
    div.append(messageP)
    div.append(linkDiv)
    if(post.link){div.append(iframe)}
    div.append(dateSub)

    return div
}
// ********************************************