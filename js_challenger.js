/******************************************Sum Two Numbers ************************************************************/
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function sumTwoNumbers(a,b){
    return a + b;
}
console.log(sumTwoNumbers(25,80))

/*********************************************Comparison operators, strict equality ************************************/
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function comparisonOperators(a,b){
    return a === b;
}
console.log(comparisonOperators(8,'8'))

/*********************************************Get type of value********************************************************/
// Write a function that takes a value as argument
// Return the type of the value
function getTyope(a){

    return typeof a;
}
console.log(getTyope(['a','b','c']))

/*********************************************Get nth character of string *********************************************/
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function getNCharacter(a,n){

    return a[n - 1]; 
}
console.log(getNCharacter("Enrique",3))

/*********************************************Remove first n characters of string *************************************/
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function removeFirstNCharacters(a){

    return a.slice(2); 
}
console.log(removeFirstNCharacters('Enrique'))

/*******************************************Get last n characters of string *******************************************/
function getLastNCharacters(str)
{
    return str.slice(-3);
}
console.log(getLastNCharacters('Enrique'))
/********************************************* */

