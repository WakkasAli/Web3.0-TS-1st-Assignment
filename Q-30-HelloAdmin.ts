let usernames = ["admin", "Joy", "Adam","John","Kashi"];
//let numbers = [1, 3, 5];
//let result = true;
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] =="admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else{
        console.log("Hello"+ usernames[i]+", thank you for logging in again");
    }
}