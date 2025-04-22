// var largestOddNumber = function(num) {
//     for(let i = num.length - 1 ; i >= 0 ; i-- ){
//         if(!Number(num[i] % 2 === 0)){
//             return num.slice(0,i+1);
//         }
//     }
//     return " "

// }
// console.log(largestOddNumber("35427"))



// Largest Common Prefix 
let strs = ["flower", "flow", "flight"];
if (strs.length === 0) {
    console.log("");
} else {
    let st = "";
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        // Check all other strings
        for (let j = 1; j < strs.length; j++) {
            console.log(strs[j][i], "letter to compare with char")
            if (strs[j][i] !== char || i >= strs[j].length) {
                
                console.log(st); // Stop and print
                return;
            }
        }
        st += char;
    }
    console.log(st); // Common prefix
}
