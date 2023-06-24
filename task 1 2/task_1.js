let person = [
        {name: "kaushal", age: 20},
        {name: "jiger", age: 25},
        {name: "vivek", age: 18},
        {name: "jay", age: 10},
    ];
    let names = person.map((p) => p.name);
    console.log(names);

    let totalAge = person.reduce((acc, p) => acc + p.age, 0);
    console.log(totalAge);

    let count = person.reduce((count) => count + 1, 0);
    console.log(count);

    let great = person.map((p) => p.age >= 18);
console.log(great);