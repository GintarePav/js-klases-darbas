import generateCommentForm from "./generateCommentForm";
import postComment from "./postComment";
import getComments from "./getComments";

const leaveAComment = (filmData) => {
    document.querySelector(".film-card a").addEventListener("click", (e) => {
        e.preventDefault();
        if (!document.querySelector(".film-card form") && !document.querySelector(".comment-section")) {
            generateCommentForm();
            const commentSection = document.createElement("section");
            commentSection.classList = "comment-section";
            document.querySelector(".film-card").appendChild(commentSection);
            getComments(filmData);
            document.getElementById("submit-btn").addEventListener("click", (e) => {
                e.preventDefault();
                postComment(filmData);
                document.querySelector("#comment-name-field").value = "";
                document.querySelector("#comment-input").value = "";
            });
        }
    });
}

export default leaveAComment;