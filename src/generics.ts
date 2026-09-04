// type Input = number | string;

// function firstEle(arr: Input[]){
//     return arr[0];
// }
// const value = firstEle(['ratnadeep', 'abitkar']);
// console.log(value);
//console.log(value.toUpperCase()); error cause toUpperCase work on only strings 
//this is solved by generics 


// function indentity<T>(arg: T): T{
//     return arg;
// }
// let output1 = indentity<string>('hello');
// console.log(output1.toUpperCase());

                // T gets replaced by string when called
                // |
                // |     // input arr is an array of strings (string[])
function firstEle<T>(arr: T[]): T | undefined { // return type is string or undefined
    return arr[0];
}
const value = firstEle<string>(['RATNADEEP', 'abitkar'])
console.log(value?.toLowerCase()); // Safe and works perfectly!