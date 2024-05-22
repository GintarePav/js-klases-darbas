import generateLinkAndAjax from "./generateLinkAndAjax";
import leaveAComment from "./leaveAComment";

const printCard = () => {
    let film;
    generateLinkAndAjax().then((result) => film = result).then(() => {
        if (film.Title) {
            const card = document.createElement("article");
            card.classList = "film-card__card-inner";
            const filmBio = document.createElement("section");
            filmBio.innerHTML = `
            <h3>${film.Title}</h3>
            <p><span>Release Year:</span> ${film.Released}</p>
            <p><span>Runtime:</span> ${film.Runtime}</p>
            <p><span>Genre:</span> ${film.Genre}</p>
            <p><span>Director:</span> ${film.Director}</p>
            <p><span>Actors:</span> ${film.Actors}</p>
            <p><span>Plot:</span> ${film.Plot}</p>
            <p><span>IMDB Rating:</span> ${film.imdbRating}</p>
            `;
            if (film.Awards != "N/A") {
                filmBio.innerHTML += `<p><span>Awards:</span> ${film.Awards}</p>`
            }

            if (film.Poster != "N/A") {
                filmBio.innerHTML += `
                <div>
                <img src="${film.Poster}"/>
                </div>`
            }
            card.appendChild(filmBio);
            document.querySelector(".film-card").appendChild(card);
            const commentOption = document.createElement("a");
            commentOption.textContent = "Comments";
            commentOption.href = "#";
            document.querySelector(".film-card").appendChild(commentOption);
            leaveAComment(film);
        } else {
            const errorMessage = document.createElement("h4");
            errorMessage.textContent = "Sorry, we couldn't find the film you're looking for. Please try again.";
            document.querySelector(".film-card").appendChild(errorMessage);
        }
    })
}

export default printCard;