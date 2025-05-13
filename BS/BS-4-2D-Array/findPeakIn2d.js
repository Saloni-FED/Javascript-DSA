let M = 3
let N = 3
let mat = [[10,20,15],[21,30,14],[7,16,32]]


function maxEl (arr , col , n , m){
    let val = -1;
    let index = -1;
    for(let i = 0 ; i < n ; i++){
        if(arr[i][col] > val){
            val = arr[i][col];
            index = i;
        }
    }
    return index ;
}
function peakEl(mat, n , m){
   let low = 0 ;
   let high = n - 1;
   while(low < high){
    let mid = Math.floor((low + high) / 2);
    let maxRowInd = maxEl(mat , mid , n , m );
    let left = mid - 1 >= 0 ? mat[maxRowInd][mid -1] : -1;
    let right = mid + 1  < m ? mat[maxRowInd][mid + 1] : -1;
    if(mat[maxRowInd][mid] > left && mat[maxRowInd][mid] > right){
        return [maxRowInd, mid]
    }
    else if (left < mat[maxRowInd][mid]){
   low = mid + 1;
    }
    else{
        high = mid - 1;
    }
    
   }
   return [-1,-1]
}

console.log(peakEl(mat ,N,M))