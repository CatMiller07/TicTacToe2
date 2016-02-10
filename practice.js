/*Given a non-empty string like "Code"
  return a string like "CCoCodCode".
  
  stringSplosion("Code") - "CCoCodCode"
  stringSplosion("abc")  - "aabababc"
  stringSplosion("ab" )  - "aab"
  */

function stringSplosion(arg){
 var inStr = arg;
 var result = "";
    
     for (var ix=1; ix <= (inStr.length); ix++) {
         result += inStr.substring(0,ix);
     }
    return result;
}

function arrSplosion(arg){
    var result = [];
    
    for (var ix=0; ix < arg.length ; ix++) {
         result.push(arg[ix]);
         result.push(arg[ix]);
     }  
     return result;
}
/* 
  Write a function which takes 2 numbers, start and end, and adds all integers between the two to
  an array. Then return that array.
*/
function arrBuild(beg,end) {
    var result = [];
    
    for (var ix=beg; ix <= end ; ++ix ) {
         result.push(ix);

    }  
    return result;
}

/* Given an array of numbers, return the number if 9's in the array. */
function arrayCount9(arg){
    var cntr =0;
    for ( i=0; i <= arg.length; i++ ) {
         if (arg[i] === 9) {
             cntr ++;
         }
    }
    return cntr;
}
/* Given an array of numbers, return the number of whatever is in the second argument,n. */
function arrayCountN(arg, n){
    var cntr =0;
    for ( i=0; i <= arg.length; i++ ) {
         if (arg[i] === n) {
             cntr ++;
         }
    }
    return cntr;
}
/* Scar Face (sc) version of the prev function */
function arrayCountNsc(arg, n){
    var filtered = arg.filter(function(elem,index){
                    return elem === n;
    });
    
    return filtered.length;
}

/* Given an arry of strings, and a string str, return the
   number of times str can be found within the array.
*/
function arrayCountStr(arr,str){
    var cntr = 0;
    
    for (var i=0; i < arr.length; i++) {
        if ( arr[i].includes(str) >=0  ) {
            cntr++;
        }
    }
    return cntr;
}

/* Given an array of strings, write a function that
returns a new arry built from the old one but with
the string " for me to poop on" added at the end.
 ex. triumph(["hello","conan"]) -> ["hello for me to poop on",
                                    "connan for me to poop on"]
*/

function triumph(arr) {
  var newArr = [];
    
   for (var i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] + " for me to poop on") ;
   }
   return newArr;
}

/*Given a jQuery array of h1 elements, remove
all but the first word from the h1 element, enclose
that string in an h2 element, and append it after
the h1 element.
  Ex: ( <h2>"+$("h1").html()+"</h2>").insertAfter($("h1"))
  
function appendTojQArr(jqArr){
  var tex = "";
  var   
  
   for (var i= 0; i < jqArr.length; i++){
      tex = jqArr[i].htlm();    
   }
}



/* While loop examples...
*/

/* log all even numbers between 0 and 100 to the console
*/
var ctr = 0;
while ( ctr <= 100 ) {
   
    if ( ctr % 2 ===0 ) {
        console.log(ctr + " is an even number");
    }
    ctr++;
}