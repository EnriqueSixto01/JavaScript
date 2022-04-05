//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as 
//the input. Return the result rounded to two decimals.
//con el metodo .toFixed(digitos) podemos indicar cuantos digitos despues del punto decimal queremos devolver  
function squareAare(A)
{
    /*let r = (A*4) / (2*Math.PI)
    let l = (r * r) 
    return Math.round(l * 100) / 100;*/
    return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100  //lo mismo que lo anterior pero en una sola linea
}
console.log(squareAare(2))
console.log(squareAare(0))
console.log(squareAare(14.05))

/*******************************************************************************************************************/
//Your task is to make an algorithm that returns true if 'like' accounts for more than 5% of words in the array, 
//otherwise false (if no words are spoken, return false also).
var evalLikes = function (words){
    
   
      var likeCount = 0;
      for(var i = 0; i< words.length; i++)
      {
        if(words[i].toLowerCase() == "like")
        {
          likeCount++;
        }
      }
      return (likeCount / words.length > 0.05);
      
    }

    console.log(evalLikes(['I','am','sooo','like','like','like','like']))
/*****************************************************************************************************/
//Take 2 strings s1 and s2 including only letters from 'a' to 'z'. Return a new sorted string, the longest possible, 
//containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let str = []
    let str3 =[]
    let u = s1.concat(s2).split("").sort()
    console.log(u)
    for(let i=0;i<u.length;i++){
        if(u[i + 1 ] === u[i]){
            str.push(u[i])
        }
    }
    return str

}



let str1 = "asghdhgggeydge"
let str2 = "mnlhnolhjh"

console.log(longest(str1,str2))
//console.log(str1.concat(str2).split(""))
//console.log(str1.concat(str2).split("").sort())
