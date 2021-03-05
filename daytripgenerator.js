let destination = ["Fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["Movies", "Mall", "Fishing"];


function GetRandomValueFromArray(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    console.log(array[randomNumber]);
 


}
GetRandomValueFromArray(destination);
GetRandomValueFromArray(restaurant);
GetRandomValueFromArray(transportation);
GetRandomValueFromArray(entertainment);


