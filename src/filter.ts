function filter_(n:number[]):number[]{
    let arrayt:number[] = []
    for (let i = 0; i < n.length; i++){
        if (n[i] > 0){
            arrayt.push(n[i])
        }
    }
    return arrayt
}
console.log(filter_([1,-2,3,-1,5]))