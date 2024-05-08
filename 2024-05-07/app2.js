const books = [
  {
    name: "Fantasy",
    books: [
      {
        isbn: "FAN001",
        release_date: 2022,
        title: "D Fantasy Book 1",
        num_of_pages: 120,
        price: 125.56,
      },
      {
        isbn: "FAN002",
        release_date: 2021,
        title: "C Fantasy Book 2",
        num_of_pages: 150,
        price: 25.56,
      },
      {
        isbn: "FAN003",
        release_date: 2020,
        title: "A Fantasy Book 3",
        num_of_pages: 170,
        price: 35.7,
      },
      {
        isbn: "FAN004",
        release_date: 2019,
        title: "B Fantasy Book 4",
        num_of_pages: 190,
        price: 40.1,
      },
    ],
  },
  {
    name: "Poetry",
    books: [
      {
        isbn: "POE001",
        release_date: 2008,
        title: "X Poetry Book 1",
        num_of_pages: 99,
        price: 36.78,
      },
      {
        isbn: "POE002",
        release_date: 2023,
        title: "C Poetry Book 2",
        num_of_pages: 139,
        price: 78.8,
      },
      {
        isbn: "POE003",
        release_date: 2006,
        title: "D Poetry Book 3",
        num_of_pages: 159,
        price: 56.6,
      },
      {
        isbn: "POE004",
        release_date: 2005,
        title: "A Poetry Book 4",
        num_of_pages: 179,
        price: 78.7,
      },
    ],
  },
  {
    name: "Horror",
    books: [
      {
        isbn: "HOR001",
        release_date: 2004,
        title: "G Horror Book 1",
        num_of_pages: 300,
        price: 100.05,
      },
      {
        isbn: "HOR002",
        release_date: 2006,
        title: "E Horror Book 2",
        num_of_pages: 500,
        price: 250.5,
      },
      {
        isbn: "HOR003",
        release_date: 2023,
        title: "F Horror Book 3",
        num_of_pages: 600,
        price: 13.37,
      },
      {
        isbn: "HOR004",
        release_date: 2000,
        title: "R Horror Book 4",
        num_of_pages: 650,
        price: 85.36,
      },
    ],
  },
];

const categoriseBooks = (genre) => {
  const categorisedBooks = books.filter((book) => book.name === genre);
  return categorisedBooks;
};

const listSection = document.querySelector("section");

const printHTML = (list) => {
  list.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    listSection.appendChild(h3);
    item.books.forEach((entry) => {
      const ul = document.createElement("ul");
      for (key in entry) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${entry[key]}`;
        ul.appendChild(li);
      }
      listSection.appendChild(ul);
    });
  });
};

printHTML(categoriseBooks("Horror"));

// padaryti namie (rasti min, max ir su map padaryti 50% nuolaida):
// option one - min:
const findPrice = () => {
  const priceArr = [];
  let cheapestBook = {};
  const loopforArr = books.forEach((genre) => {
    genre.books.forEach((book) => {
      priceArr.push(book.price);
    });
  });
  const minPrice = Math.min(...priceArr);
  const loopForMin = books.forEach((genre) => {
    genre.books.forEach((book) => {
      if (book.price === minPrice) {
        cheapestBook = book;
      }
    });
  });
  return cheapestBook;
};
console.log("cheapest book (first way)", findPrice());

// option two - max:
const findPriceAgain = () => {
  let maxPrice = 0;
  let expensiveBook = {};
  const loopThroughBook = books.forEach((genre) => {
    genre.books.forEach((book) => {
      maxPrice = Math.max(maxPrice, book.price);
      if (book.price === maxPrice) {
        expensiveBook = book;
      }
    });
  });
  return expensiveBook;
};
console.log("most expensive book (second way)", findPriceAgain());

// map - 50% off:

const sale = () => {
  const booksCopy = JSON.parse(JSON.stringify(books));
  const priceReduced = booksCopy.map((booksCopy) => {
    booksCopy.books.forEach((item) => {
      item.price /= 2;
      item.price.toFixed(2);
    });
  });
  return booksCopy;
};

console.log("50% sale with map()", sale());
console.log("original books array", books);
