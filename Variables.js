/***********************************Declarando Variables y asignandoles un valor********************/
var myName =  "Enrique";
var numero = 26;
var booleano = true;

/***********************************Assigning the Value of one variable to another******************/
var x;
x = 10;
var y;
y = x;
console.log(y);
/***********************************Understanding Uninitialized Variables***************************/
// Only change code below this line
var a;
var b = 10;
var c = "I am";
var d;
// Only change code above this line 

a = a + 1;
b = b + 5;
c = c + " String!";
d = d + " Variable"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
/****************************************Diference between the var an let keyword ***************************/
//Error
//let name = "Enrique";
//let name = "Yio";

//forma correcta
let name = "Enrique";
let lastName ="Sixto";
/*********************************Declare a Read-Only variable with the const keyword************************/

const FCC = "freeCodeCamp";      //Declaramos una variable constante, lo que significa que no se puede reasignar su valor
let fact = "is cool!";           //Declaramos una variable let que mas adelante cambiará de valor
fact = "is awesome!";
console.log(FCC, fact);

/**********************************Arithmetics Operartors****************************************************/

const suma = 5 + 5;
const resta = 10 - 2.6;
const multiplicacion = 9 * 6;
const division = 54 / 12;

/***************************************Escaping Literal Quotes in Strings **********************************/
const myString = "Enrique said, \"He was going to clean his bedroom\".";

console.group(myString);
/***************************************Quoting Strings with Single Quotes***********************************/
const myStr = "href=\"http://www.example.com\" target=\"_blank\">Link";
console.log(myStr);
const myStr1 = 'href="http://www.example.com" target="_blank">Link"';
console.log(myStr1);
/*****************************************Escape Sequences in Strings***************************************/

const seq = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(seq);