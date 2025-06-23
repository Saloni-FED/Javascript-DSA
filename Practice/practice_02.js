// Maximum length subarray;
// let arr = [2,0,0,3]

// Sort an array O to 1 using Dutch Algo
// 0 to  low -1 = 0;
// Low to mid - 1 = 1;
// high + 1 to n-1 = 2

// let  nums = [2,0,2,1,1,0]
// function sortArray(arr){
//     let low = 0 ;
//     let mid = 0 ;
//     let high = arr.length - 1;
//     while(mid <= high){
//      if(arr[mid] == 0){
//         [arr[mid], arr[low]] = [arr[low],arr[mid]];
//         mid ++;
//         low ++
//      }
//      else if(arr[mid] == 1){
//         mid ++
//      }
//      else {
//         [arr[mid], arr[high]] = [arr[high], arr[mid]];
//         high --
//      }
//     }
//     return nums
// }

// console.log(sortArray(nums))

// el>n/2

// function elmNBytwo(arr) {
//   let ans = -1
//   let cnt = 0 ;
//   let el = 0;
//   for(let i = 0 ; i < arr.length ; i++){
//     if(cnt == 0){
//         el = arr[i];
//         cnt = 1
//     }
//     else if ( el == arr[i]) cnt ++
//     else cnt--
//   }
//   let count = 0;
//   for(let i = 0 ; i < arr.length;i++){
//     if(el == arr[i]){
//         count++
//     }
//   }
//   if(count > Math.floor(arr.length/2)){
//      return el;
//   }
//   return -1
// }
// let arr = [2, 2, 1, 1, 1, 2, 2];
// console.log(elmNBytwo(arr));

// Maximum sum
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function maxSum(arr) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let sum = 0;
//   let startIndex = -1;
//   let endIndex = -1;
//   let start = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (sum == 0) {
//       start = i;
//     }
//     sum += arr[i];

//     if (sum > max) {
//       max = sum;
//       startIndex = start;
//       endIndex = i;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return [startIndex, endIndex];
// }
// let subArr = (maxSum(arr));

// for(let i = subArr[0]; i <= subArr[1]; i++ ){
//     console.log(arr[i])
// }

// Rearrange Negative and Positive
function rearrange(arr , n){
  let pos = [];
  let neg = [];
  let temp = []
  for(let i = 0 ; i < n ; i++){
    if(arr[i] < 0){
      neg.push(arr[i])
    }
    else{
      pos.push(arr[i])
    }
  }

  for(let i = 0 ; i < pos.length ; i++){
    arr[2 * i] = pos[i]
    arr[2*i + 1] = neg[i]
  }
  console.log(arr)
  
}
let arr = [1,2,-4,-5]
let n = 4

console.log(rearrange(arr ,n))