// // One

// class Pizza {
//     constructor(size, toppings, joint, price) {
//         this.size = size;
//         this.toppings = toppings;
//         this.joint = joint;
//         this.price = price;
//     }

//     speak() {
//         console.log(`Helloo! I'm from ${this.joint}`);
//     }
//     brag() {
//         console.log("No other pizza slaps like me");
//     }
//     run() {
//         console.log("I de ron like dis!");
//     }
// }

// let pizza1 = new Pizza("grand", "sauce", "Pizza Hut", "$20");
// console.log(pizza1.size)
// pizza1.speak()
// pizza1.run()

document.querySelector("button").addEventListener("click", getDrink)

function getDrink() {
    let someDrink = document.querySelector("input").value    

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${someDrink}`)
        .then(res => res.json())
        .then(data => {
        document.querySelector('h2').innerText =  data.drinks[0].strDrink;
        document.querySelector('img').src = data.drinks[0].strDrinkThumb;
        document.querySelector("p").innerText = data.drinks[0].strInstructions;
    })
        .catch(err => {
        console.log("Error: " + err);
    });
}
