// Invite some people to dinner
let guest2 = ['Ali', 'Ahmed', 'Arsalan']

let Guestname = guest2[0]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[1]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[2]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[1]
console.log("\nSorry, " + Guestname + " can't make it to dinner.")

// Jack can't make it! Let's invite Gary instead.
delete(guest2[1])
guest2.splice(1, 2)

// console.log the invitations again.
Guestname = guest2[0]
console.log("\n" + Guestname + ", please come to dinner.")

Guestname = guest2[1]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[2]
console.log(Guestname + ", please come to dinner.")

// We got a bigger table, so let's add some more people to the list.
console.log("\nWe got a bigger table!")
guest2.splice(0, 1)
guest2.splice(2, 1)
guest2.push('elizabeth peratrovich')

Guestname = guest2[0]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[1]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[2]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[3]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[4]
console.log(Guestname + ", please come to dinner.")

Guestname = guest2[5]
console.log(Guestname + ", please come to dinner.")