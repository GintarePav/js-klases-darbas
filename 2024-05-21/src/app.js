import accessFilms from "./modules/accessFilms";
import printCard from "./modules/printCard";
import clearCard from "./modules/clearCard";
import generateCommentForm from "./modules/generateCommentForm";
import postComment from "./modules/postComment";

// document.querySelector("#film-title-search").addEventListener("input", (e) => {
//     e.preventDefault();
//     accessFilms();
// })

document.querySelector("#search-btn").addEventListener("click", (e) => {
    e.preventDefault();
    clearCard();
    printCard();
    document.querySelector("#film-title-search").value = "";
})