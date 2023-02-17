const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <img src="${post.image}"
    width="100px" height="100px" class="rounded float-end">    
        <div class = " fw-normal text-muted">
            ${post.topic}
        </div>
        ${post.userName}
        <i class="fas fa-circle-check"></i>
        <div class = " d-inline fw-normal text-muted">
            ${post.time}
        </div>
        <br>
        ${post.title}
    </li>
    
    `)
}
export default PostSummaryItem