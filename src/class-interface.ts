interface Person{
    name: String,
    age: number,
    greet(phrase: string) : void,
}

class Employee implements Person {
    name: string; //defined here again because interface data types just acts as a rule book
    age: number;

    constructor(n: string, a: number) {
        this.name = n; 
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const emp = new Employee("Ratnadeep", 21);
emp.greet("hello")