const generateCommentForm = () => {
    const commentForm = document.createElement("form");
    const nameField = document.createElement("input");
    nameField.placeholder = "Name";
    nameField.type = "Text";
    nameField.id = "comment-name-field"
    commentForm.appendChild(nameField);
    const commentInput = document.createElement("input");
    commentInput.placeholder = "Add comment";
    commentInput.type = "text";
    commentInput.id = "comment-input";
    commentForm.appendChild(commentInput);
    const commentBtn = document.createElement("button");
    commentBtn.type = "submit";
    commentBtn.id = "submit-btn";
    commentBtn.textContent = "Submit";
    commentForm.appendChild(commentBtn);
    document.querySelector(".film-card").appendChild(commentForm);
}

export default generateCommentForm;