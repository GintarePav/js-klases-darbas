import generateLinkAndAjax from "./generateLinkAndAjax";

const accessFilms = () => {
    let searchResponse;
    generateLinkAndAjax().then((response) => searchResponse = response).then(() => {
        if (searchResponse.Title) {
            let option = document.createElement("option");
            option.value = `${searchResponse.Title}`;
            document.querySelector("#film-title-list").appendChild(option);
        }
    })
}

export default accessFilms;