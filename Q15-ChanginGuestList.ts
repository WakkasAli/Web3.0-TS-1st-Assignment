 let guest1 = ['Irham', 'Jalil', 'Attaullah']

Gname = guest1[0]
console.log(Gname + ", please come to dinner.")

Gname = guest1[1]
console.log(Gname + ", please come to dinner.")

Gname = guest1[2]
console.log(Gname + ", please come to dinner.")

Gname = guest1[0]
console.log("\nSorry, " + Gname + " can't make it to dinner.")

// Jack can't make it! Let's invite Gary instead.
delete(guest1[0])
guest1.splice(1, 2)

// console.log the invitations again.
Gname = guest1[0]

console.log("\n" + Gname + ", please come to dinner.")

Gname = guest1[1]
console.log(Gname + ", please come to dinner.")

Gname = guest1[2]
console.log(Gname + ", please come to dinner.")

