const x: number = 1;
console.log(x);


function greet(firstname: string){//parameters in functions should have a type
    console.log(`hello ${firstname}`)
}

greet('ratnadeep'); //argument must be a string

                                    //* here                
function sum(a: number, b: number): number{
    //console.log(`sum is ${a+b}`) returns void cause its not returning anything back to the function
    return a+b; //to explicitly say that function must return a number, declare at function defination *
}

//but even without explicitly mentioning : number at the function defination, ts can identify that its return value must be a number because ts has type inference 
//Type inference is TypeScript's built-in functionality that automatically figure out (infer) data types for you, so you don't always have to write them out manually.

sum(2,3);


function isLegal(age: number): boolean{
    if(age>18){
        return true;
    }else{
        return false;
    }
}
console.log(isLegal(21));