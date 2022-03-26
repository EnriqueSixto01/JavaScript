<img  src='Logo.png' height='120px'>
<table width="100%" style='table-layout:fixed;'>
</table>

# Variables

## Comment your JS code
There is two ways to comment your code:
* Line for line
    * //    
* A code Block
    * /* */

---

## Declare JS Variables
JS provides 8 diferents _data types_ which are: `undefned`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` and `object`. _Variables allow computers to store and manipulate data in a dynamic fashion_

We tell JS to create or declare a variable by putting the keyword `var`. _Variable names can be made up of numbers, letters, $_ or _underscore_ , but they can never begin with _a number or special characters_.
    
***

## Storing values with the assigment operator
In JS we can store a value in a variable with the assignment operator `"="` 
```javascript
var myVariable = 5;
```
>Note: If there are some calculations to the right of the `"="`, those are performed before the value is assigned to the variable on the left of the operator.
---
## Assigning the value of one variable to another
We can assign the value of a variable declared previusly to another variable using the assinment operator `=`.
```javascript
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```
***
## Initializing Variables with the assignment Operator
It's very common and the best practice to initialize a variable with a initial value in the same line as it's declared.
```javascript
var myVar = 0;
```
***
## Declare String Variables
A string is a series of zero or more characters enclosed in single `('')` or doubles `("")` quiotes. We declared a string as follows:
```javascript
var myName = "Enrique";
var myLastName = 'Sixto';
```
## Understanding Unitialized Variables
* When JS variables are declared, they have an initial value of **undefined**.
* If you do a mathematical operation on an undefined variable your result will be **_NaN_** which means `'Not a Number'`.
* If tou concatenate a string whit an undefined variable, you will get a literal string of `undefined`
***
## Understanding Case Sensitivity in Variables
In JS all variables and function names are case sensitive. This means that capitalization matters.

*`MYVAR`* isn't the same as *`MyVar`* or *`myvar`* .

The best practice is write variable names in *'camelCase'*

```javascript
var someVariable;
```
---
## Explore Diferences Between the *var* and *let* keyword
One of the biggest problems with declaring variables with the *`var`* keyword is that it can easily overwrite those variables, so this might cause problems to your code. If you accdidentally overwrite a variable that you had previously declared with other value, this will have that new value, because `var` have a global scope.

If you declare two variables with the same name and the *`let`* keyword, it results in a error because unlike `var` keyword where you can name two variables with the same name, with `let` keyword that isn't allowed, you just can have an only variable name with `let` keyword.
```javascript
let name = "Enrique";  
let name = "Daniel";
//Above output will be an error
```
---
