let magician = ["Kim", "Harry", "Nick"];

console.log(`Magicians List.\n`);

function show_magicians(person) {
  person.forEach((obj) => {
    console.log(`${obj}`);
  });
}
show_magicians(magician);