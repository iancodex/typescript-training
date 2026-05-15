// class Rational {
//     private num: number;
//     private den: number;


//     constructor(num?:number, den?:number){
//         if (den === 0)throw new Error('não encontrado');
//             this.num = num ?? 0;
//             this.den = den ?? 1;
//     }
//     }
// const r1 = new Rational(1,2)
// console.log(r1)
class Rational {
    private readonly num:number
    private readonly den:number

    constructor(num:number = 0, den: number = 1) {
        this.num = num
        this.den = den
    }
}
const r1 = new Rational()
const r2 = new Rational(5)
const r3 = new Rational(2,5)
const r4 = new Rational(2,8)
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)