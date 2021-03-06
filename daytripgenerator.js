let destination = ["Fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["Movies", "Mall", "Fishing"];


function GetRandomValueFromArray(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    return array[randomNumber];
 


}
let userDestination= GetRandomValueFromArray(destination);


function userInput (varible,array){

 let InitialInput =prompt("Are you happy with "+varible+ "? Enter: Yes or No");

 

        while(InitialInput != "Yes" && InitialInput !="yes" && InitialInput !="No" && InitialInput !="no"){
        alert("Invalid Response: Please enter Yes or No");
        let newInput=prompt("Are you happy with "+varible+ "? Enter: Yes or No")
        InitialInput = newInput;
}
        if (InitialInput === "Yes" || InitialInput === "yes"){
            InitialInput = "Complete";
        }
        else if(InitialInput === "No" || InitialInput === "no"){
            for (let i = "no"; InitialInput != "Complete"; i++){
            let newDestination = GetRandomValueFromArray(array);// re-randomizes  
            let newDestinationInput= prompt("How does " +newDestination+ " sound? Yes or No");  // prompts user again
                if (newDestinationInput=== "Yes" || newDestinationInput === "yes"){ // ends loop when user is ok with choice
                    InitialInput = "Complete";
                       
               }     
               

            }
            
        }
        
            return InitialInput;
}
let UserDestinationChoice = userInput(userDestination,destination);
console.log(UserDestinationChoice);

let userRestaurant= GetRandomValueFromArray(restaurant);

let UserRestaurantChoice = userInput(userRestaurant,restaurant);
console.log(UserRestaurantChoice);

let userTransportation= GetRandomValueFromArray(transportation);

let UserTransportationChoice = userInput(userTransportation,transportation);
console.log(UserTransportationChoice);




// userRestaurant= GetRandomValueFromArray(restaurant);

// let userRestaurantInput= prompt("Are you happy with the restaurant "+userRestaurant+ "? Enter: Yes or No");
//         if (userRestaurantInput === "Yes" || userRestaurantInput === "yes"){
//              userRestaurantInput = "Comlete";
//         }
        
//         else if(userRestaurantInput === "No" || userRestaurantInput === "no"){
//             for (let i = 0; userRestaurantInput != "Complete"; i++){
//             let newRestaurant = GetRandomValueFromArray(restaurant); // re-randomizes restaurant
//             let newRestaurantInput= prompt("How does " +newRestaurant+ " sound? Yes or No");  // prompts user again
//                 if (newRestaurantInput=== "Yes" || newRestaurantInput === "yes"){ 
//                     userRestaurantInput = "Complete"; // ends loop when user is ok with choice
                       
//                }     
//         }
//         }

//            console.log(userRestaurantInput);


// userTransportation= GetRandomValueFromArray(transportation);

// let userTransportationInput= prompt("Are you happy with the transportation "+userTransportation+ "? Enter: Yes or No");

            
//             // while(userTransportationInput !="Yes" || userTransportationInput != "yes" || userTransportationInput != "No" || userTransportationInput != "no"){
//             //     alert("Invalid Response Please Enter Yes or No");
//             // let userTransportationInput= prompt("Are you happy with the transportation "+userTransportation+ "? Enter: Yes or No");
//             // }

//         if (userTransportationInput === "Yes" || userTransportationInput === "yes"){
//              userTransportationInput = "Comlete";
//         }
        
        
//         else if(userTransportationInput === "No" || userTransportationInput === "no"){
//             for (let i = 0; userTransportationInput != "Complete"; i++){
//             let newTransportation = GetRandomValueFromArray(transportation); // re-randomizes Transportation
//             let newTransportationInput= prompt("How does " +newTransportation+ " sound? Yes or No");  // prompts user again
//                 if (newTransportationInput=== "Yes" || newTransportationInput === "yes"){ 
//                     userTransportationInput = "Complete"; // ends loop when user is ok with choice
                       
//                }     
//         }
//         }

//            console.log(userTransportationInput);

           
// userEntertainment= GetRandomValueFromArray(entertainment);

// let userEntertainmentInput= prompt("Are you happy with the entertainment "+userEntertainment+ "? Enter: Yes or No");
//         if (userEntertainmentInput === "Yes" || userEntertainmentInput === "yes"){
//              userEntertainmentInput = "Complete";
//         }
        
//         else if(userEntertainmentInput === "No" || userEntertainmentInput === "no"){
//             for (let i = 0; userEntertainmentInput != "Complete"; i++){
//             let newEntertainment = GetRandomValueFromArray(entertainment); // re-randomizes Entertainment
//             let newEntertainmentInput= prompt("How does " +newEntertainment+ " sound? Yes or No");  // prompts user again
//                 if (newEntertainmentInput=== "Yes" || newEntertainmentInput === "yes"){ 
//                     userEntertainmentInput = "Complete"; // ends loop when user is ok with choice
                       
//                }     
//         }
//         }

//            console.log(userEntertainmentInput);

