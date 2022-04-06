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
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function getLastNCharacters(str)
{
    return str.slice(-3);
}
console.log(getLastNCharacters('Enrique'))
/******************************************Get first n characters of string*******************************************/
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function getFirstNCharacters(a){
    return a.slice(0,3)
}
console.log(getFirstNCharacters("Enrique"))
/******************************************Extract first half of string***********************************************/
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function extractFirstHalf(a){
    return a.slice(0, a.length / 2);
 }
 console.log(extractFirstHalf("Enrique"))

 /******************************************Remove last n characters of string ***************************************/
 // Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
 function removeLastNCharacters(a){
     return a.slice(0,-3)
 }
 console.log(removeLastNCharacters("Enrique"))

 /******************************************Return the percentage of a number******************************************/
 // Write a function that takes two numbers (a and b) as argument
// Return b percent of a
 function percentage(a,b){
    return a*(b/100)
 }

 console.log(percentage(125,25))

 /*******************************************Basic JavaScript math operators******************************************/
 // Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
 function operatorsBasic(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
    //return Math.pow(((((a+b)-c)*d)/e),f)
 }
 console.log(operatorsBasic(5,7,3,6,1,2))

 /*******************************************How many times does a character occur?************************************/
 // Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function ocurrences(a,b){
    let count = 0;
    for(let i=0; i<a.length;i++){
     if(a[i] === b )
        count++
    }
    return count

    //return b.split(a).length - 1 //lo mismo de arriba pero en una sola linea
}
console.log(ocurrences("Enrique Sixto",'i'))
/************************************************Check if a number is a whole number***********************************/
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function wholeNumber(a){
    if(a - Math.floor(a) === 0) return true
    else
        return false
}
console.log(wholeNumber(10.48))
/******************************************Multiplication, division, and comparison operators*************************/
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function comparisonOperators(a, b)
{
    if(a < b) return a/b
    else
        return a*b
    // return a < b ? a / b : a * b
}
console.log(comparisonOperators(8,20))
/***************************************Check whether a string contains another string and concatenate*****************/
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation