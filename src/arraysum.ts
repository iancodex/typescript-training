function sumarrays(num:number[]):number{
    let sum:number = 0 
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum
}
console.log(sumarrays([1,2,3,4,5]))