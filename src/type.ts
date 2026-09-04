type Employee ={
    name: string,
    age: number
}

interface Manager {
    name: string,
    department: string
}

type techLead = Employee & Manager;
const t: techLead = {
    name: 'Aryan', age:22, department: 'backend'
}
