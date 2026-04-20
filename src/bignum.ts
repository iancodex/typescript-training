function bigger(num:number[]):number{
    let bigger = num[0];
    for(let i = 0;i < num.length; i++)
        if (num[i]> bigger){
            bigger = num[i]
        }
    return bigger;
    }
console.log(bigger([1,5,8,10]))