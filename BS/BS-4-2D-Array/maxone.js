// My Brute force approach
// let n = 3
// let m = 3 
// let mat = [[1,1,1], [0,0,1],[0,0,0]]

// let max = 0;
// let row ;
// for(let i = 0 ; i < m; i++){
//     let cnt = 0;
//     for(let j = 0 ; j < m ;j++){
//         if(mat[i][j] === 1

//         )
//         {
//             cnt ++
//         }
//     }
//     if(cnt > max){
//         max = cnt;
//         row = i;
//     }

// }

// console.log(row,"Row is here")


// Optimal Approcah using Binary Search
function lowerBound(arr, key){
    let low = 0;
    let high = arr.length;
    let ans = -1;
    while(low <= high){
        let mid = Math.floor(low+high)/2;
        if(arr[mid] >= key){
            ans = mid ;
            high = mid -1
        }
        else{
            low = mid + 1
        }
    }
return ans;
}
let n = 3
let m = 3 
let mat = [[1,1,1], [0,0,1],[0,0,0]]

let max = 0;
let row ;
for(let i = 0 ; i < m; i++){
    let cnt = m - lowerBound(mat[i],1 )
    
    if(cnt > max){
        max = cnt;
        row = i;
    }

}

console.log(row)