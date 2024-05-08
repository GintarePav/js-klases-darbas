// 1. Write a function findLongestWord that takes a string of words and returns the longest word in the string.
// Example usage:
// console.log(findLongestWord('This is a sample sentence')); // Output: "sentence"

const findLongestWord = (str) => {
  const tempArr = str.split(" ");
  let length = 0;
  let longestWord = "";
  for (item of tempArr) {
    if (item.length > length) {
      length = item.length;
      longestWord = item;
    }
  }
  return longestWord;
};
console.log(
  findLongestWord("This is a sample sentence dasssdsasasqawasas sasas")
);

// 2. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
// Example usage:
// console.log(findMax([3, 7, 1, 9, 4])); // Output: 9

const findMax = (arr) => {
  const max = Math.max(...arr);
  return max;
};
console.log(findMax([3, 7, 1, 9, 4, 11, 88]));

// 3. Write a function reverseString that takes a string as input and returns the reverse of that string.
// Example usage:
// console.log(reverseString('Hello')); // Output: "olleH"

const reverseString = (str) => {
  const reversed = str.split("").reverse().join("");
  return reversed;
};
console.log(reverseString("Helloworld"));

// 4. Write a function titleCase that converts a sentence to title case (the first letter of each word capitalized).
// Example usage:
// console.log(titleCase('this is a sample sentence')); // Output: "This Is A Sample Sentence"

const titleCase = (str) => {
  const tempArr = str.split(" ");
  const newArr = [];
  for (item of tempArr) {
    let tempWord = "";
    let firstletter = item.charAt(0).toUpperCase();
    let restOfWord = item.slice(1);
    tempWord = firstletter + restOfWord;
    newArr.push(tempWord);
  }
  const capitalised = newArr.join(" ");
  return capitalised;
};

console.log(titleCase("this is a sample sentence asdsfd sdsdsd"));

// filter()

const students = [
  {
    id: 1,
    firstName: "Jonas",
    lastName: "Jonaitis",
    group: "JS22",
    results: {
      db: 7.5,
      js: 8,
      Linux: 6,
    },
  },
  {
    id: 2,
    firstName: "Petras",
    lastName: "Petraitis",
    group: "JS23",
    results: {
      db: 5.5,
      js: 4,
      Linux: 9,
    },
  },
  {
    id: 3,
    firstName: "Vardenis",
    lastName: "Pavardenis",
    group: "JS23",
    results: {
      db: 4.5,
      js: 8,
      Linux: 6,
    },
  },
  {
    id: 4,
    firstName: "Tomas",
    lastName: "Tomaitis",
    group: "JS24",
    results: {
      db: 9.5,
      js: 4,
      Linux: 6,
    },
  },
  {
    id: 5,
    firstName: "Ieva",
    lastName: "Ievaite",
    group: "JS24",
    results: {
      db: 9.5,
      js: 8,
      Linux: 9,
    },
  },
];

const filteredStudents = students.filter(
  (student) => student.firstName.length > 5
);

const filterByGroup = (group) => {
  const filteredStudents = students.filter(
    (student) => student.group === group
  );
  return filteredStudents;
};

// console.log(filterByGroup("JS24"));

// pagal vidurki:

const getAverage = (array) => {
  return array.reduce((a, b) => a + b) / array.length;
};

const filterByAvg = (avg) => {
  const filteredStudents = students.filter(
    (student) => getAverage(Object.values(student.results)) >= avg
  );
  return filteredStudents;
};

// console.log(filterByAvg(8));
