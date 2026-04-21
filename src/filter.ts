function filter(n:number[]):number[]{
    let arrayt:number[] = []
    for (let i = 0; i < n.length; i++){
        if (n[i] > 0){
            arrayt.push(n[i])
        }
    }
    return arrayt
}
console.log(filter([1,-2,3,-1,5]))