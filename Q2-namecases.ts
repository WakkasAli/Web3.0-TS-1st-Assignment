const person = "Wakkas Ali";

function greet1(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}

const greetAsk1 = greet1("Hello", "would you like to learn some Python today?");
greetAsk1(person.toLowerCase())
greetAsk1(person.toUpperCase())

const titleCaseName = person.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
greetAsk1(titleCaseName)