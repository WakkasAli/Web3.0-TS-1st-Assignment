let guest3 = ['guido van rossum', 'jack turner', 'lynn hill']

let gname = guest3[0]
console.log(gname + ", please come to dinner.")

gname = guest3[1]
console.log(gname + ", please come to dinner.")

gname = guest3[2]
console.log(gname + ", please come to dinner.")

gname = guest3[1]
console.log("\nSorry, " + gname + " can't make it to dinner.")

// Jack can't make it! Let's invite Gary instead.
delete(guest3[1])
guest3.push('gary snyder')

//console.log the invitations again.
gname = guest3[0]
console.log("\n" + gname + ", please come to dinner.")

gname = guest3[1]
console.log(gname + ", please come to dinner.")

gname = guest3[2]
console.log(gname + ", please come to dinner.")

// We got a bigger table, so let's add some more people to the list.
console.log("\nWe got a bigger table!")
guest3.push( 'frida kahlo')
guest3.push( 'reinhold messner')
guest3.splice(1,2)

gname = guest3[0]
console.log(gname + ", please come to dinner.")

gname = guest3[1]
console.log(gname + ", please come to dinner.")

gname = guest3[2]
console.log(gname + ", please come to dinner.")

gname = guest3[3]
console.log(gname + ", please come to dinner.")

gname = guest3[4]
console.log(gname + ", please come to dinner.")

gname = guest3[5]
console.log(gname + ", please come to dinner.")

// Oh no, the table won't arrive on time!
console.log("\nSorry, we can only invite two people to dinner.")

let gname1 = guest3.pop()
console.log("Sorry, " + gname1 + " there's no room at the table.")

gname1 = guest3.pop()
console.log("Sorry, " + gname1 + " there's no room at the table.")

gname1 = guest3.pop()
console.log("Sorry, " + gname1 + " there's no room at the table.")

gname1 = guest3.pop()
console.log("Sorry, " + gname1 + " there's no room at the table.")

//There should be two people left. Let's invite them.
gname = guest3[0]
console.log(gname + ", please come to dinner.")

gname = guest3[1]
console.log(gname + ", please come to dinner.")

// Empty out the list.
delete(guest3[0])
delete(guest3[0])

// Prove the list is empty.
console.log(guest3)