"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name; //defined here again because interface data types just acts as a rule book
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const emp = new Employee("Ratnadeep", 21);
emp.greet("hello");
