let n = 4;
let m = 2;
let arr = [12, 34, 67, 90];

function IsTrue(arr, booksRequired, studentAllocation) {
    let curr = 0;
    let totalDays = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > booksRequired) return false;

        if (curr + arr[i] > booksRequired) {
            totalDays += 1;
            curr = arr[i];
        } else {
            curr += arr[i];
        }
    }

    return totalDays <= studentAllocation;
}

function BookAllocation(arr, m) {
    let low = Math.max(...arr);
    let high = arr.reduce((acc, curr) => acc + curr, 0);
    let ans = -1;

   while(low <= high){
    let mid = Math.floor((low + high)/2);
    let isPre = IsTrue(arr,mid , m);
    if(isPre){
        ans = mid;
        high = mid - 1;
    }
    else{
        low = mid + 1
    }
   }
    return ans
}

console.log(BookAllocation(arr, m));  
