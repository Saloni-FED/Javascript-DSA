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
// let strs = ["flower", "flow", "flight"];
// if (strs.length === 0) {
//     console.log("");
// } else {
//     let st = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         let char = strs[0][i];
//         // Check all other strings
//         for (let j = 1; j < strs.length; j++) {
//             console.log(strs[j][i], "letter to compare with char")
//             if (strs[j][i] !== char || i >= strs[j].length) {

//                 console.log(st); // Stop and print
//                 return;
//             }
//         }
//         st += char;
//     }
//     console.log(st); // Common prefix
// }

// Check two strings are isomorphic or not
// let s = "egg"
// let t = "add"

//     let ans = "";
//     for(let i = 0 ; i < s.length; i++){
//     console.log(s[i],"string of s ")
//        ans += s[i];
//     }
//     console.log(ans===t)

// Remove duplicate
// function removeDuplicates(arr){
//    let j = 0 ;
//    for(let i = 1 ; i < arr.length ; i++){
//       if(arr[i] !== arr[j]){
//          j++;
//          arr[j] = arr[i]
//       }

//    }
//    return j + 1;
// }
// const arr = [1, 1, 2, 2, 2, 3, 3];
// const k = removeDuplicates(arr);
// // console.log(k,"there are k elm")

// for(let i = 0 ; i < k ; i++){
//    console.log(arr[i])
// }

// Moves 0 To End

// function moveZeros(n, arr) {
//   let j = -1;
//   while (j < n) {
//     if (arr[j] === 0) {
//       break;
//     }
//     j++;
//   }
//   if (j === -1) return arr;

//   for (i = j + 1; i < arr.length; i++) {
//     if (arr[i] !== arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }
//   return arr;
// }
// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans);

// Union of two sorted arrays
// function findUnion(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let temp = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       if (temp.length === 0 || temp[temp.length - 1] !== arr1[i]) {
//         temp.push(arr1[i]);
//       }
//       i++;
//     } else {
//       if (temp.length === 0 ||  temp[temp.length - 1] !== arr2[j]) {
//         temp.push(arr2[j]);
//       }
//       j++;
//     }
//   }

//   while (j < arr2.length) {
//     if (temp.length === 0 || temp[temp.length - 1] !== arr2[j]) {
//       temp.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     if (temp.length === 0 || temp[temp.length - 1] !== arr1[i]) {
//       temp.push(arr1[i]);
//       i++;
//     }
//   }
//   return temp;
// }
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [2, 3, 4, 4, 5, 11, 12];
// const union = findUnion(arr1, arr2);
// console.log(union);

// Max consecutive one
// function maxi(n1, n2) {
//   if (n1 > n2) {
//     return n1;
//   } else {
//     return n2;
//   }
// }
// function findMaxCons(arr) {
//   let max = 0;
//   cnt = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       cnt++;
//       max = maxi(max, cnt);
//     } else {
//       cnt = 0;
//     }
//   }
//   return max;
// }
// prices = [1, 1, 0, 1, 1, 1];
// let max = findMaxCons(prices);
// console.log(max);

// Get longgest subarray with sum k
// function getLongestSubarray(a , k){
//    let maxLen = 0;
//    let sum = 0;
//    let mpp = new Map()
//    for(let i = 0 ; i < a.length; i++){
//       sum += a[i];
//       if(sum == k){
//          maxLen = Math.max(maxLen , i+1);
//       }
//       let rem = k - sum;
//       if(mpp.has(rem)){
//          let len = i - mpp.get(rem);
//          maxLen= (len , maxLen)
//       }

//       if(!mpp.has(sum)){
//          mpp.set(sum, i)
//       }
//    }
//    return maxLen
// }
// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);

// Two sum problem
// function twoSum (n , arr , target){
//    let mpp = new Map();
//    let ans = [];
//    for(let i = 0 ; i < arr.length ; i++){
//       let rem = target - arr[i];
//       if(mpp.has(rem)){
//             ans.push([rem , arr[i]])
//       }
//       mpp.set(arr[i], i);

//    }
//    return ans
// }
// let n = 5;
// let arr = [2, 6, 5, 8, 11];
// let target = 14;
// let ans = twoSum(n, arr, target);
// console.log(ans)


// Find mex value 
let arr2 = [1,0,2]

let start = 0 ;
let end = Math.max(...arr2) + 1
console.log(end,"end is here")
let num = -1
for(let i = start ; i <= end ; i++){
   if(!arr2.includes(i)){
       num = i
       
       break
   }
}
console.log(num , "num is here")