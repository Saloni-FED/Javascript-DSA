// Find median in a S2 array when every array is sorted
let M = 3;
let N = 3;
let matrix = [[1, 4, 9], [2, 5, 6],[3, 7, 8]];

// Upper bound
function upperBound(arr, target) {
  let low = 0;
  let ans = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low
}

// Logic to calculate numbers less than median 
function toCalLessThanMedian(mat , target){
    let total = 0;
    for(let i = 0 ; i < mat.length ; i++){
       total += upperBound(mat[i],target)  
    }
    return total;
}



// Binary Search logic 
function binarySearch(matrix , m , n){
    let low = matrix[0][0];
    let high = matrix[m - 1][n - 1];
    let req = Math.floor((n * m) / 2);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // ✅ fixed
        let countSmaller = toCalLessThanMedian(matrix, mid);
        if (countSmaller < req) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}


console.log(binarySearch(matrix, M,N))