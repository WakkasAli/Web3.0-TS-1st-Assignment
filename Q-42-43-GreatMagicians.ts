let magicianCopy = [...magician];

function make_great(person) {
  return person.map((obj) => {
    return 'Great ' + obj;
  });
}

magicianCopy = make_great(magicianCopy);

console.log(`Magicians New Copy List  => `, magicianCopy, `\n`);
show_magicians(magicianCopy);

console.log('\n\t===x=== Exercise Point 43 (Unchanged Magicians) ===x===\n');

console.log(`Magicians Actual List from show_magicians function.\n`);
show_magicians(magician);

console.log(`\nMagicians Modified List from show_magicians function.\n`);
show_magicians(magicianCopy);