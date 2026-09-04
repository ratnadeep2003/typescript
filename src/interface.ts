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

// function greetUser(user:{
//     fname: string,
//     lname: string,
//     age: number
// }){
//     console.log(`hi there ${user.fname}`);
// }
// // code repeatition below, hence interface is used 
// isLegal({
//     fname:'ratnadeep',
//     lname:'abitkar',
//     age:22
// })

// greetUser({
//     fname:'ratnadeep',
//     lname:'abitkar',
//     age:22
// })


interface User{ //define an interface to avoid code repeatition for the below object
    fname: string,
    lname: string,
    age: number,
    email?: string //optional
}

const myuser: User ={ //the object = myuser based on the datatype provided in interface
    fname: "Ratnadeep",
    lname:"Abitkar",
    age: 22
}


function isLegal(user: User){//first function that uses myuser object 
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
function greetuser(user: User){//2nd fucntion that uses myuser object
    console.log(`hello there ${user.fname}`);
}

console.log(isLegal(myuser));
console.log(greetuser(myuser));
