const createCommentCard = (name, text) => {
    // const commentSection = document.createElement("section");
    const commentSection = document.querySelector(".comment-section")
    commentSection.classList = "comment-section";
    const singleComment = document.createElement("article");
    singleComment.classList = "comment-section__single-comment";
    const commenterNameRender = document.createElement("p");
    commenterNameRender.textContent = name;
    singleComment.appendChild(commenterNameRender);
    const commentTextRender = document.createElement("p");
    commentTextRender.textContent = text;
    singleComment.appendChild(commentTextRender);
    commentSection.appendChild(singleComment);
    // document.querySelector(".film-card").appendChild(commentSection);
}

export default createCommentCard;