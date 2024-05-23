// function Student (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHi = function() {
//         return [this.firstName, this.lastName]
//     }
// }

// let newStudent = new Student("Jonas", "Jonaitis");

// for (let property of newStudent.sayHi()) {
//     // console.log(property);
// }

/* sukurti konstruktoriu su:
id,
pavadinimas,
kaina: (reguliari, akcija),

sukurti metoda, kuris grazina visa info apie preke, bet grazina regular kaina, jeigu siandien oro temp. <20C. Jei >, grazina akcija. 
*/

function Item (id, name, price, salePrice) {
    this.id = id,
    this.name = name,
    this.regularPrice = price,
    this.salePrice = salePrice,
    this.printInfo = async function() {
        let dateAndTime = new Date().toISOString().substring(0, 14);
        const response = await fetch("https://api.meteo.lt/v1/places/kaunas/forecasts/long-term");
        const data = await response.json();
        let {forecastTimestamps} = data;
      
   
        forecastTimestamps = forecastTimestamps.filter((timeStamp) => {
            let apiDateAndTime = new Date(timeStamp.forecastTimeUtc).toISOString().substring(0, 14);
            if (apiDateAndTime === dateAndTime) {
                if (timeStamp.airTemperature <= 20) {
                    //console.log(`${this.id}, ${this.name}, ${this.regularPrice}`)
                     return `${this.id}, ${this.name}, ${this.regularPrice}`
                } else {
                    // console.log(`${this.id}, ${this.name}, ${this.salePrice}`)
                    return `${this.id}, ${this.name}, ${this.salePrice}`
                }
            }
        })
        console.log('spi',forecastTimestamps)
        }
    }

const demo = async ()=>{
    let newItem = new Item(1, "duona", 1.20, 0.99);
     console.log( await newItem.printInfo())
}

demo()


//console.log(newItem.printInfo());
// newItem.printInfo();

/*
this.printInfo = async function() {
        let dateAndTime = new Date().toISOString().substring(0, 14);
        const response = await fetch("https://api.meteo.lt/v1/places/kaunas/forecasts/long-term");
        const data = await response.json();
        for (let timeStamp of data.forecastTimestamps) {
                    let apiDateAndTime = new Date(timeStamp.forecastTimeUtc).toISOString().substring(0, 14);
                    if (apiDateAndTime === dateAndTime) {
                        if (timeStamp.airTemperature <= 20) {
                            console.log(`${this.id}, ${this.name}, ${this.regularPrice}`)
                            return `${this.id}, ${this.name}, ${this.regularPrice}`
                        } else {
                            console.log(`${this.id}, ${this.name}, ${this.salePrice}`)
                            return `${this.id}, ${this.name}, ${this.salePrice}`
                        }
                    }
                }
            }
*/

class Student {
    constructor(first, last, subject) {
        this.first = first;
        this.last = last;
        this.subject = subject;
    }

    getProfile() {
        return [this.first, this.last, this.subject]
    }
}

const student = new Student("Jonas", "Jonaitis", "JS");
// console.log(student);

class VipStudent extends Student {
    constructor(first, last, subject, status) {
        super(first, last, subject);
        this.status = status;
    }
}

const vipStudent = new VipStudent("Jonas", "Jonaitis", "JS", "Supervisor");
// console.log(vipStudent);
// console.log(vipStudent.getProfile());