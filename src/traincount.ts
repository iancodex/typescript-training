
// function countpositives(num: number[]): number {
//     let count: number = 0;

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > 0) {
//             count++;
//         }
//     }

//     return count;
// }
// let countp = countpositives([1,4.-2,4,2,3,3,-3,-3,-4,-6,-121,45])
// console.log(countp)

//O CHAT FEZ TUDO, NAO CONSEGUI FAZER

// What is a array?
let num: number[] = [1,2,3,4,5,6,7]
console.log(num)

//array with strings
let names: string[] = ['Luara','Ian','Zé','Lua']
console.log(names)
console.log(names[0])

// add elements (push metod)

names.push('Maria');
console.log(names)
console.log(names[4])

// remove the last element (pop metod)

names.pop();
console.log(names)

// verify how big is the array (length metod)
console.log(names.length);

//exercice one;

let nomes:string [] = ['Cláudia','Luara','Lucimar']
console.log(nomes)
nomes.push('Dian')
console.log(nomes)

let n1: number[] = [1,2,3,4];

for (let i  = 0; i < n1.length; i++) {
    console.log(n1[i]);
}


function countn(num2:number[]):number{
    let total = 0;

    for(let i = 0; i < num2.length; i++)
        if (num2[i] > 0) {
                total++;
        }

        return total
}
console.log(countn([1,3,5,-3,-4]))


function contar(n3:number[]):number{
    let cnt:number = 0
    for (let i_ = 0; i_ < n3.length; i_++ ){
        if (n3[i_] < 0){
            cnt++;
        }
    }
    return cnt;
}
console.log(contar([1,5,3,7,-2,-3,-1]))
