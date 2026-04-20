let age:number = 18
let name:string = ('Luara')
function isolder(agetrue: number):string{
    if (agetrue >= 18){
        return ("Older")
    }else{
        return ("Minor")
    }
}
console.log(`${name} is ${isolder(age)}`)
