const x: number = 1;
console.log(x);


function greet(firstname: string){//parameters in functions should have a type
    console.log(`hello ${firstname}`)
}

greet('ratnadeep'); //argument must be a string