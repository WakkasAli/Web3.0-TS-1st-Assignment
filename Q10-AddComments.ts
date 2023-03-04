const person1 = "M Adeel Chaudhary";

// ## A function returns function with greeting and message set and function takes a name parameter

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`);
    }
}

const greetAsk = greet("Hello", "would you like to learn some Python today?");
greetAsk(person1);



const person2 = " \t WAKKAS ALI \n ";
console.log(person2)
/*
  ## Trimed whitespaces using trim method
*/
