//local storage
// const students = ['Ieva', 'Tomas', 'Kristina'];
// localStorage.setItem('studentsList', JSON.stringify(students));
// console.log(JSON.parse(localStorage.getItem('studentsList')));
// localStorage.removeItem('studentsList'); // isvalo tik nurodyta
// localStorage.clear(); // isvalo viska

"use strict" // failo arba funkcijos virsuje, tam kad nauji js features butu naudojami, o seni butu called out, e.g. nedeclarintas variable, kuris yra globalus
// firstName = "Jonas";

// array destructing
let [firstName, lastName, email] = ['Jonas', 'Jonaitis', 'jonas@gmail.com'];
firstName = "Kristina";
// console.log(firstName);

// object destructing
const personalInfo = {
    firstName: "Jonas",
    lastName: "Jonaitis",
    email: "jonas@gmail.com"
};

const {firstName: fn, lastName: lm} = personalInfo;
// console.log(fn);

// check if exists
let items = ['Computer', 'Tablet', 'Phone'];
if (items.includes('Tablet')) {
    // console.log('Item found');
} else {
    // console.log('Item not found')
}

// timeout ir promises
setTimeout(() => {
    // console.log("Labas")
}, 5000);

const sayHi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const firstName = "Kristina";
            resolve(firstName);
        }, 5000)
    })
};

// sayHi().then((firstName) => {console.log(firstName)}).then(() => (console.log("Veikia")));

// arba nenaudot then ir naudot async
const greet = async() => {
    const firstName = await sayHi();
    console.log(`Hi ${firstName}`);
}

greet();
 