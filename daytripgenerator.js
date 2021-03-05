let destination = ["Fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["Movies", "Mall", "Fishing"];


function GetRandomValueFromArray(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    return array[randomNumber];
 


}
userDestination= GetRandomValueFromArray(destination);


let userDestinationInput= prompt("Are you happy with the destination "+userDestination+ "? Enter: Yes or No");
        if (userDestinationInput === "Yes" || userDestinationInput === "yes"){
             userDestinationInput = "Complete";
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
userRestaurant= GetRandomValueFromArray(restaurant);

let userRestaurantInput= prompt("Are you happy with the restaurant "+userRestaurant+ "? Enter: Yes or No");
        if (userRestaurantInput === "Yes" || userRestaurantInput === "yes"){
             uuserRestaurantInput = "Comlete";
        }
        
        else if(userRestaurantInput === "No" || userRestaurantInput === "no"){
            for (let i = 0; userRestaurantInput != "Complete"; i++){
            let newRestaurant = GetRandomValueFromArray(restaurant);
            let newRestaurantInput= prompt("How does " +newRestaurant+ " sound? Yes or No");  
                if (newRestaurantInput=== "Yes" || newRestaurantInput === "yes"){ 
                    userRestaurantInput = "Complete";
                       
               }     
        }
        }

           console.log(userRestaurantInput);
userTransportation= GetRandomValueFromArray(transportation);
userEntertainment= GetRandomValueFromArray(entertainment);