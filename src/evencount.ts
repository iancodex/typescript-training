function even(n:number[]):number{
    let even = 0;

    for(let i = 0;i < n.length;i++){
        if (n[i] % 2 === 0){
            even ++
        }
    }
    return even   
}
console.log(even([1,2,3,4,5,6]))