fetch ('https://www.balldontlie.io/api/v1/players')

    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.data[0])
        console.log(data.data[11].height_feet)
    });


let person = "Kelvin";

var people = [person, "George", "Elmer"];

var food = {favorite: "tacos", american: "burgers", mexican: "Tortas"}
