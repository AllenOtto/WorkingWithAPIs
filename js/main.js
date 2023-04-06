
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

// document.querySelector('button').addEventListener('click', apod);

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

// Near Earth Objects

// document.querySelector('button').addEventListener('click', nearEarthObjects);

function nearEarthObjects() {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            console.log(data.near_earth_objects)
        })
        .catch(err => {
            console.log("Error: " + err);
        });
}

// Asteroid data

document.querySelector('button').addEventListener('click', browseAsteroidData);

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

// Covid Injection Information

function covidVaccinatInfo() {
    fetch("https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY")
}






























