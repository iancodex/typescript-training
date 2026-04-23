    let contadorA = 1;
    let contadorP = 1;
    let commomfila: string[] = [];


function createkeyA():string{
   let password = "A" + contadorA;
   contadorA++;
   commomfila.push(password)

   return password;
}
console.log(createkeyA())

let prioritaryfila: string[] = []
function keypriorityfila():string{
    let password = "P" + contadorP;
    contadorP++;
    prioritaryfila.push(password)

    return password
}
function callkey():string{
    if (prioritaryfila.length > 0) {
        return prioritaryfila.shift()!;
    } else if (commomfila.length > 0) {
        return commomfila.shift()!;
    } else {
        return "Without password"
    }
}
console.log(keypriorityfila())
console.log(keypriorityfila())
console.log(keypriorityfila())
console.log(commomfila)
console.log(callkey())
console.log(callkey())
console.log(callkey())
console.log(callkey())
console.log(callkey())
console.log(callkey())
console.log(commomfila)