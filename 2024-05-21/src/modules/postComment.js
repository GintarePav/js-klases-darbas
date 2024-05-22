import createCommentCard from "./createCommentCard";
import commentLog from "./commentLogVariable";

const postComment = (filmData) => {
        const commenterName = document.querySelector("#comment-name-field").value;
        const commentText = document.querySelector("#comment-input").value;
        const commentObject = {
            title: filmData.Title,
            name: commenterName,
            text: commentText
        };
        if (commenterName.length < 1 || commentText.length < 1) {
            const errorPlaceholder = document.querySelector(".film-card form").parentNode;
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Empty fields are not allowed."
            errorPlaceholder.insertBefore(errorMessage, document.querySelector(".film-card form"));
            window.setTimeout(() => {
                errorMessage.remove();
              }, 3000);
        } else {
            createCommentCard(commenterName, commentText);
            commentLog.push(commentObject);
            localStorage.setItem("commentLog", JSON.stringify(commentLog));
        }
}
export default postComment;


