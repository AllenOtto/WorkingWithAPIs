
// Working with APIs
// ==================

// The Cocktail DB Drinks API (thecocktaildb.com>api)

document.querySelector("button").addEventListener("click", getDrink)

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


document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    const drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {y
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

getDrink()

// NASA's Picture of the day API
// =============================

function apod() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.title
            document.querySelector("img").src = data.url
            document.querySelector('p').innerText = data.explanation
            document.querySelector('span').innerText = data.date
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}

apod();


































