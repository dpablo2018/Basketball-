fetch ('https://www.balldontlie.io/api/v1/players') // Fetches the api

    .then(response => response.json()) // We call to the object response to get the data 
    .then(data => { //
        console.log(data) // Print data to console 
        console.log(data.data[0]) // The .data goes down the array and goes to the 0 element of the array 
        console.log(data.data[11].height_feet) // The .data goes down the array to the 11th element and goes down  a different array again to the data about height feet
    });


let person = "Kelvin";

var people = [person, "George", "Elmer"];

var food = {favorite: "tacos", american: "burgers", mexican: "Tortas"}

