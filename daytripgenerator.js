let destination = ["fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["Movies", "Mall", "Fishing"];


function dayTrip(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    console.log(array[randomNumber]);
 


}
dayTrip(destination);
dayTrip(restaurant);
dayTrip(transportation);
dayTrip(entertainment);