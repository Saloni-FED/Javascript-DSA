let  N = 4
let boards = [5, 5, 5, 5]
let k = 2


function paintersProblem (time , k , arr){
   let cnt = 1 ;
   let sum = 0;
   for(let i = 0 ; i < arr.length ; i++){
      if(sum + arr[i] > time){
        cnt = 1;
        sum = arr[i];
      }
      else{
        sum += arr[i];
        cnt+= 1;
      }

   }
   if(sum <= time) return true
}

console.log(paintersProblem(60, 2 , [5, 5, 5, 5]))