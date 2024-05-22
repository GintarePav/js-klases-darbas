const generateLinkAndAjax = () => {
    const url = "http://www.omdbapi.com/?t=";
    const key = "&apikey=ffbb1f2f"
    const searchInput = () => {
        let titleSearched = document.querySelector("#film-title-search").value.toLowerCase();
        if (titleSearched.includes(" ")) {
            titleSearched = titleSearched.replace(" ", "+");
        }
        return titleSearched
    }
    return fetch(`${url}${searchInput()}${key}`).then((response) => response.json());
}

export default generateLinkAndAjax;