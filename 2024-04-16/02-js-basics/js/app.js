let firstName = "Jonas";
firstName = "Tadas";
const count = 12;
let userOnline = false;
let age = 25;
let price = 12.25;
let users = ["Jonas", "Ieva", "Tadas", "Karolis"];
let user = [
  {
    firstName: "Jonas",
    lastName: "Jonaitis",
    email: "jonas@jonaitis.com",
  },
  {
    firstName: "Petras",
    lastName: "Petraitis",
    email: "petras@petraitis.com",
  },
];
// console.log(items++)
// console.log(items)
// console.log(++items);
let userOnePoints = 10;
let userTwoPoints = "10";
let movieTitle = "The Matrix";
// console.log(movieTitle.slice(3,6))
// console.log(movieTitle.replace("The", "At"))
let itemsTwo = ["phone", "computer", "milk"];
// console.log(itemsTwo.length);

itemsTwo = itemsTwo.join(", ");
// console.log(itemsTwo);
itemsTwo = itemsTwo.split(", ");
// console.log(itemsTwo);
itemsTwo.push("smart watch");
itemsTwo.pop();
// console.log(itemsTwo)

let activeUser = "";
if (activeUser.length >= 4) {
  // console.log("Standart user");
} else if (activeUser.length >= 8) {
  // console.log("Vip user");
} else {
  // console.log("User is inactive");
}

let language = "LT";
switch (language) {
  case "LT":
    // console.log("Labas");
    break;
  case "EN":
    // console.log("Hello");
    break;
  default:
  // console.log("Nezinau tokios kalbos");
}

let result = 12 > 6 ? "true" : "false"; //ternary operator
// console.log(result);

// console.log("- itemsTwo su for:");
for (let i = 0; i < itemsTwo.length; i++) {
  // console.log(itemsTwo[i]);
}

// console.log("- itemsTwo su for of:");
for (let item of itemsTwo) {
  // console.log(item);
} //works only on arrays

// console.log("- itemsTwo su for in:");
for (let item in itemsTwo) {
  // console.log(itemsTwo[item]);
} // returns the index; works on both array and object

let item = {
  code: 123,
  title: "Computer",
  count: 12,
  price: 1250.04,
};

for (let property in item) {
  // console.log(`${property}: ${item[property]}`);
}

let userList = [
  "Gabriele",
  "Laura",
  "Greta",
  "Egle",
  "Ieva",
  "Milda",
  "Jurgita",
  "Rasa",
  "Giedre",
  "Ingrida",
];

// console.log("Task 1:"); // reikejo pritaikyt lower case
for (let user of userList) {
  if (user.length === 5 || user === "Milda") {
    // console.log(user);
  }
}

let students = [
  {
    id: 1,
    firstName: "Jonas",
    lastName: "Jonaitis",
    age: 22,
    email: "jonas@jonaitis.com",
    group: "students",
  },
  {
    id: 2,
    firstName: "Petras",
    lastName: "Petraitis",
    age: 25,
    email: "petras@petraitis.com",
    group: "students",
  },
  {
    id: 3,
    firstName: "Ieva",
    lastName: "Petraite",
    age: 27,
    email: "ieva@petraite.com",
    group: "students",
  },
  {
    id: 4,
    firstName: "Tadas",
    lastName: "Petras",
    age: 28,
    email: "tadas@petras.com",
    group: "students",
  },
  {
    id: 5,
    firstName: "Titas",
    lastName: "Petras",
    age: 20,
    email: "titas@petras.com",
    group: "students",
  },
];

// console.log("Studentu sarasas:");
for (let student of students) {
  if (student.age <= 25) {
    // console.log("----------");
    for (let info in student) {
      // console.log(`${info}: ${student[info]}`);
    }
  }
}

// let firstNameOne = prompt('Ivesk varda');
// alert(firstNameOne);

/* Sukurti sveciu saraso formavimo aplikacija
paleidus paklausia kiek sveciu
promt turi buti rodomas tiek kartu kiek, yra sveciu ir klausia, koks vardas
console.log sveciu sarasa
turi ismesti alerta, jei yra blackliste, o tada toliau praso vardu
*/

let howMany = prompt("Kiek sveciu?");
let guestList = [];

function checkBanned(i) {
  let banned = ["Adolfas", "Justas"];
  let names = prompt(`Koks ${i}-ojo svecio vardas?`);
  if (banned.includes(names)) {
    alert("Negalima");
    return checkBanned(i);
  } else {
    return names;
  }
}

for (let i = 1; i <= howMany; i++) {
  let approvedNames = checkBanned(i);
  guestList.push(approvedNames);
}

for (let i of guestList) {
  console.log(i);
}
