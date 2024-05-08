// const allArticles = document.querySelectorAll("article"); // sukuria masyva, todel norint uzdeti e.g. spalva, reikia praloopinti

// const color = "#FF0000";

//uzdeti ivyki ir paleisti funkcija:
// allArticles.addEventListener("click", () => {
//   alert("Don't touch me.");
//   allArticles.style.backgroundColor = "#FF0000";
// });

// uzdeti su js spalvos fona visiems article elementams:
// allArticles.forEach((article) => {
//   article.style.backgroundColor = color;
// });

//uzdeti spalva on click:
// for (let article of allArticles) {
//   article.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = color;
//   });
// }

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault(); // keiciama standartine formos elgsena;
//   for (let article of document.querySelectorAll("article p")) {
//     article.innerHTML = document.querySelector("input").value;
//   }
// });

// document.querySelector(".todo form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let li = document.createElement("li");
//   li.textContent = document.querySelector(".todo form input").value;
//   document.querySelector(".todo ul").appendChild(li);
// });

document.querySelector(".todo form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ul = document.querySelector(".todo ul");
  ul.innerHTML += `<li>${
    document.querySelector(".todo form input").value
  }</li>`;
}); // nera geras variantas tokiam paprastam sukurimui, bet kai yra kompleksine struktura, kur reikia daug visko sukurti, innerHTML sutaupo laiko;
