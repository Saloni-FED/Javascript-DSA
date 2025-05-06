let N = 5
let a = [3,5,1]
let   k = 3

function splitArray(sum , split , a){
     let init = 0;
     let cnt = 1;
     for(let i = 0 ; i < a.length ; i++){
        if(a[i] + init >= sum){
            cnt = 1;
            init = a[i];
        }
        else {
            cnt+= 1;
            init += a[i];
        }
     }
     if(cnt  <= sum) return true;
     else {
        return false;
     }

}

console.log(splitArray(5,3 , a))