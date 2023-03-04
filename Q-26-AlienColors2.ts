var alien_color="green";
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points
if(alien_color=="green"){
    console.log('You have just earned 5 points');
    
}
    else
    {
        console.log('You have just earned 10 points');
    }
    //Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if(alien_color!="yellow"){
    console.log(true);
}
else{
    console.log(false);
}
if(alien_color=="red"){
    console.log(false);
}
else{
    console.log(true);
}