const LoadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayComments(data.slice(1, 20)))
}

const DisplayComments = comments => {
    const CommentContainer = document.getElementById('comment-container');
    comments.forEach(comment => {
        const CommentDiv = document.createElement('div');
        CommentDiv.classList.add('comment');
        //console.log(comment);
        CommentDiv.innerHTML = `
    <h3>PostId- ${comment.postId}</h3>
    <h3>Id- ${comment.id}</h3>
    <h3>Name- ${comment.name}</h3>
    <h3>Email- ${comment.email}</h3>
    <h3>Body- ${comment.body}</h3>
    <button onclick =LoadCommentDetails('${comment.id}') >Details</button>
    
    `;
        CommentContainer.appendChild(CommentDiv);

    });

}

const LoadCommentDetails = (PostId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${PostId}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailComment(data))

}
const detailComment = coment => {
    const CommentDetails = document.getElementById('display-container');
    CommentDetails.innerHTML = ``;
    console.log(coment);

    const Detaildiv = document.createElement('div');
    Detaildiv.innerHTML = `
<h3>UserId- ${coment.userId}</h3>
    <h3>Id- ${coment.id}</h3>
    <h3>Title- ${coment.title}</h3>
    <h3>Body- ${coment.body}</h3>

`;
    CommentDetails.appendChild(Detaildiv);




}

LoadComments();