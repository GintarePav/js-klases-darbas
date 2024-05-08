const studentNames = [
  "Simonas",
  "Lukas",
  "Daiva",
  "Nerijus",
  "Ugnius",
  "Mantas",
  "Danielius",
  "Nojus",
  "Eugenijus",
  "Ignas",
];

// list
const ul = document.querySelector("ul");
for (student of studentNames) {
  const li = document.createElement("li");
  li.textContent = student;
  if (student.length > 6) {
    li.style.color = "#FF0000";
  } else {
    li.style.color = "#0000FF";
  }
  ul.appendChild(li);
}

// h1
let newArr = [];
for (student of studentNames) {
  newArr.push(`${student[0]}${student[student.length - 1]}`);
}
newArr = newArr.join("");
const h1 = document.createElement("h1");
h1.textContent = newArr;
document.querySelector("section").appendChild(h1);

// grid
const grid = document.querySelector(".grid");
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  grid.appendChild(div);
}

// grid random color
const random = () => {
  return Math.floor(Math.random() * 255);
};

const randomBg = () => {
  return `rgb(${random()},${random()},${random()})`;
};

for (let div of document.querySelectorAll(".grid div")) {
  div.onclick = (e) => {
    e.target.style.backgroundColor = randomBg();
  };
}
