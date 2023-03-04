const personMsg = "Eric";
/* 
Exercise1: Personal Message: Store a person’s name in a variable,
and print a message to that person. Your message should be 
simple, such as, “Hello Eric, would you like to learn some Python today?”
*/

let person_name = "Eric";

document.write(
  `Hello ${person_name}, would you like to learn some Python today?`
);
function greet2(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}

// const msg = greet("Hello", "would you like to learn some Python today?");
// msg(personMsg)