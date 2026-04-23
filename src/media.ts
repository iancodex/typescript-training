function media(n:number[]):number{
    let sum = 0
    let counter = 0
    for(let i = 0; i<n.length; i++){
        sum += n[i]
        counter ++
    }
return (sum/counter)
//return (sum/n.lenght)
}
// nao preciso do counter, era so dar um sum/n.lenght no return
console.log(media([1,3,6,3,4,1]))
