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
function concatenateString(a,b){
    if(a.includes(b))
        return b + a
    else
        return a + b

}

console.log(concatenateString("Enrique","Sixto"))
console.log(concatenateString('lips', 's'))

/******************************************Round a number to 2 decimal places****************************************/
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundNumbre(a)
{
    return Math.round(a*100)/100
}
console.log(roundNumbre(2.1881881))

/******************************************Split a number into its digits *******************************************/
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function splitNumbers(a){
    return a.toString().split('').map(x => Number(x))
    
}

console.log(splitNumbers(931))

let a = 12
console.log(typeof(a + '')) //otra manera de convertir un INT a un STRING sin usar algun metodo.
console.log(Number('125'))  //convertir un STRING a un INT

/*********************************************Clear up the chaos behind these strings*********************************/
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function clear(a,b){
    let c =""
    d = b.replace('%','')
    e = a.replace('%','')
    for(let i=d.length; i>=0; i--)
    {   
        c+= d.charAt(i)
       
    }
    console.log(c)
   
    return e[0].toUpperCase() + e.slice(1) + c

    //otra solucion
    /*const func = x => x.replace('%','');
      const first = func(a);
      const second = func(b).split('').reverse().join('');
      return first.charAt(0).toUpperCase() + first.slice(1) + second; */
}

console.log(clear('java', 'tpi%rcs'))
console.log(clear('c%ountry', 'edis'))
console.log(clear('down', 'nw%ot'))

/*********************************************Return the next higher prime number**************************************/
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function esPrimo(numero) {
    if(numero === 0 || numero === 1 || numero === 4) return 'No es numero primo'
    for(let i= 2; i < numero / 2; i++)
    {
      if(numero % i === 0) 
        return esPrimo(numero + 1)
    }
    return numero

    //otra Solucion
    /*function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
            return num > 1;
    }
        let n = a;
        while (!isPrime(n)) n++;
        return n*/
  }

console.log(esPrimo(13))
console.log(esPrimo(1))