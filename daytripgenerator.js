let destination = ["Fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["Movies", "Mall", "Fishing"];


function GetRandomValueFromArray(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    return array[randomNumber];
 


}
userDestination= GetRandomValueFromArray(destination);
userRestaurant= GetRandomValueFromArray(restaurant);
userTransportation= GetRandomValueFromArray(transportation);
userEntertainment= GetRandomValueFromArray(entertainment);

let userDestinationInput= prompt("Are you happy with the destination "+userDestination+ "? Enter: Yes or No");
        if (userDestinationInput === "Yes" || userDestinationInput === "yes"){
             userDestinationInput = "Comlete";
        }
        else if(userDestinationInput === "No" || userDestinationInput === "no"){
            for (let i = "no"; userDestinationInput != "Complete"; i++){
            let newDestination = GetRandomValueFromArray(destination);
            let newDestinationInput= prompt("How does " +newDestination+ " sound? Yes or No");  
                if (newDestinationInput=== "Yes" || newDestinationInput === "yes"){ 
                    userDestinationInput = "Complete";
                       
               }     
        }
    }

           console.log(userDestinationInput);