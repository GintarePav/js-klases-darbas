// Roadmap:
// Gavus duomenis is api uzpildyti vietovemis select elements

// 1. Gautivietoviu json is api serviso.
// 2. Consoliti duomenis ir isitikinti, kad juos gavome.
const getPlaces = async () => {
  const data = await fetch("https://api.meteo.lt/v1/places").then(
    (response) => {
      return response.json();
    }
  );
  return data;
};
// 3. Sukurti tiek option elementu, kiek yra vietoviu.
// 4. I option elementa ideti vietoves pavadinima.

const renderPlaces = async () => {
  const data = await getPlaces();
  //   console.log("is kitos funkc.", data);
  for (let place of data) {
    let option = document.createElement("option");
    option.value = `${place.name} (${place.administrativeDivision})`;
    document.querySelector("datalist").appendChild(option);
  }
};

export default renderPlaces;
