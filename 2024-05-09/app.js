const tips = [
    {
      "id": 1,
      "patarimas": "Kiekvieną dieną užrašykite, ką išmokote ir ką norėtumėte dar išmokti. Tai padės jums stebėti savo pažangą ir identifikuoti sritis, kuriose reikia tobulėti."
    },
    {
      "id": 2,
      "patarimas": "Ieškokite mokymosi partnerio arba draugo, su kuriuo galėtumėte dalintis žiniomis ir mokytis kartu. Diskutuodami su kitu žmogumi galite giliau suprasti temą ir lengviau įsisavinti naują medžiagą."
    },
    {
      "id": 3,
      "patarimas": "Sukurkite efektyvią laiko valdymo sistemą, kuri padės jums efektyviau planuoti mokymosi laiką ir išlaikyti produktyvumą."
    },
    {
      "id": 4,
      "patarimas": "Naudokite mokymosi programas ir technologijas, kurios gali padėti jums įsisavinti medžiagą interaktyviai ir įdomiai."
    },
    {
      "id": 5,
      "patarimas": "Pasirinkite kokybiškus mokymosi vadovėlius, kurie gerai struktūruoti ir pateikia aiškią informaciją. Tai padės jums suprasti sunkias temas lengviau."
    },
    {
      "id": 6,
      "patarimas": "Kiekvieną dieną sukurti mokymosi įpročius ir laikytis jų. Nuoseklumas yra labai svarbus norint pasiekti mokymosi tikslus."
    },
    {
      "id": 7,
      "patarimas": "Sukurkite raminančią mokymosi aplinką, kurioje galėtumėte susikoncentruoti ir dirbti be pertraukų."
    },
    {
      "id": 8,
      "patarimas": "Nustatykite aiškius ir realistiškus mokymosi tikslus, kurie padės jums sukoncentruoti pastangas į svarbiausias sritis."
    },
    {
      "id": 9,
      "patarimas": "Išmokite įvairias mokymosi strategijas, kurios geriausiai atitinka jūsų mokymosi stilių ir poreikius."
    },
    {
      "id": 10,
      "patarimas": "Nustatykite sau mokymosi apdovanojimus už pasiektus tikslus arba sėkmes mokymosi procese. Tai padės jums išlaikyti motyvaciją ir džiugintis savo pažanga."
    }
  ];

  const carouselInside = document.getElementById("carousel-inner");

  const addTips = () => {
    tips.forEach((tip) => {
        const carouselItem = document.createElement("div");
        if (tip.id === 1) {
            carouselItem.setAttribute("class", "carousel-item active");
        } else {
            carouselItem.setAttribute("class", "carousel-item");
        }
        const tipText = document.createElement("h3");
        tipText.setAttribute("class", "d-block w-50 text-center");
        tipText.textContent = tip.patarimas;
        carouselItem.appendChild(tipText);
        carouselInside.appendChild(carouselItem);
        console.log(tip.patarimas);
    })
  }

  addTips()

