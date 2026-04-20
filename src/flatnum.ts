function flat(numeral:number[]):number{
    let flatnum = numeral[0]
    for(let i = 0;i < numeral.length;i++){
        if (numeral[i]< flatnum) {
            flatnum = numeral[i];
        } 
 }    
    {
    return flatnum;
    }  
}
console.log(flat([3,2,3,4,5,6,3,5,2,5,8,93,1]))