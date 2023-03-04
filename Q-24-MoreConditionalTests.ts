//Tests for equality and inequality with strings
var name2="zia khan";
if(name2=="kashif"){
    console.log(true);
}
else{
    console.log(false);
}
//Tests using the lower case function
if (name2 == name2.toLowerCase()){
    console.log("Lower Case");
}
else{
    console.log("Uper Case");
}
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var a =9;
var b=7;
if (a>b){
console.log(true)
}
else if(a<b){
    console.log(false)
}
else{
    console.log('equal')  
}
if(a==b){
    console.log('equal')  
}
else if(a<=b){
    console.log('a less then b')
}
else if(a>=b){
    console.log('a greater then b')
}
else{
    console.log('Not equal') 
}
//Tests using "and" and "or" operators
if(a==9 && b==10){
    console.log('true')
}
else{
    console.log('fasle')
}
if(a==9 || b==10){
    console.log('true')
}
else{
    console.log('fasle')
}
//Test whether an item is in a array
const nums = [ 1, 3, 5, 7];
if(nums.includes(3)){
    console.log("3 is in array");
}
if(!nums.includes(8)){
//Test whether an item is Not in a array
console.log("8 not is anarray");
}