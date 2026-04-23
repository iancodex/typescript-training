function verifynum(n:number):string{
    if (n > 0){
    return ("Positive")
    }
    else if (n == 0){
        return ('Null')
//i used if two times, i shold've be used else if, is like a elif in python
    }
    else{
        return ('Negative')
    }
}
const number1:string = verifynum(-2)
console.log(number1)
