function LoadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => DisplayPost(data))
}

function DisplayPost(posts) {

    const PostContainer = document.getElementById('post-container');


    for (const post of posts) {

        const Postdiv = document.createElement('div');
        console.log(post);
        Postdiv.classList.add('post')
        Postdiv.innerHTML = `

        <h4>User-${post.userId}</h4>
        <h5>Post:Title${post.title}</h5>
        <p>Post Description${post.body}</p>
        `;
        PostContainer.appendChild(Postdiv);



    }
}

LoadPost();