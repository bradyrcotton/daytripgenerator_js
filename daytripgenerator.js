let destination = ["Fayetteville", "Rogers", "Springdale", "Huntsville"];
let restaurant = ["Taco Bell", "Chick-fil-a", "Sonic"];
let transportation = ["Car", "Uber", "Bus"];
let entertainment = ["The Movies", "The Mall", "The Lake"];


function GetRandomValueFromArray(array){

    let randomNumber= (Math.floor(Math.random() * array.length));
    return array[randomNumber];
 


}
let userDestination= GetRandomValueFromArray(destination);


function userInput (variable,array){

 let InitialInput =prompt("Are you happy with "+variable+ "? Enter: Yes or No");

 

        while(InitialInput != "Yes" && InitialInput !="yes" && InitialInput !="No" && InitialInput !="no"){ // if user input invalid answer it alerts them and re-prompts and continues until valid input 
        alert("Invalid Response: Please enter Yes or No");
        let newInput=prompt("Are you happy with "+variable+ "? Enter: Yes or No")
        InitialInput = newInput;
}
        if (InitialInput === "Yes" || InitialInput === "yes"){ //if yes returns choice
            return variable;
        }
        else if(InitialInput === "No" || InitialInput === "no"){  //if no 
            for (let i = "no"; InitialInput != "Complete"; i++){
            let newChoice = GetRandomValueFromArray(array);// re-randomizes  
            let newChoiceInput= prompt("How does " +newChoice+ " sound? Yes or No");  // prompts user again
                if (newChoiceInput=== "Yes" || newChoiceInput === "yes"){ // ends loop when user is ok with choice
                    return newChoice;
                       
               }     
               

            }
            
        }
        
            
}
let UserDestinationChoice = userInput(userDestination,destination);


let userRestaurant= GetRandomValueFromArray(restaurant);

let UserRestaurantChoice = userInput(userRestaurant,restaurant);


let userTransportation= GetRandomValueFromArray(transportation);

let UserTransportationChoice = userInput(userTransportation,transportation);


let userEntertainment= GetRandomValueFromArray(entertainment);

let UserEntertainmentChoice = userInput(userEntertainment,entertainment);

alert("Your day trip planning is complete! You are going to "+UserDestinationChoice+". You are going to eat at "+userRestaurant+". You are getting there by "+userTransportation+". And you are going to " +userEntertainment+".");

