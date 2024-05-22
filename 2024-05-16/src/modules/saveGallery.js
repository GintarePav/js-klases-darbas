const saveGallery = () => {
  localStorage.setItem("gallery", document.querySelector(".gallery").innerHTML);
};

export default saveGallery;
