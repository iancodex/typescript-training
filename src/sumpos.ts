function sompos(n:number[]):number{
    let sum = 0;

    for(let i = 0; i < n.length; i++){
        if (n[i]>0){
            sum += n[i]
        }
    }
    return sum
}
console.log(sompos([1,-2,3,-1,5]))