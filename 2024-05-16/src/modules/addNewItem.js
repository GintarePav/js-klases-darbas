const addNewItem = () => {
  const imgCard = document.createElement("div");
  imgCard.setAttribute("class", "gallery__img-card");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", `${document.getElementById("image-url").value}`);
  imgContainer.appendChild(img);
  imgCard.appendChild(imgContainer);
  const imgCaption = document.createElement("p");
  imgCaption.textContent = `${document.getElementById("image-caption").value}`;
  imgCard.appendChild(imgCaption);
  document.querySelector(".gallery").appendChild(imgCard);
};

export default addNewItem;
