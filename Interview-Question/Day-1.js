const num = [1,2,3];
const abc = num.reduce((item)=> item = 2)
console.log(abc)

// Explain map , reduce , filter 
// Explain what is json
// Explain async await
// Features of ES6
// What is temporal dead zone
// What is lexical scoping
// Type of nan
// local storage and session storage

var x = 10 ;
console.log(x++);
console.log(x)
console.log(typeof(NaN))


// Function that returns longest word in an array
let str = "salonii pandeyyy hai mera naam"
function longWord (x){
   let max = -1;
   let ch = x.split(' ');
   let word = '';
   console.log(ch)
   for(let i = 0 ; i < ch.length ; i++){
    if(ch[i].length > max){
        max = ch[i].length;
        word = ch[i];
    }

   }
return word;
}

console.log(longWord(str))

// Explain axios and fetch 
