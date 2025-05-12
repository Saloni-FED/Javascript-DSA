let N = 3
 let M = 4
 let target = 8
 let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]


function isPresent(arr,tar){
    let low = 0 ; 
    let high = arr.length - 1;
  while(low <= high){
  let mid = Math.floor((low + high)/2);
  if(arr[mid] === tar) {
    console.log(mid,"mid is here")
   return mid;
  }
  else if(arr[mid] > tar){
    high = mid - 1;
  }
  else{
    low = mid + 1;
  }
  }
  return false;
}

function TwoDSearch(mat , target, n ,m ){
   for(let i = 0 ; i < n ; i++){
    let ans = isPresent(mat[i], target)
     if(ans != false){
        return [i+1, ans + 1]
     }
   }

   return false
}


console.log(TwoDSearch(mat , target, N ,M ))