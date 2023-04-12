
// Working with APIs
// ==================

// The Cocktail DB Drinks API (thecocktaildb.com>api)

// document.querySelector("button").addEventListener("click", getDrink)

function getDrink() {
    let someDrink = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${someDrink}`)
        .then(res => res.json())
        .then(data => {
            let count = data.drinks.length
            let randDrink = data.drinks[Math.floor(Math.random() * count )]
            console.log(data)
            document.querySelector("span").innerText = randDrink.strCategory;
            document.querySelector('h2').innerText =  randDrink.strDrink;
            document.querySelector('img').src = randDrink.strDrinkThumb;
            document.querySelector("p").innerText = randDrink.strInstructions;
    })
        .catch(err => {
        console.log("Error: " + err);
    });
}

// document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    const drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            let count = Math.floor(Math.random() * data.drinks.length)
            console.log(data)
            document.querySelector('h2').innerText = data.drinks[count].strDrink
            document.querySelector('img').src = data.drinks[count].strDrinkThumb
            document.querySelector('p').innerText = data.drinks[count].strInstructions
            document.querySelector('span').innerText = data.drinks[count].strCategory
        })
        .catch(err => {
            console.log("Error: " + err)
        });
}

// NASA's Picture of the day API
// =============================

// setInterval(apod, 10000)

function apod() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.url
            document.querySelector('p').innerText = data.explanation
            document.querySelector('span').innerText = data.date
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}


// Near Earth Objects

// document.querySelector('button').addEventListener('click', nearEarthObjects);

function nearEarthObjects() {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            console.log(data.near_earth_objects);
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}

// Asteroid data

// document.querySelector('button').addEventListener('click', browseAsteroidData);

function browseAsteroidData() {
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let rand = Math.floor(Math.random() * data.near_earth_objects.length)
            document.querySelector("h2").innerText = data.near_earth_objects[rand].name;
            document.querySelector("span").innerText = data.near_earth_objects[rand].close_approach_data[0].miss_distance.kilometers;
            document.querySelector("p").innerText = data.near_earth_objects[rand].close_approach_data[0].relative_velocity.kilometers_per_second;
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}


// setInterval(someFunc, 1000)

function someFunc() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552')
        .then(res => res.json())
        .then(jsonData => {
            console.log(jsonData.ingredients[0]);
            const ing = jsonData.ingredients[0];
            document.querySelector('p').innerText = ing.strDescription;
            document.querySelector('h2').innerText = ing.strIngredient;
        })
        .catch(err => {
            console.log('Error' + err);
        });
}

// Create Slideshow with returned JSON data
// document.querySelector('button').addEventListener(setInterval(getDrinks, 10000))


function getDrinks() {
    const drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(jsonData => {
            console.log(jsonData);
            let count = Math.floor(Math.random() * jsonData.drinks.length);
            document.querySelector('img').src = jsonData.drinks[count].strDrinkThumb;
            document.querySelector('span').innerText = jsonData.drinks[count].strInstructions;
            document.querySelector('h2').innerText = jsonData.drinks[count].strDrink;
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}


class NetflixShow {
    constructor(title, duration, starring, genre) {
        this.title = title;
        this.duration = duration;
        this.starring = starring ;
        this.genre = genre;
    }

    playThemeSong() {
        console.log("Enter at your own peril. Past the bolted doors where impossible things may happen that the world's never seen before...");
    }

    startMovie() {
        console.log("Hey Deedee!! What are you doing in my labooratory!");
    }

    endMovie() {
        console.log("Play ending theme song")
    }
}

const show1 = new NetflixShow("Desperate Housewives", "50 mins", ['Bree', 'Lynette', 'Gabby', 'Susan'], "drama");

// show1.playThemeSong()
// console.log(show1.starring[0], show1.starring[3])


// setInterval(getDrinks, 15000)

// Get elements in fetched array to run in carousel sequentially

// document.querySelector('button').addEventListener('click', setInterval(getDrinks(), 10000));

// function getDrinks() {
//     let drink = document.querySelector('input').value

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//         .then(res => res.json())
//         .then(jsonData => {
//             document.querySelector('img').src = jsonData.drinks.strDrinkThumb;
//         })
//         .catch(err => {
//             console.log("Error: " + err);
//         });
// }

// function fixTheMeerkat(arr) {
//  //your code here
//   let head = arr.pop()
//   let tail = arr.shift()
//   arr.push(tail)
//   arr.unshift(head)
  
//   return arr
// }


// var countSheep = function (num){
//   //your code here
//   let str = "";
  
//   for(let i = 1; i < num+1; i++) {
//     str += `${i} sleep...`;
//   }
  
//   return str
// }

// console.log(countSheep(3))


// function updateLight(current) {
//   let output
  
//   //your code here!
//   if(current === 'green') {
//     output = 'yellow'
//   } else if(current === 'yellow') {
//     output = 'red'
//   } else if(current === 'red') {
//     output = 'green'
//   }
  
//   return output
// }

// console.log(updateLight('yellow'))

// Create a button that adds 1 to a botScore stored in localStorage

// if(!localStorage.getItem('botScore')) {
//     localStorage.setItem('botScore', 0)
//     console.log("set now")
// } else {
//     console.log('available')
// }

// // localStorage.removeItem('botScore')

// document.querySelector('button').addEventListener('click', addOne)

// function addOne() {
//     let value = +localStorage.getItem('botScore')
//     value += 1

//     localStorage.setItem('botScore', value)

//     document.querySelector("h2").innerText = value
// }


// ************* Animal Feast ***********

/*

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

*/


// function feast(beast, dish) {
// //your function here
  
//   let firstLetterBeast = beast[0]
//   let lastLetterBeast = beast[beast.length - 1]
//   let firstLetterDish = dish[0]
//   let lastLetterDish = dish[dish.length - 1]
  
//   if(firstLetterBeast === firstLetterDish & lastLetterBeast === lastLetterDish) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(feast("chickadee", "chocolate cake"))

// **************************************

document.querySelector("button").addEventListener('click', playGame)

function playGame() {
    fetch(`https://deckofcardsapi.com/api/deck/61x7o1c2fgg6/draw/?count=2`)
        .then(res => res.json())
        .then(jsonData => {
            // document.querySelector("img").src = jsonData.cards[0].images.svg
            // document.querySelector("h2").innerText = jsonData.cards[0].value
            console.log(jsonData)
            console.log(jsonData.cards[0].image)
            console.log(jsonData.cards[1].image)
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}





























