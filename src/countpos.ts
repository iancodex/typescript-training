// function contar(n3:number[]):number{
//     let cnt:number = 0;
//     for (let i = 0; i < n3.length; i++ ){
//         if (n3[i] > 0){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(contar([1,5,-3,-1,-3,5]))
function count(num_:number[]):number{
    let addict = 0;
    for (let i = 0; i < num_.length; i++){
        if (num_[i] > 0){
            addict++;
        }
    }
    return addict;
}
console.log(count([1,5,-3,-1,-3,5]))