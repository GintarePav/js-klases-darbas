import addNewItem from "./modules/addNewItem";
import saveGallery from "./modules/saveGallery";
import renderPlaces from "./modules/form";
import form from "./modules/zipFinder_form";
import renderForm from "./modules/zipFinder_renderForm";
import ajaxService from "./modules/zipFinder_ajaxService";
import searchCode from "./modules/zipFinder_searchCode";

document.getElementById("save-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem();
  saveGallery();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".gallery").innerHTML =
    localStorage.getItem("gallery");
});

renderPlaces();
renderForm();
searchCode();
