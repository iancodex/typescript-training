function verifynum(n:number){
    if (n > 0){
    return ("Positive")
    }
    if (n == 0){
        return ('Nulo')
    }
    else{
        return ('Negative')
    }
}
const number1:string = verifynum(-2)
console.log(number1)
