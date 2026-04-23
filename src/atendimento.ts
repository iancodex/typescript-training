function create(people: {name:string,age:number}[]):number{
    let count:number = 0
        for(let i = 0; i <people.length; i++){
            if (people[i].age >= 18) {
            count++;
        }
        }
        return count;
}
    let people = [{nome: "Ana", idade: 17},
        {nome: "João", idade: 15},
        {nome: "Carlos", idade: 20}
    ];
console.log((create(people)))