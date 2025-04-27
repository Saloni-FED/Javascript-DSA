
// Aggressive cow problem

let N = 6
let  k = 4
let arr = [0,3,4,7,10,9];

arr.sort((a,b)=> a-b);

let mx = Math.max(...arr)
let mn = Math.min(...arr)


function isPossible (k , arr , mid){
    let cnt = 1
    let lastOccur = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] - lastOccur >= mid ){
            cnt++;
            lastOccur = arr[i]
        }
        if(cnt >= k) return true;

    }
    return false;
}
let low = 0 
let high = arr.length - 1;

while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(isPossible(k , arr , mid)){
        low = mid + 1
    }
    else{
        high = mid - 1;
    }; 
   console.log(high);
}