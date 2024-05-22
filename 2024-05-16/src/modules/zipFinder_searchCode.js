import ajaxService from "./zipFinder_ajaxService";

const searchCode = () => {
  document.querySelector("#search-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector(".term").value;
    let searchResponse;
    ajaxService(searchTerm)
      .then((result) => (searchResponse = result))
      .then(() => {
        if (!searchResponse.data.length) {
          const insertPlaceholder =
            document.querySelector("#zip-header").parentNode;
          const errorMessage = document.createElement("p");
          errorMessage.textContent =
            "The address is not valid. Please try again.";
          errorMessage.style.color = "#FF0000";
          insertPlaceholder.insertBefore(
            errorMessage,
            document.querySelector(".card")
          );
          document.querySelector(".term").value = "";
          document.querySelector(".result").value = "";
          window.setTimeout(() => {
            errorMessage.remove();
          }, 3000);
        } else {
          document.querySelector(".result").value =
            searchResponse.data[0].post_code;
        }
      });
  });
};

export default searchCode;

// sugenruoti klaidos pranesima virs formos, kad tokios adreso nera ir pasto kodo neuzpildo
