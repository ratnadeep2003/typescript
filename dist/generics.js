"use strict";
// type Input = number | string;
Object.defineProperty(exports, "__esModule", { value: true });
// function firstEle(arr: Input[]){
//     return arr[0];
// }
// const value = firstEle(['ratnadeep', 'abitkar']);
// console.log(value);
//console.log(value.toUpperCase()); error cause toUpperCase work on only strings 
//this is solved by generics 
function indentity(arg) {
    return arg;
}
let output1 = indentity('hello');
console.log(output1.toUpperCase());
function firstEle(arr) {
    return arr[0];
}
const value = firstEle(['RATNADEEP', 'abitkar']);
console.log(value?.toLocaleLowerCase());
