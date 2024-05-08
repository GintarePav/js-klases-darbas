// iprasta funkcija:
function hi() {
  console.log("Hi");
}

// anonimine funkcija (function expression):
const sayHi = function () {
  let firstName = "Martynas";
  return firstName;
};

// arrow funkcija:
const sayHello = () => {
  let name = "Martynas";
  return name;
};

// save issikviecianti funkcija (Immediately Invoked Function Expression - IIFE):
(function () {
  //   console.log("testas");
})();
// naudojama, kad neivyktu konfliktas su kitais kintamaisiais ar kodu kituose js failuose; i funkcija butu idedamas visas to failo, kuriame ji yra, kodas

// spread operator:
const addNumber = (...numbers) => {
  //   let sum = 0;
  //   for (num of numbers) {
  //     sum += num;
  //   }
  //   return sum;
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};

console.log(addNumber(5, 5, 5, 5, 5));
