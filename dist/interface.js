"use strict";
// function isLegal(user:{
//     fname: string,
//     lname: string,
//     age: number
// }){
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const myuser = {
    fname: "Ratnadeep",
    lname: "Abitkar",
    age: 22
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greetuser(user) {
    console.log(`hello there ${user.fname}`);
}
console.log(isLegal(myuser));
console.log(greetuser(myuser));
