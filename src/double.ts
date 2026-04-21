function double(n:number[]):number[]{
    let arrayt:number[] = []
    for (let i = 0; i < n.length; i++){
            arrayt.push(n[i]*2)
    }
    return arrayt
}
console.log(double([1,-2,3,-1,5]))